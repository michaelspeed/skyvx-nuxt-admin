<template>
  <div>
    <v-btn text color="primary" small @click="edit = true">
      View / Edit
    </v-btn>
    <v-dialog
      v-model="edit"
      width="60vw"
    >
      <v-app-bar color="primary" style="width:100%" dark>
        <v-toolbar-title class="text-white font-weight-bold">Update Pricing</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white" v-if="tabs === 0">
        <div class="row">
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
          @click="onUpdatePricing"
        >Update</v-btn>
        <v-btn
          color="error"
          text
          @click="edit = false"
        >Cancel</v-btn>
      </v-card-actions>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import {Cities, Enum_Pricing_Type, Pricing, UpdatePricingDocument, Vehicles} from "~/gql";

@Component({
})
export default class PricingActions extends Vue {
  @Prop() pricing: Pricing

  private edit = false

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
  private base: any = ''
  private tax: any = ''
  private addFlat: any = ''
  private addToll: any = ''
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
  private adddistrate: any = ''
  private min: any = ''
  private max: any = ''
  private distance: any = ''
  private ohourCity: any = ''
  private ohourCitySearch = ''
  private ohourcitysearchItems: any[] = []

  mounted() {
    if (this.pricing) {
      if (this.pricing!.type === Enum_Pricing_Type.Hotel) {
        this.tabs = 1
      } else if (this.pricing!.type === Enum_Pricing_Type.Inter) {
        this.tabs = 0
      } else if (this.pricing!.type === Enum_Pricing_Type.Hour) {
        this.tabs = 2
      }
      this.base = this.pricing!.base!
      this.tax = this.pricing!.tax!
      this.addFlat = this.pricing!.flat
      this.addToll = this.pricing!.toll
      this.adddistrate = this.pricing!.addBase!
      this.max = this.pricing!.maxDuration!
      this.min = this.pricing!.minDuration
      this.distance = this.pricing!.distanceBundle!
    }
  }

  onUpdatePricing() {
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
    this.loading = true
    if (this.pricing!.type === Enum_Pricing_Type.Hotel) {
      this.$apollo.mutate({
        mutation: UpdatePricingDocument,
        variables: {
          id: this.pricing.id,
          base: parseFloat(this.base),
          tax: parseFloat(this.tax),
          flat: parseFloat(this.addFlat),
          toll: parseFloat(this.addToll),
        }
      })
      .then(() => {
        this.edit = false
        this.loading = false
      })
      .catch(e => {
        this.loading = false
        this.$message.error(e.message)
      })
    } else if (this.pricing!.type === Enum_Pricing_Type.Inter) {
      this.$apollo.mutate({
        mutation: UpdatePricingDocument,
        variables: {
          id: this.pricing.id,
          base: parseFloat(this.base),
          tax: parseFloat(this.tax),
          flat: parseFloat(this.addFlat),
          toll: parseFloat(this.addToll),
        }
      })
        .then(() => {
          this.edit = false
          this.loading = false
        })
        .catch(e => {
          this.loading = false
          this.$message.error(e.message)
        })
    } else if (this.pricing!.type === Enum_Pricing_Type.Hour) {
      this.$apollo.mutate({
        mutation: UpdatePricingDocument,
        variables: {
          id: this.pricing.id,
          base: parseFloat(this.base),
          tax: parseFloat(this.tax),
          flat: parseFloat(this.addFlat),
          toll: parseFloat(this.addToll),
          addBase: parseFloat(this.adddistrate),
          max: parseInt(this.max),
          min: parseInt(this.min),
          dbundle: parseInt(this.distance)
        }
      })
        .then(() => {
          this.edit = false
          this.loading = false
        })
        .catch(e => {
          this.loading = false
          this.$message.error(e.message)
        })
    }
  }

}
</script>
