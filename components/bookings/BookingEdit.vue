<template>
  <div>
    <button type="button" class="btn btn-light-primary font-weight-bold" @click="edit = true">Edit</button>
    <button type="button" class="btn btn-light-primary font-weight-bold" @click="assign = true">Assign Driver</button>
    <button type="button" class="btn btn-light-primary font-weight-bold">Mail</button>
    <v-dialog
      v-model="edit"
      width="50vw"
    >
      <v-app-bar color="primary">
        <v-toolbar-title class="text-white font-weight-bold">Edit booking</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              label="Phone"
              placeholder="Phone Number"
              filled
              rounded
              v-model="number"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Alternate Number"
              placeholder="Alternate Number"
              filled
              rounded
              v-model="alternate"
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
          @click="onUpdate"
        >Update</v-btn>
        <v-btn
          color="error"
          text
          @click="edit = false"
        >Cancel</v-btn>
      </v-card-actions>
    </v-dialog>
    <v-dialog
      v-model="assign"
      width="50vw"
    >
      <v-app-bar color="primary">
        <v-toolbar-title class="text-white font-weight-bold">Assign Driver</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-12">
            <v-text-field
              label="Search"
              placeholder="Search"
              filled
              rounded
              v-model="search"
            ></v-text-field>
          </div>
          <div class="col-md-12">
            <v-list dense>
              <v-subheader>Drivers</v-subheader>
              <v-list-item-group
                color="primary"
              >
                <v-list-item
                  v-for="driver in drivers"
                  :key="driver.id"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="driver.name"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </div>
      </v-card-text>
      <v-progress-linear
        color="lime"
        indeterminate
        v-if="loading"
      ></v-progress-linear>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";
import {Booking, Drivers, GetAllDriversDocument, UpdateBookingDocument} from "~/gql";

@Component({
  apollo: {
    drivers: {
      query: GetAllDriversDocument,
      variables() {
        return {
          search: this.search
        }
      }
    }
  }
})
export default class BookingEdit extends Vue {
  @Prop() booking: Booking
  private edit = false
  private loading = false
  private number = ''
  private alternate = ''

  private assign = false;
  private search = ''

  private drivers: Drivers[]

  mounted() {
    this.number = this.booking.number
    this.alternate = this.booking.alternate
  }

  onUpdate() {
    this.loading = true
    this.$apollo.mutate({
      mutation: UpdateBookingDocument,
      variables: {
        id: this.booking.id,
        number: Number(this.number),
        alternate: Number(this.alternate)
      }
    })
    .then(value => {
      this.loading = false
      this.edit = false
    })
  }
}
</script>
