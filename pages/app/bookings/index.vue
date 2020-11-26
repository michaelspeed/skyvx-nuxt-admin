<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Bookings</h5>
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
          <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2">Add Booking</a>
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container ">
        <v-progress-linear
          v-if="$apollo.queries.bookings.loading || $apollo.queries.bookingsConnection.loading"
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
        <v-card elevation="1">
          <v-card-title>
            <h2 class="text-primary">Bookings</h2>
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
            v-if="!$apollo.queries.bookings.loading || $apollo.queries.bookingsConnection.loading"
            :headers="headers"
            :items="bookings"
            hide-default-footer
          >
            <template v-slot:item.type="{ item }">
              <v-chip
                v-if="item.type === 'INTER'"
                class="ma-2"
                color="green"
                text-color="white"
                x-small
              >
                {{item.type}}
              </v-chip>
              <v-chip
                v-if="item.type === 'HOUR'"
                class="ma-2"
                color="lime"
                text-color="white"
                x-small
              >
                {{item.type}}
              </v-chip>
              <v-chip
                v-if="item.type === 'HOTEL'"
                class="ma-2"
                color="indigo"
                text-color="white"
                x-small
              >
                {{item.type}}
              </v-chip>
              <v-chip
                v-if="item.type === 'TOUR'"
                class="ma-2"
                color="red"
                text-color="white"
                x-small
              >
                {{item.type}}
              </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <BookingActions :items="item"/>
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
import {Booking, BookingConnection, GetBookingConnectionsDocument, GetBookingsDocument} from "~/gql";
import BookingActions from "~/components/bookings/BookingActions.vue";

@Component({
  components: {BookingActions},
  layout: 'console',
  apollo: {
    bookings: {
      query: GetBookingsDocument,
      variables() {
        return {
          limit: 10,
          start: (this.page - 1) * 10,
          search: this.search !== '' ? this.search : undefined
        }
      },
      pollInterval: 3000
    },
    bookingsConnection: {
      query: GetBookingConnectionsDocument,
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
export default class BookingsList extends Vue {
  private page = 1
  private search = ''

  private bookings: Booking[]

  private bookingsConnection: BookingConnection

  private length = 0

  @Watch('bookingsConnection')
  calculateLength() {
    if (this.bookingsConnection) {
      this.length = Math.ceil(this.bookingsConnection.aggregate!.totalCount / 10)
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
      text: 'Passenger Name',
      align: 'start',
      sortable: false,
      value: 'name'
    },
    {
      text: 'Booking Type',
      align: 'start',
      sortable: false,
      value: 'type'
    },
    {
      text: 'Created At',
      align: 'start',
      sortable: false,
      value: 'created_at'
    },
    {
      text: 'Booking At',
      align: 'start',
      sortable: false,
      value: 'date'
    },
    {
      text: 'Actions',
      align: 'end',
      value: 'actions'
    }
  ]
}
</script>
