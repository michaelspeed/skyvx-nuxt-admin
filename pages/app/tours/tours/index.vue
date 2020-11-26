<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Tours</h5>
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
          <a href="javascript:;" @click="$router.push('/app/tours/builder')" class="btn btn-light-primary font-weight-bold ml-2">Add Tour</a>
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container ">
        <v-progress-linear
          v-if="$apollo.queries.tours.loading"
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
        <v-card elevation="1">
          <v-card-title>
            <h2 class="text-primary">Tours</h2>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            v-if="!$apollo.queries.tours.loading"
            :headers="headers"
            :items="tours"
            hide-default-footer
          >
            <template v-slot:item.action="{ item }">
              <a href="javascript:;" @click="$router.push(`/app/tours/${item.id}`)" class="btn btn-sm btn-light-primary font-weight-bold ml-2">View Tour</a>
            </template>
          </v-data-table>
          <hr/>
          <div>
            <v-pagination
              v-model="page"
              :length="length"
            ></v-pagination>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue, Watch} from "nuxt-property-decorator";
import {
  GetAllTourConnectionsDocument,
  GetAllToursDocument,
  GetBookingConnectionsDocument,
  Tours,
  ToursConnection
} from "~/gql";

@Component({
  layout: 'console',
  apollo: {
    tours: {
      query: GetAllToursDocument,
      variables() {
        return {
          limit: 10,
          start: (this.page - 1) * 10,
          search: this.search !== '' ? this.search : undefined
        }
      },
      pollInterval: 3000
    },
    toursConnection: {
      query: GetAllTourConnectionsDocument,
      variables() {
        return {
          limit: 10,
          start: (this.page - 1) * 10,
          search: this.search !== '' ? this.search : undefined
        }
      },
      pollInterval: 3000
    }
  }
})
export default class ToursMain extends Vue {
  private page = 1
  private search = ''

  private tours: Tours[]
  private toursConnection: ToursConnection

  private length = 0

  @Watch('toursConnection')
  calculateLength() {
    if (this.toursConnection) {
      this.length = Math.ceil(this.toursConnection.aggregate!.totalCount / 10)
    }
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
      text: 'Slug',
      align: 'start',
      sortable: false,
      value: 'slug'
    },
    {
      text: 'City',
      align: 'start',
      sortable: false,
      value: 'city.name'
    },
    {
      text: 'Action',
      value: 'action'
    }
  ]
}
</script>
