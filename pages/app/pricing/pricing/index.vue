<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Pricing</h5>
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
          <CreatePricing/>
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container ">
        <v-progress-linear
          v-if="$apollo.queries.pricings.loading"
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
        <v-card elevation="1">
          <v-card-title>
            <h2 class="text-primary">Pricing</h2>
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
            v-if="!$apollo.queries.pricings.loading"
            :headers="headers"
            :items="pricings"
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
              <PricingActions :pricing="item"/>
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
import CreatePricing from "~/components/pricing/CreatePricing.vue";
import {
  GetAllPricingConnectionsDocument,
  GetAllPricingDocument,
  GetBookingConnectionsDocument,
  Pricing,
  PricingConnection
} from "~/gql";
import PricingActions from "~/components/pricing/PricingActions.vue";

@Component({
  components: {PricingActions, CreatePricing},
  layout: 'console',
  apollo: {
    pricings: {
      query: GetAllPricingDocument,
      variables() {
        return {
          limit: 10,
          start: (this.page - 1) * 10,
          search: this.search !== '' ? this.search : undefined
        }
      },
      pollInterval: 3000
    },
    pricingsConnection: {
      query: GetAllPricingConnectionsDocument,
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
export default class PricingList extends Vue {
  private loading = false;
  private add = false;

  private page = 1
  private search = ''

  private pricings: Pricing[]
  private pricingsConnection: PricingConnection

  private length = 0

  @Watch('pricingsConnection')
  calculateLength() {
    if (this.pricingsConnection) {
      this.length = Math.ceil(this.pricingsConnection.aggregate!.count / 10)
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
      text: 'Slug',
      align: 'start',
      sortable: false,
      value: 'nameSlug'
    },
    {
      text: 'Base (INR)',
      align: 'start',
      sortable: false,
      value: 'base'
    },
    {
      text: 'Tax (INR)',
      align: 'start',
      sortable: false,
      value: 'tax'
    },
    {
      text: 'Type',
      align: 'start',
      sortable: false,
      value: 'type'
    },
    {
      text: 'Actions',
      align: 'end',
      value: 'actions'
    }
  ]

  @Watch('pricings')
  onChangePricing() {
    console.log(this.pricings)
  }
}
</script>
