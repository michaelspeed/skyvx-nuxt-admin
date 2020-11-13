<template>
  <div>
    <div>
      <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="addinter = true">Add Pricing</a>
    </div>
    <v-dialog
      v-model="addinter"
      width="50vw"
    >
      <v-app-bar color="primary" style="width:100%" dark>
        <v-toolbar-title class="text-white font-weight-bold">Select Pricing</v-toolbar-title>
        <v-tabs right v-model="tabs">
          <v-tab>Intercity Pricing</v-tab>
          <v-tab>Hotel Pricing</v-tab>
          <v-tab>Hourly Pricing</v-tab>
        </v-tabs>
      </v-app-bar>
      <v-card-text class="bg-white" v-if="tabs === 0">
        <div class="row">
          <div class="col-md-6">
            <v-autocomplete
              v-model="ocityId"
              :items="ocitysearchItems"
              :search-input.sync="ocitySearch"
              color="white"
              hide-no-data
              hide-selected
              item-text="name"
              item-value="id"
              label="Origin City"
              placeholder="Start typing to Search city"
              prepend-icon="mdi-database-search"
              return-object
              filled
              rounded
            ></v-autocomplete>
          </div>
          <div class="col-md-6">
            <v-autocomplete
              v-model="dcityId"
              :items="dcitysearchItems"
              :search-input.sync="dcitySearch"
              color="white"
              hide-no-data
              hide-selected
              item-text="name"
              item-value="id"
              filled
              rounded
              label="Destination City"
              placeholder="Start typing to Search City"
              prepend-icon="mdi-database-search"
              return-object
            ></v-autocomplete>
          </div>
          <div class="col-md-6">
            <v-autocomplete
              v-model="vehicleId"
              :items="vehicles"
              :search-input.sync="vehiclesSearch"
              color="white"
              hide-no-data
              hide-selected
              item-text="title"
              item-value="id"
              filled
              rounded
              label="Vehicles Class"
              placeholder="Start typing to Search vehicles"
              prepend-icon="mdi-database-search"
              return-object
            ></v-autocomplete>
          </div>
          <div class="col-md-12">
            <h6 class="ml-3">Pricing</h6>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Fare (Base)"
              placeholder="Fare (Base)"
              filled
              rounded
              v-model="base"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Fare (Tax)"
              placeholder="Fare (Tax)"
              filled
              rounded
              v-model="tax"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Additional Flat Fare"
              placeholder="Additional Flat Fare"
              filled
              rounded
              v-model="addFlat"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Additional Toll Fare"
              placeholder="Additional Toll Fare"
              filled
              rounded
              v-model="addToll"
            ></v-text-field>
          </div>
        </div>
      </v-card-text>
      <v-card-text class="bg-white" v-if="tabs === 1">
        <div class="row">
          <div class="col-md-6">
            <v-autocomplete
              v-model="originPoint"
              :items="ohotelCityItems"
              :search-input.sync="gocitySearch"
              color="white"
              hide-no-data
              hide-selected
              item-text="description"
              item-value="place_id"
              filled
              rounded
              label="Enter Origination Hotel / Commuter Point"
              placeholder="Start typing to Search places"
              prepend-icon="mdi-database-search"
              return-object
            ></v-autocomplete>
            <div>
              <v-checkbox
                v-model="ohotelcheck"
                label="Mark this location as a hotel"
              ></v-checkbox>
            </div>
          </div>
          <div class="col-md-6">
            <v-autocomplete
              v-model="destinationPoint"
              :items="dhotelCityItems"
              :search-input.sync="gdcitySearch"
              color="white"
              hide-no-data
              hide-selected
              item-text="description"
              item-value="place_id"
              filled
              rounded
              label="Enter Destination Hotel / Commuter Point"
              placeholder="Start typing to Search places"
              prepend-icon="mdi-database-search"
              return-object
            ></v-autocomplete>
            <div>
              <v-checkbox
                v-model="dhotelcheck"
                label="Mark this location as a hotel"
              ></v-checkbox>
            </div>
          </div>
          <div class="col-md-6">
            <v-autocomplete
              v-model="ocityId"
              :items="cities"
              :search-input.sync="ocitySearch"
              color="white"
              hide-no-data
              hide-selected
              item-text="name"
              item-value="id"
              label="Origin City"
              placeholder="Start typing to Search city"
              prepend-icon="mdi-database-search"
              return-object
              filled
              rounded
            ></v-autocomplete>
          </div>
          <div class="col-md-6">
            <v-select
              :items="tripClassItems"
              label="Trip Classification"
              filled
              rounded
              v-model="trip"
            ></v-select>
          </div>
          <div class="col-md-6">
            <v-autocomplete
              v-model="vehicleId"
              :items="vehicles"
              :search-input.sync="vehiclesSearch"
              color="white"
              hide-no-data
              hide-selected
              item-text="title"
              item-value="id"
              filled
              rounded
              label="Vehicles Class"
              placeholder="Start typing to Search vehicles"
              prepend-icon="mdi-database-search"
              return-object
            ></v-autocomplete>
          </div>
          <div class="col-md-12">
            <h6 class="ml-3">Pricing</h6>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Fare (Base)"
              placeholder="Fare (Base)"
              filled
              rounded
              v-model="base"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Fare (Tax)"
              placeholder="Fare (Tax)"
              filled
              rounded
              v-model="tax"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Additional Flat Fare"
              placeholder="Additional Flat Fare"
              filled
              rounded
              v-model="addFlat"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Additional Toll Fare"
              placeholder="Additional Toll Fare"
              filled
              rounded
              v-model="addToll"
            ></v-text-field>
          </div>
        </div>
      </v-card-text>
      <v-card-text class="bg-white" v-if="tabs === 2">
        <div class="row">
          <div class="col-md-6">
            <v-autocomplete
              v-model="ohourCity"
              :items="ohourcitysearchItems"
              :search-input.sync="ohourCitySearch"
              color="white"
              hide-no-data
              hide-selected
              item-text="name"
              item-value="id"
              label="Origin City"
              placeholder="Start typing to Search city"
              prepend-icon="mdi-database-search"
              return-object
              filled
              rounded
            ></v-autocomplete>
          </div>
          <div class="col-md-6">
            <v-select
              :items="tripUnitItems"
              label="Trip Units"
              filled
              rounded
              v-model="tripUnit"
            ></v-select>
          </div>
          <div class="col-md-6">
            <v-select
              :items="dUnitItems"
              label="Distance Units"
              filled
              rounded
              v-model="dUnit"
            ></v-select>
          </div>
          <div class="col-md-6">
            <v-select
              :items="jumpUnits"
              :label="`Unit Jumps`"
              filled
              rounded
              v-model="tripJummps"
            ></v-select>
          </div>
          <div class="col-md-6">
            <v-autocomplete
              v-model="vehicleId"
              :items="vehicles"
              :search-input.sync="vehiclesSearch"
              color="white"
              hide-no-data
              hide-selected
              item-text="title"
              item-value="id"
              filled
              rounded
              label="Vehicles Class"
              placeholder="Start typing to Search vehicles"
              prepend-icon="mdi-database-search"
              return-object
            ></v-autocomplete>
          </div>
          <div class="col-md-12">
            <h6 class="ml-3">Pricing</h6>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Fare (Base)"
              placeholder="Fare (Base)"
              filled
              rounded
              v-model="base"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Fare (Tax)"
              placeholder="Fare (Tax)"
              filled
              rounded
              v-model="tax"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Additional Flat Fare"
              placeholder="Additional Flat Fare"
              filled
              rounded
              v-model="addFlat"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Additional Toll Fare"
              placeholder="Additional Toll Fare"
              filled
              rounded
              v-model="addToll"
            ></v-text-field>
          </div>
          <div class="col-md-12">
            <h6 class="ml-3">Additional Pricing</h6>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Additional Distance Rate (Base)"
              placeholder="Additional Distance Rate (Base)"
              filled
              rounded
              v-model="adddistrate"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Minimum Duration"
              placeholder="Minimum Duration"
              filled
              rounded
              v-model="min"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Maximum Duration"
              placeholder="Maximum Duration"
              filled
              rounded
              v-model="max"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Distance Bundle"
              placeholder="Distance Bundle"
              filled
              rounded
              v-model="distance"
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
          @click="onClickMain"
        >Add</v-btn>
        <v-btn
          color="error"
          text
          @click="addinter = false"
        >Cancel</v-btn>
      </v-card-actions>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {
  Cities, CreateHotelDocument, CreateHotelPricingDocument, CreateHourlyPricingDocument,
  CreateIntercityPricingDocument, CreateLocationDocument,
  GetAllCitiesDocument,
  GetAllVehiclesDocument,
  SearchLocationByIdDocument,
  Vehicles
} from "~/gql";

