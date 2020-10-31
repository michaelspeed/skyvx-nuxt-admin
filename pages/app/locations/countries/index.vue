<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Countries</h5>
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
          <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="add = true">Add Country</a>
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <v-dialog
      v-model="add"
      width="50vw"
    >
      <v-app-bar color="primary">
        <v-toolbar-title class="text-white font-weight-bold">Add New Country</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              label="Name"
              placeholder="Country Name"
              filled
              rounded
              v-model="name"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Core"
              placeholder="Country Code"
              filled
              rounded
              v-model="code"
            ></v-text-field>
          </div>
        </div>
      </v-card-text>
      <v-progress-linear
        color="lime"
        indeterminate
        v-if="loading"
      ></v-progress-linear>
      <v-card-actions class="bg-white">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="onSaveCountry"
        >Add</v-btn>
        <v-btn
          color="error"
          text
          @click="add = false"
        >Cancel</v-btn>
      </v-card-actions>
    </v-dialog>
  </div>
</template>

<script lang="ts">

import {Component, Vue, Watch} from "nuxt-property-decorator";
import {Country, CreateCountryDocument, GetAllCountriesDocument} from "~/gql";

@Component({
  layout: 'console',
  apollo: {
    countries: {
      query: GetAllCountriesDocument,
      variables() {
        return {
          limit: 10,
          start: this.page * 10,
          search: this.search
        }
      }
    }
  }
})
export default class Countries extends Vue {
  private add = false;
  private name = ''
  private code = ''
  private loading = false;

  private page = 1
  private search = ''

  private countries: Country[]

  @Watch('countries')
  onGetCountries() {
    console.log(this.countries)
  }

  onSaveCountry(){
    this.loading = true;
    this.$apollo.mutate({
      mutation: CreateCountryDocument,
      variables: {
        name: this.name,
        code: this.code,
        enabled: true
      },
    })
    .then(() => {
      this.loading = false;
      this.add = false;
      this.name = '';
      this.code = '';
    })
    .catch(e => {
      this.loading = false;
      this.$message.error(e.message);
    })
  }
}
</script>
