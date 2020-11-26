<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" class="btn btn-light-danger font-weight-bold"
                v-bind="attrs"
                v-on="on"
        >Update Booking</button>
      </template>

      <v-card>
        <v-card-actions>
          <v-list>
            <v-list-item>
              <v-progress-circular
                indeterminate
                color="red"
                v-if="loading"
              ></v-progress-circular>
              <v-list-item-content v-if="!loading">
                <v-list-item-title>Update Booking Status</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="yellow"
            @click="onUpdateBookingStatus('PROCESSING')"
          >
            PROCESSING
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="onUpdateBookingStatus('ACTIVE')"
          >
            ACTIVE
          </v-btn>
          <v-btn
            color="red"
            text
            @click="onUpdateBookingStatus('CANCELLED')"
          >
            CANCELLED
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";
import {Booking, UpdateBookingStatusDocument} from "~/gql";

@Component
export default class BookingStatus extends Vue {
  @Prop() booking: Booking

  private menu = false;
  private loading = false;

  onUpdateBookingStatus(status) {
    this.loading = true;
    this.$apollo.mutate({
      mutation: UpdateBookingStatusDocument,
      variables: {
        id: this.booking.id,
        status: status
      }
    }).then(response => {
      this.menu = false;
      this.loading = false;
    })
    .catch(error => {
      this.$message.error(error.message)
      this.loading = false;
    })
  }
}
</script>