@Component({
  apollo: {
    cities: {
      query: GetAllCitiesDocument,
      variables() {
        return {
          limit: 10, start: 0, search: this.citySearch,
        }
      }
    },
    vehicles: {
      query: GetAllVehiclesDocument,
      variables() {
        return {
          limit: 10, start: 0, search: this.vehiclesSearch,
        }
      }
    }
  }
})
export default class CreatePricing extends Vue {
  private tabs = 0

  private addinter = false;

  private loading = false;

  private citySearch = ''
  private vehiclesSearch = ''

  private ocitySearch = ''
  private dcitySearch = ''

  private cities: Cities[]
  private vehicles: Vehicles[]

  private gplaces
  private ocitysearchItems: any[] = []
  private ohotelCityItems: any[] = []
  private dcitysearchItems: any[] = []
  private dhotelCityItems: any[] = []
  private gocitySearch = ''
  private gdcitySearch = ''

  // global
  private vehicleId: any = ''
  private base = ''
  private tax = ''
  private addFlat = ''
  private addToll = ''
  private ocityId: any = ''

  // intercity
  private dcityId: any = ''

  // hotel
  private originPoint: any = ''
  private destinationPoint: any = ''
  private tripClassItems = ['AIRPORT', 'BUS', 'RAILWAY', 'GENERAL']
  private trip = ''
  private ohotelcheck = false
  private dhotelcheck = false

