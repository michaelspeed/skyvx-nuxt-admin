<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent ">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Create Vehicle</h5>
          <!--end::Title-->

          <!--begin::Separator-->
          <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
          <!--end::Separator-->

        </div>
        <!--end::Details-->

        <!--begin::Toolbar-->
        <div class="d-flex align-items-center">
          <!--begin::Button-->
          <a href="#" class="">

          </a>
          <!--end::Button-->

          <!--begin::Button-->
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container ">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              label="Vehicle Class"
              placeholder="Vehicle Class"
              filled
              rounded
              v-model="vclass"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Vehicle Name"
              placeholder="Vehicle Name"
              filled
              rounded
              v-model="vname"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Vehicle Tag Line"
              placeholder="Vehicle Tag Line"
              filled
              rounded
              v-model="vtag"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-select
              :items="operations"
              label="Operations"
              filled
              rounded
              v-model="optag"
            ></v-select>
          </div>
          <div class="col-md-6">
            <div class="d-flex flex-row align-items-center">
              <span class="font-weight-regular body-1">Icon / Logo</span>
              <v-file-input
                class="ml-4"
                hide-input
                v-model="image"
              ></v-file-input>
              <v-img
                v-if="readImage"
                max-height="150"
                max-width="250"
                :src="readImage"
              ></v-img>
            </div>
          </div>
          <div class="col-md-6"></div>
          <div class="col-md-6">
            <v-select
              :items="occupencyListing"
              label="Max Occupancies"
              filled
              rounded
              v-model="max"
            ></v-select>
          </div>
          <div class="col-md-6">
            <v-textarea
              label="Occupancy"
              placeholder="Occupancy"
              filled
              rounded
              v-model="occ"
            ></v-textarea>
          </div>
          <div class="col-md-6">
            <v-switch
              v-model="luggage"
              label="Luggage"
            ></v-switch>
          </div>
        </div>
        <v-progress-linear
          color="lime"
          indeterminate
          v-if="loading"
        ></v-progress-linear>
        <div class="row">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="onCreateVehicle"
          >Add</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {mainUrl} from "~/utils/global";
import axios from 'axios';
import {CreateVehicleDocument} from "~/gql";

@Component({
  layout: 'console'
})
export default class CreateVehicles extends Vue {

  private vclass = ''
  private vname = ''
  private vtag = ''
  private luggage = false;
  private loading = false;

  private image: any = null;
  private readImage: any = null;

  private occupencyListing: any[] = []
  private operations: any[] = ['hourly', 'intercity', 'hotel', 'all', 'hourly - intercity', 'intercity - hotel', 'hotel - hourly']

  private optag = ''
  private max = ''
  private occ = ''

  @Watch('image')
  onImageChange() {
    console.log(this.image)
    if (this.image) {
      let reader = new FileReader();
      reader.onload = e => {
        this.readImage = e.target!.result
      }
      reader.readAsDataURL(this.image)
    }
  }

  mounted() {
    for(let i = 1; i < 33; i++) {
      this.occupencyListing.push(i)
    }
  }

  onCreateVehicle() {
    this.loading = true;
    const formData = new FormData();
    formData.append('files', this.image!, this.image!.name)
    axios.post(`${mainUrl}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization : `Bearer ${this.$apolloHelpers.getToken()}`
      }
    }).then(value => {
      const data = value.data[0]
      this.$apollo.mutate({
        mutation: CreateVehicleDocument,
        variables: {
          class:  this.vclass,
          title: this.vname,
          tag: this.vtag,
          operations: this.optag,
          icon: data.id,
          luggage: this.luggage,
          max: Number(this.max),
          occ: this.occ
        }
      })
      .then(value1 => {
        this.loading = false
        this.$router.back()
      })
      .catch(e => this.$message.error(e.message))
    })
    .catch(e => this.$message.error(e.message))
  }

}
</script>
