<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Cities</h5>
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
          <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="add = true">Add Cities</a>
          <!--<a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="add = true">Import Cities Cities</a>-->
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container ">
        <v-progress-linear
          v-if="$apollo.queries.cities.loading"
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
        <v-card elevation="1">
          <v-card-title>
            <h2 class="text-primary">Cities</h2>
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
            v-if="!$apollo.queries.cities.loading"
            :headers="headers"
            :items="cities"
            hide-default-footer
          >
            <template v-slot:item.actions="{ item }">
              <CitiesActions :city="item"/>
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
        <v-toolbar-title class="text-white font-weight-bold">Add City</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              label="Name"
              placeholder="City Name"
              filled
              rounded
              v-model="name"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Code"
              placeholder="City Code"
              filled
              rounded
              v-model="code"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-autocomplete
              v-model="ccomon"
              :items="citysearchItems"
              :search-input.sync="citysearch"
              color="primary"
              hide-no-data
              hide-selected
              filled
              rounded
              item-text="description"
              item-value="place_id"
              label="City common name"
              placeholder="Search city name"
              prepend-icon="mdi-map-search"
              return-object
            ></v-autocomplete>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-3">
                <v-checkbox
                  v-model="hotel"
                  label="Hotel"
                ></v-checkbox>
              </div>
              <div class="col-md-3">
                <v-checkbox
                  v-model="intercity"
                  label="Inter City"
                ></v-checkbox>
              </div>
              <div class="col-md-3">
                <v-checkbox
                  v-model="tour"
                  label="Tours"
                ></v-checkbox>
              </div>
              <div class="col-md-3">
                <v-checkbox
                  v-model="hourly"
                  label="Hourly"
                ></v-checkbox>
              </div>
            </div>
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
          @click="onCreateCity"
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
import {CreateCityDocument, CreateLocationDocument, GetAllCitiesDocument} from "~/gql";
import CitiesActions from "~/components/cities/CitiesActions.vue";

declare global {
  interface Window {
    google:any;
  }
}

@Component({
  components: {CitiesActions},
  layout: 'console',
  apollo: {
    cities: {
      query: GetAllCitiesDocument,
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
export default class Cities extends Vue {
  private add = false;
  private importadd = false;
  private name = ''
  private code = ''
  private ccomon: any = null
  private citysearch: any = null
  private citysearchItems = []
  private loading = false;

  private hotel = true;
  private intercity = true;
  private tour = true;
  private hourly = true;

  private gplaces

  private page = 1
  private search = ''

  private cities: Cities[]

  private headers = [
    {
      text: 'Id',
      align: 'start',
      sortable: false,
      value: 'id'
    },
    {
      text: 'Cities Name',
      align: 'start',
      sortable: false,
      value: 'name'
    },
    {
      text: 'Label',
      align: 'start',
      sortable: false,
      value: 'label'
    },
    {
      text: 'Actions',
      align: 'end',
      value: 'actions'
    }
  ]

  mounted() {
    this.gplaces = new window.google.maps.places.AutocompleteService()
  }

  @Watch('citysearch')
  onCitySearch(){
    if (this.citysearch !== null) {
      this.gplaces.getQueryPredictions({
        input: this.citysearch,
        types: ['(cities)']
      }, (predection, status) => {
        this.citysearchItems = predection
      })
    }
  }

  @Watch('cities')
  onPlaceSelect() {
    console.log(this.cities)
  }

  onCreateCity() {
    this.loading = true;
    this.$apollo.mutate({
      mutation: CreateLocationDocument,
      variables: {
        format: this.ccomon!.description,
        geoJSON: this.ccomon,
        placeId: this.ccomon!.place_id
      }
    })
    .then(value => {
      this.$apollo.mutate({
        mutation: CreateCityDocument,
        variables: {
          name: this.name,
          cmapping: this.ccomon!.place_id,
          label: this.code,
          location: value.data.createLocation.location.id,
          hotel: this.hotel,
          intercity: this.intercity,
          tour: this.tour,
          hourly: this.hourly,
        }
      })
      .then(value1 => {
        this.loading = false;
        this.add = false;
        this.$message.success('City Added')
      })
    })
    .catch(error => {
      this.loading = false;
      this.$message.error('Location is already available')
    })
  }
}
</script>