  // hourly
  private tripUnitItems = ['HOURS', 'MINUTES', 'DAYS']
  private tripUnit = ''
  private dUnitItems = ['KM', 'MILES']
  private dUnit = ''
  private jumpUnits = [0.5, 1, 2, 4]
  private tripJummps = ''
  private adddistrate = ''
  private min = ''
  private max = ''
  private distance = ''
  private ohourCity: any = ''
  private ohourCitySearch = ''
  private ohourcitysearchItems: any[] = []

  mounted() {
    this.gplaces = new window.google.maps.places.AutocompleteService()
  }

  @Watch('ocitySearch')
  onOCitySearch() {
    this.citySearch = this.ocitySearch;
    this.$apollo.query({
      query: GetAllCitiesDocument,
      variables: {
        search: this.ocitySearch
      }
    })
    .then(value => {
      this.ocitysearchItems = value.data.cities
    })
  }

  @Watch('dcitySearch')
  onDCitySearch() {
    this.citySearch = this.dcitySearch;
    this.$apollo.query({
      query: GetAllCitiesDocument,
      variables: {
        search: this.dcitySearch
      }
    })
      .then(value => {
        this.dcitysearchItems = value.data.cities
      })
  }

  @Watch('ohourCitySearch')
  onOHourSearch() {
    this.citySearch = this.dcitySearch;
    this.$apollo.query({
      query: GetAllCitiesDocument,
      variables: {
        search: this.ohourCitySearch
      }
    })
      .then(value => {
        this.ohourcitysearchItems = value.data.cities
      })
  }

  @Watch('gocitySearch')
  onOriginCitySearch(){
    if (this.gocitySearch !== null) {
      this.gplaces.getQueryPredictions({
        input: this.gocitySearch,
        types: ['(cities)']
      }, (predection, status) => {
        this.ohotelCityItems = predection
      })
    }
  }

  @Watch('gdcitySearch')
  onDestCitySearch(){
    if (this.gdcitySearch !== null) {
      this.gplaces.getQueryPredictions({
        input: this.gdcitySearch,
        types: ['(cities)']
      }, (predection, status) => {
        this.dhotelCityItems = predection
      })
    }
  }

  onClickMain() {
    if (this.tabs === 0) {
      this.onCreateIntercityPricing()
    } else if (this.tabs === 1) {
      this.onCreateHotelPricing()
    } else if (this.tabs === 2) {
      this.onCreateHourlyPricing()
    }
  }

