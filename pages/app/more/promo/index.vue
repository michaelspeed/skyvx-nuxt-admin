<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Promo Code</h5>
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
          <a href="javascript:;" @click="add = true" class="btn btn-light-primary font-weight-bold ml-2">Add Promo Code</a>
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container ">
        <v-progress-linear
          v-if="$apollo.queries.promos.loading"
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
        <v-card elevation="1">
          <v-card-title>
            <h2 class="text-primary">Promos</h2>
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
            v-if="!$apollo.queries.promos.loading"
            :headers="headers"
            :items="promos"
            hide-default-footer
          >
            <template v-slot:item.status="{ item }">
              <v-chip
                v-if="item.enabled"
                color="green"
                small
                outlined
              >
                Enabled
              </v-chip>
              <v-chip
                v-if="!item.enabled"
                color="red"
                small
                outlined
              >
                Disabled
              </v-chip>
            </template>
            <template v-slot:item.action="{ item }">
              <Promocode :promo="item"/>
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
    <v-dialog
      v-model="add"
      width="50vw"
    >
      <v-app-bar color="primary">
        <v-toolbar-title class="text-white font-weight-bold">Add Promo Code</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              label="Promo Code"
              placeholder="promo code"
              filled
              rounded
              v-model="code"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-select
              :items="flatTypes"
              label="Type"
              filled
              rounded
              v-model="flat"
            ></v-select>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Value"
              placeholder="Value"
              filled
              rounded
              type="number"
              v-model="value"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Minimum Value"
              placeholder="minimum value"
              filled
              rounded
              type="number"
              v-model="min"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Maximum Value"
              placeholder="maximum value"
              filled
              rounded
              type="number"
              v-model="max"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-select
              :items="applicable"
              label="Applicable To:"
              filled
              rounded
              v-model="applicableTo"
            ></v-select>
          </div>
        </div>
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
          @click="onCreatePromo"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-dialog>
  </div>
</template>

<script lang="ts">

import {Component, Vue, Watch} from "nuxt-property-decorator";
import {
  BookingConnection,
  CreatePromoDocument,
  GetAllPromosConnectionsDocument,
  GetAllPromosDocument,
  GetBookingConnectionsDocument,
  Promo, PromoConnection
} from "~/gql";
import Promocode from "~/components/promo/promocode.vue";

@Component({
  components: {Promocode},
  layout: 'console',
  apollo: {
    promos: {
      query: GetAllPromosDocument,
      variables() {
        return {
          limit: 10,
          start: (this.page - 1) * 10,
          search: this.search !== '' ? this.search : undefined
        }
      },
      pollInterval: 3000
    },
    promosConnection: {
      query: GetAllPromosConnectionsDocument,
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
export default class PromoIndex extends Vue {
  private add = false

  private code = ''
  private flatTypes = ['FLAT', 'PERCENTAGE']
  private flat = ''
  private value = 0
  private min = 0
  private max = 0
  private applicable = ['HOTEL', 'HOUR', 'TOUR', 'INTERCITY']
  private applicableTo = ''

  private loading = false

  private page = 1
  private search = ''

  private promos: Promo[]

  private promosConnection: PromoConnection

  private length = 0

  @Watch('promosConnection')
  calculateLength() {
    if (this.promosConnection) {
      this.length = Math.ceil(this.promosConnection.aggregate!.totalCount / 10)
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
      text: 'Code',
      align: 'start',
      sortable: false,
      value: 'code'
    },
    {
      text: 'Type',
      align: 'start',
      sortable: false,
      value: 'type'
    },
    {
      text: 'Applicable',
      align: 'start',
      sortable: false,
      value: 'applicable'
    },
    {
      text: 'Value',
      align: 'start',
      sortable: false,
      value: 'value'
    },
    {
      text: 'Status',
      value: 'status'
    },
    {
      text: 'Action',
      value: 'action'
    }
  ]

  onCreatePromo() {
    if (/\s/.test(this.code)) {
      this.$message.error('Code does not match regex')
      return
    }
    if (this.code === '') {
      this.$message.error('Code is required')
      return
    }
    if (this.flat === '') {
      this.$message.error('Type is required')
      return
    }
    if (this.value === 0) {
      this.$message.error('Value is required')
      return
    }
    if (this.applicableTo === '') {
      this.$message.error('Applicable target is required')
      return
    }
    this.loading = true
    this.$apollo.mutate({
      mutation: CreatePromoDocument,
      variables: {
        code: this.code,
        type: this.flat,
        applicable: this.applicableTo,
        value: parseInt(this.value),
        max: parseInt(this.max),
        min: parseInt(this.min)
      }
    })
      .then(value => {
        this.loading = false
        this.$message.success('Promo added')
        this.add = false
      })
      .catch(e => {
        this.loading = false
        this.$message.error(e.message)
      })
  }
}
</script>
