<template>
  <div>
    <v-btn
      icon
      color="blue"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import {Vehicles} from "~/gql";

@Component
export default class VehicleActions extends Vue {
  @Prop() vehicle: Vehicles
}
</script>