  onCreateIntercityPricing() {
    if (this.ocityId === '') {
      this.$message.error('Select Origin City')
      return
    }
    if (this.dcityId === '') {
      this.$message.error('Select Destination City')
      return
    }
    if (this.vehicleId === '') {
      this.$message.error('Select Vehicle Class')
      return
    }
    if (this.base === '') {
      this.$message.error('Enter Base price')
      return
    }
    if (isNaN(Number(this.base))) {
      this.$message.error('Enter Valid Base price')
      return
    }
    if (this.tax === '') {
      this.$message.error('Enter Tax price')
      return
    }
    if (isNaN(Number(this.tax))) {
      this.$message.error('Enter Valid Tax')
      return
    }
    if (this.addFlat === '') {
      this.$message.error('Enter Additional Flat price')
      return
    }
    if (isNaN(Number(this.addFlat))) {
      this.$message.error('Enter Valid Additional Flat price')
      return
    }
    if (this.addToll === '') {
      this.$message.error('Enter Additional Toll price')
      return
    }
    if (isNaN(Number(this.addToll))) {
      this.$message.error('Enter Valid Additional Toll price')
      return
    }
    this.loading = true;
    this.$apollo.mutate({
      mutation: CreateIntercityPricingDocument,
      variables: {
        name: `${this.ocityId!.name} - ${this.dcityId!.name} - intercity`,
        base: parseFloat(this.base),
        tax: parseFloat(this.tax),
        flat: parseFloat(this.addFlat),
        toll: parseFloat(this.addToll),
        vehicle: this.vehicleId!.id,
        origincity: this.ocityId!.id,
        destinationcity: this.dcityId!.id
      }
    })
    .then(value => {
      this.$message.success('Intercity Pricing Created ...')
      this.addinter = false;
      this.loading = false;
    })
    .catch(e => this.$message.error(e.message))
  }

  async onCreateHotelPricing() {
    if (this.originPoint === '') {
      this.$message.error('Select Origin Point')
      return
    }
    if (this.destinationPoint === '') {
      this.$message.error('Select Destination Point')
      return
    }
    if (this.ocityId === '') {
      this.$message.error('Select City')
      return
    }
    if (this.trip === '') {
      this.$message.error('Select Trip Classification')
      return
    }
    if (this.vehicleId === '') {
      this.$message.error('Select Vehicle Class')
      return
    }
    if (this.base === '') {
      this.$message.error('Enter Base price')
      return
    }
    if (isNaN(Number(this.base))) {
      this.$message.error('Enter Valid Base price')
      return
    }
    if (this.tax === '') {
      this.$message.error('Enter Tax price')
      return
    }
    if (isNaN(Number(this.tax))) {
      this.$message.error('Enter Valid Tax')
      return
    }
    if (this.addFlat === '') {
      this.$message.error('Enter Additional Flat price')
      return
    }
    if (isNaN(Number(this.addFlat))) {
      this.$message.error('Enter Valid Additional Flat price')
      return
    }
    if (this.addToll === '') {
      this.$message.error('Enter Additional Toll price')
      return
    }
    if (isNaN(Number(this.addToll))) {
      this.$message.error('Enter Valid Additional Toll price')
      return
    }

    this.loading = true;

    let ocity
    let dcity

    let olocs = await this.$apollo.query({query: SearchLocationByIdDocument, variables:{id: this.originPoint!.place_id}})
    let dlocs = await this.$apollo.query({query: SearchLocationByIdDocument, variables:{id: this.destinationPoint!.place_id}})
    console.log(olocs)

    if (olocs.data.locations.length === 0) {
      try {
        const odss = await this.$apollo.mutate({
          mutation: CreateLocationDocument,
          variables:{
            format: this.originPoint!.description,
            geoJSON: this.originPoint!,
            placeId: this.originPoint!.place_id
          }
        })
        ocity = odss.data.createLocation.location.id
        if (this.ohotelcheck) {
          await this.$apollo.mutate({
            mutation: CreateHotelDocument,
            variables:{
              name: this.originPoint!.description,
              location: [ocity]
            }
          })
        }
      } catch (e) {
        this.loading = false;
        this.$message.error(e.message)
      }
    } else {
      ocity = olocs.data.locations[0].id
      if (olocs.data.locations[0].hotel ===  null && this.ohotelcheck) {
        try {
          await this.$apollo.mutate({
            mutation: CreateHotelDocument,
            variables:{
              name: this.originPoint!.description,
              location: [ocity]
            }
          })
        } catch (e) {
          this.loading = false;
          this.$message.error(e.message)
        }
      }
    }

    if (dlocs.data.locations.length === 0) {
      try {
        const ddss = await this.$apollo.mutate({
          mutation: CreateLocationDocument,
          variables:{
            format: this.destinationPoint!.description,
            geoJSON: this.destinationPoint!,
            placeId: this.destinationPoint!.place_id
          }
        })
        dcity = ddss.data.createLocation.location.id
        if (this.dhotelcheck) {
          await this.$apollo.mutate({
            mutation: CreateHotelDocument,
            variables:{
              name: this.destinationPoint!.description,
              location: [dcity]
            }
          })
        }
      } catch (e) {
        this.loading = false;
        this.$message.error(e.message)
      }
    } else {
      dcity = dlocs.data.locations[0].id
      if (dlocs.data.locations[0].hotel === null && this.dhotelcheck) {
        try {
          await this.$apollo.mutate({
            mutation: CreateHotelDocument,
            variables:{
              name: this.destinationPoint!.description,
              location: [dcity]
            }
          })
        } catch (e) {
          this.loading = false;
          this.$message.error(e.message)
        }
      }
    }

    this.$apollo.mutate({
      mutation: CreateHotelPricingDocument,
      variables: {
        name: `${this.originPoint!.description} - ${this.destinationPoint!.description} - hotel`,
        base: parseFloat(this.base),
        tax: parseFloat(this.tax),
        flat: parseFloat(this.addFlat),
        toll: parseFloat(this.addToll),
        vehicle: this.vehicleId.id,
        oloc: ocity,
        dloc: dcity,
        trip: this.trip,
        hotel: this.ocityId.id
      }
    })
      .then(value => {
        this.$message.success('Hotel Pricing Created ...')
        this.addinter = false;
        this.loading = false;
      })
      .catch(e => this.$message.error(e.message))
  }

