<template>
  <div>
    <v-btn text color="primary" small @click="onCreateView">
      View / Edit
    </v-btn>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";
import {Booking} from "~/gql";

@Component
export default class BookingActions extends Vue {
  @Prop() items: Booking

  onCreateView() {
    this.$router.push(`/app/bookings/${this.items.id}`)
  }
}
</script>
