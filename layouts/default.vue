<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component({
  head: {
    bodyAttrs: {
      class: 'header-fixed header-mobile-fixed subheader-enabled page-loading',
      id: 'kt_body'
    },
  },
})
export default class Default extends Vue {

}
</script>

<style scoped>

</style>
