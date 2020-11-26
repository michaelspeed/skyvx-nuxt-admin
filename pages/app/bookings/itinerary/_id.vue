<template>
  <div>
    <div class="d-flex flex-column-fluid">
      <!--begin::Container-->
      <div class=" container ">
        <!-- begin::Card-->
        <div class="card card-custom overflow-hidden">
          <div class="card-body p-0">
            <!-- begin: Invoice-->
            <!-- begin: Invoice header-->
            <div class="row justify-content-center py-8 px-8 py-md-27 px-md-0">
              <div class="col-md-9">
                <div class="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                  <h1 class="display-4 font-weight-boldest mb-10">ITINERARY</h1>
                  <div class="d-flex flex-column align-items-md-end px-0">
                    <!--begin::Logo-->
                    <a href="#" class="mb-5">
                      <img src="/logo/logo.png" alt=""/>
                    </a>
                    <!--end::Logo-->
                    <span class=" d-flex flex-column align-items-md-end opacity-70">
                            <span>AMF Tower, 5A Ram Nagar Tonk Road, Jaipur, Rajasthan, India</span>
                            <span>Pin Code - 302015</span>
                        </span>
                  </div>
                </div>
                <div class="border-bottom w-100"></div>
                <div class="d-flex justify-content-between pt-6">
                  <div class="d-flex flex-column flex-root">
                    <span class="font-weight-bolder mb-2">BOOKING DATE</span>
                    <span class="opacity-70">{{getDate(booking.created_at)}}</span>
                  </div>
                  <div class="d-flex flex-column flex-root">

                  </div>
                  <div class="d-flex flex-column flex-root">
                    <span class="font-weight-bolder mb-2">ITINERARY FOR.</span>
                    <span class="opacity-70">{{booking.name}}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end: Invoice header-->

            <!-- begin: Invoice body-->
            <div class="row justify-content-center py-8 px-8 py-md-10 px-md-0">
              <div class="col-md-9">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                    <tr>
                      <th class="pl-0 font-weight-bold text-muted  text-uppercase">Description</th>
                      <th class="text-right pr-0 font-weight-bold text-muted text-uppercase">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="font-weight-boldest" v-if="booking.pricing.type === 'TOUR'">
                      <td class="pl-0 pt-7"><h4 class="color-blue">{{booking.name}}</h4><br/>{{booking.email}} <br/>{{booking.pricing.tour.title}} <br/> {{booking.pricing.nameSlug}}</td>
                      <td class="color-blue pr-0 pt-7 text-right font-weight-bold">Travel Date: {{booking.date}}</td>
                    </tr>
                    <tr class="font-weight-boldest" v-if="booking.pricing.type === 'HOUR'">
                      <td class="pl-0 pt-7"><h4 class="color-blue">{{booking.name}}</h4><br/>{{booking.email}} <br/>{{booking.pricing.nameSlug}} <br/> Hours: {{booking.hours}}</td>
                      <td class="color-blue pr-0 pt-7 text-right font-weight-bold">Travel Date: {{booking.date}}</td>
                    </tr>
                    <tr class="font-weight-boldest" v-if="booking.pricing.type === 'HOTEL'">
                      <td class="pl-0 pt-7"><h4 class="color-blue">{{booking.name}}</h4><br/>{{booking.email}} <br/> <span class="font-weight-bold">Hotel Transfer:</span> {{booking.pricing.nameSlug}}</td>
                      <td class="color-blue pr-0 pt-7 text-right font-weight-bold">Travel Date: {{booking.date}}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- end: Invoice body-->

            <!-- begin: Invoice footer-->
            <div class="row justify-content-center bg-gray-100 py-8 px-8 py-md-10 px-md-0">
              <div class="col-md-9">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                    <tr>
                      <th class="font-weight-bold text-muted  text-uppercase">TRANSACTIONS</th>
                      <th class="font-weight-bold text-muted  text-uppercase">TOTAL AMOUNT</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="font-weight-bolder">
                      <td>{{booking.transaction.transaction_id}}</td>
                      <td class="text-danger font-size-h3 font-weight-boldest">₹{{booking.total}}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- end: Invoice footer-->

            <!-- begin: Invoice action-->
            <!-- end: Invoice action-->

            <!-- end: Invoice-->
          </div>
        </div>
        <!-- end::Card-->
      </div>
      <!--end::Container-->
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {Booking, GetBookingIdDocument} from "~/gql";
import moment from "moment";

@Component({
  async asyncData(context: any) {
    const client = context.app.apolloProvider.defaultClient;
    const booking = await client.query({
      query: GetBookingIdDocument,
      variables: {
        id: context.route.params.id
      }
    })
    return {
      booking: booking.data.booking
    }
  }
})
export default class Itinerary extends Vue {
  private booking: Booking

  getDate(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  mounted() {
    window.print();
  }
}
</script>
