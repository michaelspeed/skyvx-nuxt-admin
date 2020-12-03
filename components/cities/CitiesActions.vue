<template>
  <div>
    <v-btn
      icon
      color="primary"
      @click="airport = true"
    >
      <v-icon>mdi-airplane</v-icon>
    </v-btn>
    <v-btn
      icon
      color="blue"
      @click="edit = true"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <!--<v-menu
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
      v-model="menudelete"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="red"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Are you sure delete this city?</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            color="red"
            @click="menudelete = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="menudelete = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>-->
    <v-dialog
      v-model="airport"
      width="50vw"
    >
      <v-app-bar color="primary">
        <v-toolbar-title class="text-white font-weight-bold">Airports</v-toolbar-title>
      </v-app-bar>
      <v-data-table
        :headers="headers"
        :items="city.airports"
        hide-default-footer
      >
      </v-data-table>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              label="Airport Name"
              placeholder="Airport Name"
              filled
              rounded
              v-model="name"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-autocomplete
              v-model="acomon"
              :items="airpotsearchItems"
              :search-input.sync="airpotsearch"
              color="primary"
              hide-no-data
              hide-selected
              filled
              rounded
              item-text="description"
              item-value="place_id"
              label="Airport common name"
              placeholder="Search airport name"
              prepend-icon="mdi-airplane"
              return-object
            ></v-autocomplete>
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
          @click="onCreateAirport"
        >Add</v-btn>
        <v-btn
          color="error"
          text
          @click="airport = false"
        >Cancel</v-btn>
      </v-card-actions>
    </v-dialog>
    <v-dialog
      v-model="edit"
      width="50vw"
    >
      <v-app-bar color="primary">
        <v-toolbar-title class="text-white font-weight-bold">Update City</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              label="Name"
              placeholder="City Name"
              filled
              rounded
              v-model="city.name"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Code"
              placeholder="City Code"
              filled
              rounded
              v-model="city.label"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Base"
              placeholder="Base Price"
              filled
              rounded
              v-model="city.ubase"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Tax"
              placeholder="Base Tax"
              filled
              rounded
              v-model="city.utax"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Distance"
              placeholder="Distance Bundle"
              filled
              rounded
              v-model="city.dbundle"
            ></v-text-field>
          </div>
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-3">
                <v-checkbox
                  v-model="city.hotel"
                  label="Hotel"
                ></v-checkbox>
              </div>
              <div class="col-md-3">
                <v-checkbox
                  v-model="city.intercity"
                  label="Inter City"
                ></v-checkbox>
              </div>
              <div class="col-md-3">
                <v-checkbox
                  v-model="city.tours"
                  label="Tours"
                ></v-checkbox>
              </div>
              <div class="col-md-3">
                <v-checkbox
                  v-model="city.hourly"
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
          @click="onUpdateCity"
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
import {Component, Vue, Prop, Watch} from "nuxt-property-decorator";
import {Cities, CreateAirportDocument, CreateLocationDocument, DeleteCityDocument, UpdateCityDocument} from "~/gql";

@Component
export default class CitiesActions extends Vue {
  @Prop() city: Cities

  private headers = [
    {
      text: 'Id',
      align: 'start',
      sortable: false,
      value: 'id'
    },
    {
      text: 'Airport Name',
      align: 'start',
      sortable: false,
      value: 'name'
    },
    {
      text: 'Actions',
      align: 'end',
      value: 'actions'
    }
  ]

  private gplaces

  private airport = false;
  private loading = false;
  private name = ''

  private acomon: any = null
  private airpotsearch: any = null
  private airpotsearchItems = []


  private edit = false;
  private menudelete = false;

  mounted() {
    this.gplaces = new window.google.maps.places.AutocompleteService()
  }

  @Watch('airpotsearch')
  onCitySearch(){
    if (this.airpotsearch !== null) {
      this.gplaces.getQueryPredictions({
        input: this.airpotsearch,
        types: ['airport']
      }, (predection, status) => {
        console.log(predection)
        this.airpotsearchItems = predection
      })
    }
  }

  onCreateAirport() {
    this.loading = true;
    this.$apollo.mutate({
      mutation: CreateLocationDocument,
      variables: {
        format: this.acomon!.description,
        geoJSON: this.acomon,
        placeId: this.acomon!.place_id
      }
    })
    .then(value => {
      this.$apollo.mutate({
        mutation: CreateAirportDocument,
        variables: {
          name: this.name,
          location: value.data.createLocation.location.id,
          city: this.city.id
        }
      })
      .then(value => {
        this.loading = false;
        this.airport = false;
        this.$message.success('Airport Added')
      })
    })
    .catch(e => {
      this.loading = false;
      this.$message.error(e.message)
    })
  }

  onUpdateCity() {
    this.loading = true;
    this.$apollo.mutate({
      mutation: UpdateCityDocument,
      variables: {
        id: this.city.id,
        label: this.city.label,
        hotel: this.city.hotel,
        intercity: this.city.intercity,
        tour: this.city.tours,
        hourly: this.city.hourly,
        utax: parseInt(this.city.utax),
        ubase: parseInt(this.city.ubase),
        dbundle: parseInt(this.city.dbundle)
      }
    })
    .then(value => {
      this.loading = false;
      this.edit = false;
      this.$message.success('City Updated')
    })
    .catch(e => this.$message.error(e.message))
  }
}
</script>
