<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Dashboard</h5>
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
          <a href="custom/apps/projects/add-project.html" class="btn btn-light-primary font-weight-bold ml-2">Add Project</a>
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "nuxt-property-decorator";

@Component({
  layout: 'console'
})
export default class Dashboard extends Vue {}
</script>
