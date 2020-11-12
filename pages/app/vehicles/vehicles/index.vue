<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Vehicles</h5>
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
          <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="onCreateVehicles">Add Vehicle</a>
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container ">
        <v-progress-linear
          v-if="$apollo.queries.vehicles.loading"
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
        <v-card elevation="1">
          <v-card-title>
            <h2 class="text-primary">Vehicles</h2>
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
            v-if="!$apollo.queries.vehicles.loading"
            :headers="headers"
            :items="vehicles"
            hide-default-footer
          >
            <template v-slot:item.actions="{ item }">
              <VehicleActions :vehicle="item"/>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "nuxt-property-decorator";
import {GetAllVehiclesDocument, Vehicles} from "~/gql";
import VehicleActions from "~/components/vehicles/VehicleActions.vue";

@Component({
  components: {VehicleActions},
  layout: 'console',
  apollo: {
    vehicles: {
      query: GetAllVehiclesDocument,
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
export default class VehiclesClass extends Vue {

  private page = 1
  private search = ''

  private vehicles: Vehicles[]

  private headers = [
    {
      text: 'Id',
      align: 'start',
      sortable: false,
      value: 'id'
    },
    {
      text: 'Title',
      align: 'start',
      sortable: false,
      value: 'title'
    },
    {
      text: 'Class',
      align: 'start',
      sortable: false,
      value: 'vehicleClass'
    },
    {
      text: 'Actions',
      align: 'end',
      value: 'actions'
    }
  ]

  onCreateVehicles() {
    this.$router.push('/app/vehicles/vehicles/create')
  }
}
</script>
