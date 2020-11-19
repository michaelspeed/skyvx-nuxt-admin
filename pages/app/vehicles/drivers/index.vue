<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Drivers</h5>
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
          <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="add = true">Add Driver</a>
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container ">
        <v-progress-linear
          v-if="$apollo.queries.drivers.loading"
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
        <v-card elevation="1">
          <v-card-title>
            <h2 class="text-primary">Drivers</h2>
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
            v-if="!$apollo.queries.drivers.loading"
            :headers="headers"
            :items="drivers"
            hide-default-footer
          >
            <template v-slot:item.actions="{ item }">
              <DriverActions :driver="item"/>
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
        <v-toolbar-title class="text-white font-weight-bold">Add Driver</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              label="Name"
              placeholder="Driver Name"
              filled
              rounded
              v-model="name"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Number"
              placeholder="Phone Number"
              filled
              rounded
              v-model="number"
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
          @click="onCreateDriver"
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

import {Component, Vue} from "nuxt-property-decorator";
import {CreateDriverDocument, Drivers, GetAllDriversDocument} from "~/gql";
import DriverActions from "~/components/drivers/DriverActions.vue";

@Component({
  components: {DriverActions},
  layout: 'console',
  apollo: {
    drivers: {
      query: GetAllDriversDocument,
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
export default class DriversIndex extends Vue {
  private add = false;

  private loading = false

  private name = ''
  private number = ''

  private page = 1
  private search = ''

  private drivers: Drivers[]

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
      value: 'name'
    },
    {
      text: 'Number',
      align: 'start',
      sortable: false,
      value: 'number'
    },
    {
      text: 'Actions',
      align: 'end',
      value: 'actions'
    }
  ]

  onCreateDriver() {
    if (this.name === '') {
      this.$message.error('Name is required')
      return
    }
    if (this.number === '') {
      this.$message.error('Number is required')
      return
    }
    this.loading = true;
    this.$apollo.mutate({
      mutation: CreateDriverDocument,
      variables: {
        name: this.name,
        number: this.number,
      }
    })
      .then(value1 => {
        this.loading = false;
        this.add = false;
        this.$message.success('Driver Added')
      })
      .catch(error => {
        this.loading = false;
        this.$message.error(error.message)
      })
  }

}
</script>