  onCreateHourlyPricing() {
    if (this.ohourCity === '') {
      this.$message.error('Select City')
      return
    }
    if (this.tripUnit === '') {
      this.$message.error('Select Trip Unit')
      return
    }
    if (this.dUnit === '') {
      this.$message.error('Select Distance Unit')
      return
    }
    if (this.tripJummps === '') {
      this.$message.error('Select Unit Jumps')
      return
    }
    if (this.vehicleId === '') {
      this.$message.error('Select Vehicle Class')
      return
    }
    if (this.base === '') {
      this.$message.error('Enter Base price')
      return
    }
    if (isNaN(Number(this.base))) {
      this.$message.error('Enter Valid Base price')
      return
    }
    if (this.tax === '') {
      this.$message.error('Enter Tax price')
      return
    }
    if (isNaN(Number(this.tax))) {
      this.$message.error('Enter Valid Tax')
      return
    }
    if (this.addFlat === '') {
      this.$message.error('Enter Additional Flat price')
      return
    }
    if (isNaN(Number(this.addFlat))) {
      this.$message.error('Enter Valid Additional Flat price')
      return
    }
    if (this.addToll === '') {
      this.$message.error('Enter Additional Toll price')
      return
    }
    if (isNaN(Number(this.addToll))) {
      this.$message.error('Enter Valid Additional Toll price')
      return
    }
    if (this.adddistrate === '') {
      this.$message.error('Enter Additional Distance Rate')
      return
    }
    if (isNaN(Number(this.adddistrate))) {
      this.$message.error('Enter Valid Additional Distance Rate')
      return
    }
    if (this.max === '') {
      this.$message.error('Enter Max duration')
      return
    }
    if (isNaN(Number(this.max))) {
      this.$message.error('Enter Valid Max duration')
      return
    }
    if (this.min === '') {
      this.$message.error('Enter Min duration')
      return
    }
    if (isNaN(Number(this.min))) {
      this.$message.error('Enter Valid Min duration')
      return
    }
    if (this.distance === '') {
      this.$message.error('Enter Distance Bundle')
      return
    }
    if (isNaN(Number(this.distance))) {
      this.$message.error('Enter Valid Distance Bundle')
      return
    }

    this.loading = true
    this.$apollo.mutate({
      mutation: CreateHourlyPricingDocument,
      variables: {
        name: `${this.ohourCity!.name} - hourly`,
        base: parseFloat(this.base),
        tax: parseFloat(this.tax),
        flat: parseFloat(this.addFlat),
        toll: parseFloat(this.addToll),
        vehicle: this.vehicleId.id,
        addBase: parseFloat(this.adddistrate),
        max: parseInt(this.max),
        min: parseInt(this.min),
        dbundle: parseInt(this.distance),
        city: this.ohourCity!.id,
        hunit: this.tripUnit,
        distance: this.dUnit,
        unitJump: this.tripJummps
      }
    })
      .then(value => {
        this.$message.success('Hourly Pricing Created ...')
        this.addinter = false;
        this.loading = false;
      })
      .catch(e => this.$message.error(e.message))
  }

}
</script>
