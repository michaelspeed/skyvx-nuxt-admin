<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Currency</h5>
          <!--end::Title-->

          <!--begin::Separator-->
          <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200">
            <span class="ml-4 text-primary" v-if="!$apollo.queries.currenciesConnection.loading">{{currenciesConnection.aggregate.totalCount}}</span>
          </div>
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
          <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="add = true">Add Currency</a>
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container ">
        <v-progress-linear
          v-if="$apollo.queries.currencies.loading"
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
        <v-card elevation="1">
          <v-card-title>
            <h2 class="text-primary">Currency</h2>
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
            v-if="!$apollo.queries.currencies.loading"
            :headers="headers"
            :items="currencies"
            hide-default-footer
          >
          </v-data-table>
        </v-card>
      </div>
    </div>
    <v-dialog
      v-model="add"
      width="50vw"
    >
      <v-app-bar color="primary">
        <v-toolbar-title class="text-white font-weight-bold">Add Currency</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              label="Name"
              placeholder="Currency Name"
              filled
              rounded
              v-model="name"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Name"
              placeholder="Short Currency Name"
              filled
              rounded
              v-model="sname"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Base Rate"
              placeholder="Base rate"
              filled
              rounded
              :disabled="!base"
              v-model="baserate"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-switch
              v-model="base"
              label="Base rate"
            ></v-switch>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Unicode"
              placeholder="Paste unicode text icon of the currency"
              filled
              rounded
              v-model="unicode"
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
          @click="onCreateCurrency"
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
import {CreateCurrencyDocument, Currency, GetAllCurrencyDocument, GetAllCurrenciesConnectionDocument} from "~/gql";
import {Client} from "@googlemaps/google-maps-services-js";

@Component({
  layout: 'console',
  apollo: {
    currencies: {
      query: GetAllCurrencyDocument,
      variables() {
        return {
          limit: 10,
          start: (this.page - 1) * 10,
          search: this.search !== '' ? this.search : undefined
        }
      }
    },
    currenciesConnection: {
      query: GetAllCurrenciesConnectionDocument,
      pollInterval: 3000
    }
  }
})
export default class AllCurrency extends Vue {
  private add = false;
  private name = ''
  private sname = ''
  private base = false;
  private baserate = '';
  private unicode = ''
  private loading = false;

  private page = 1
  private search = ''
  private currencies: Currency[]

  private headers = [
    {
      text: 'Id',
      align: 'start',
      sortable: false,
      value: 'id'
    },
    {
      text: 'Currency Name',
      align: 'start',
      sortable: false,
      value: 'name'
    },
    {
      text: 'Currency Value (in base)',
      align: 'start',
      sortable: false,
      value: 'value'
    }
  ]

  onCreateCurrency() {
    this.loading = true;
    this.$apollo.mutate({
      mutation: CreateCurrencyDocument,
      variables: {
        name: this.name,
        key: this.sname,
        value: parseFloat(this.baserate),
        base: this.base,
      }
    })
    .then(() => {
      this.loading = false;
      this.name = ''
      this.sname = ''
      this.base = false;
      this.baserate = '0'
      this.add = false;
    })
    .catch(e => {
      this.loading = false;
    })
  }
}
</script>
