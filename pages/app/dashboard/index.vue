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
          <!--<a href="custom/apps/projects/add-project.html" class="btn btn-light-primary font-weight-bold ml-2">Add Project</a>-->
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class="container">
        <v-progress-linear
          v-if="$apollo.queries.bookingsConnection.loading"
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
        <div class="row mt-0 mt-lg-3" v-if="!$apollo.queries.bookingsConnection.loading">
          <div class="col-md-4">
            <div class="card card-custom gutter-b card-stretch">
              <!--begin::Header-->
              <div class="card-header border-0 pt-5">
                <div class="card-title font-weight-bolder">
                  <div class="card-label">
                    Stats
                    <div class="font-size-sm text-muted mt-2">{{bookingsConnection.aggregate.sum.total}} INR Sales</div>
                  </div>
                </div>
              </div>
              <div class="card-body p-0 d-flex flex-column" style="position: relative;">
                <v-sparkline
                  line-width="2"
                  padding="8"
                  smooth="10"
                  :value="sparkLinesData"
                  auto-draw
                ></v-sparkline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue, Watch} from "nuxt-property-decorator";
import {BookingConnection, GetGraphDataDocument} from "~/gql";

@Component({
  layout: 'console',
  apollo: {
    bookingsConnection: {
      query: GetGraphDataDocument,
      variables() {
        return {
          sdate: this.sdate,
          edate: this.edate
        }
      }
    }
  }
})
export default class Dashboard extends Vue {
  private sdate: Date | undefined = undefined
  private edate: Date | undefined = undefined

  private bookingsConnection: BookingConnection
  private sparkLinesData: any[] = []

  @Watch('bookingsConnection')
  onGetData() {
    console.log(this.bookingsConnection)
    if (this.bookingsConnection) {
      for (const its of this.bookingsConnection.values!) {
        this.sparkLinesData.push(its!.total)
      }
    }
  }
}
</script>
