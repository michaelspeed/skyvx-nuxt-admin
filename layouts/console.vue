<template>
  <v-app>
    <div class="d-flex flex-column flex-root">
      <!--begin::Page-->
      <div class="d-flex flex-row flex-column-fluid page">
        <!--begin::Wrapper-->
        <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
          <Header/>
          <div class="content  d-flex flex-column flex-column-fluid" id="kt_content">
            <nuxt/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </v-app>
</template>

<script lang="ts">

import {Component, Vue} from "nuxt-property-decorator";
import Header from "~/components/Header/header.vue";
import Footer from "~/components/footer/footer.vue";

@Component({
  components: {Header, Footer},
  head: {
    bodyAttrs: {
      class: 'header-fixed header-mobile-fixed subheader-enabled page-loading',
      id: 'kt_body'
    },
  },
})
export default class Console extends Vue {}
</script>
