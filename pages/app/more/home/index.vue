<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Home Page</h5>
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
          <a href="javascript:;" @click="add = true" class="btn btn-light-primary font-weight-bold ml-2">Add Tour Items</a>
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container ">
        <v-card elevation="1">
          <v-card-title>
            <h2 class="text-primary">Home Page Main</h2>
          </v-card-title>
          <v-data-table
            v-if="!$apollo.queries.tours.loading"
            :headers="headers"
            :items="main"
            hide-default-footer
          >
            <template v-slot:item.action="{ item }">
              <a href="javascript:;" @click="$router.push(`/app/tours/${item.id}`)" class="btn btn-sm btn-light-primary font-weight-bold ml-2">View Tour</a>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container ">
        <v-card elevation="1">
          <v-card-title>
            <h2 class="text-primary">Home Page Tours</h2>
          </v-card-title>
          <v-data-table
            v-if="!$apollo.queries.tours.loading"
            :headers="headers"
            :items="home"
            hide-default-footer
          >
            <template v-slot:item.action="{ item }">
              <a href="javascript:;" @click="$router.push(`/app/tours/${item.id}`)" class="btn btn-sm btn-light-primary font-weight-bold ml-2">View Tour</a>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
    <v-dialog
      v-model="add"
      width="50vw"
    >
      <v-app-bar color="primary">
        <v-toolbar-title class="text-white font-weight-bold">Add Tours</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-12">
            <v-text-field
              label="Tours"
              placeholder="Search Tours"
              filled
              rounded
              v-model="search"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-select
              :items="applyItems"
              label="Applicable To:"
              filled
              rounded
              v-model="apply"
            ></v-select>
          </div>

        </div>
        <v-list
          flat
          subheader
          two-line
        >
          <v-subheader>Tours</v-subheader>

          <v-list-item-group
            v-model="tourid"
            active-class=""
          >
            <v-list-item v-for="item in tours" :key="item.id">
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{item.title}}</v-list-item-title>
                  <v-list-item-subtitle>{{item.city.name}}</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
      <v-progress-linear
        color="lime"
        indeterminate
        reverse
        v-if="loading"
      ></v-progress-linear>
      <v-card-actions style="background-color: white;">
        <v-spacer></v-spacer>
        <v-btn
          color="red"
          text
          @click="add = false"
        >
          Close
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="onClickAdd"
        >
          Add
        </v-btn>
      </v-card-actions>
    </v-dialog>
    <v-dialog
      v-model="loading"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {GetAllToursDocument, GetHomePageDocument, Homepage, Tours, UpdateHomePageDocument} from "~/gql";

@Component({
  layout: 'console',
  apollo: {
    homepage: {
      query: GetHomePageDocument,
      pollInterval: 3000
    },
    tours: {
      query: GetAllToursDocument,
      variables() {
        return {
          search: this.search !== '' ? this.search : undefined
        }
      },
      pollInterval: 3000
    }
  }
})
export default class HomePage extends Vue {
  private homepage: Homepage

  private applyItems = ['home', 'main']
  private apply = ''

  private add = false
  private loading = false
  private search = ''
  private tourid = ''
  private tours: Tours[]

  private main: Tours[] | any = []
  private home: Tours[] | any = []

  @Watch('homepage')
  onChangeHome() {
    if (this.homepage) {
      console.log(this.homepage)
      this.main = this.homepage!.tours!
      this.home = this.homepage!.main_cars_tours!
    }
  }

  @Watch('tourid')
  onChangeTour() {
    console.log(this.tourid)
  }

  onClickAdd() {
    this.loading = true
    if(this.apply === 'home') {
      this.home.push(this.tours[this.tourid])
    } else {
      this.main.push(this.tours[this.tourid])
    }
    this.$apollo.mutate({
      mutation: UpdateHomePageDocument,
      variables: {
        tours: this.home.map(item => item.id),
        main: this.main.map(item => item.id)
      }
    })
    .then(() => {
      this.loading = false
      this.add = false
    })
    .catch(e => {
      this.$message.error(e.message)
      this.add = false
      this.loading = false
    })
  }

  private headers = [
    {
      text: 'Id',
      align: 'start',
      sortable: false,
      value: 'id'
    },
    {
      text: 'Name',
      align: 'start',
      sortable: false,
      value: 'title'
    },
    {
      text: 'Action',
      value: 'action'
    }
  ]


}
</script>
