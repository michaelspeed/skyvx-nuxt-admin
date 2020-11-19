<template>
  <div>
    <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold ml-2" @click="edit = true">View / Edit Promo</a>
    <v-dialog
      v-model="edit"
      width="50vw"
    >
      <v-app-bar color="primary">
        <v-toolbar-title class="text-white font-weight-bold">Update Promo Code</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              label="Promo Code"
              placeholder="promo code"
              filled
              rounded
              v-model="code"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-select
              :items="flatTypes"
              label="Type"
              filled
              rounded
              v-model="flat"
            ></v-select>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Value"
              placeholder="Value"
              filled
              rounded
              type="number"
              v-model="value"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Minimum Value"
              placeholder="minimum value"
              filled
              rounded
              type="number"
              v-model="min"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Maximum Value"
              placeholder="maximum value"
              filled
              rounded
              type="number"
              v-model="max"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-select
              :items="applicable"
              label="Applicable To:"
              filled
              rounded
              v-model="applicableTo"
            ></v-select>
          </div>
          <div class="col-md-6">
            <v-switch
              v-model="enabled"
              label="Status"
            ></v-switch>
          </div>
        </div>
      </v-card-text>
      <v-progress-linear
        color="lime"
        indeterminate
        reverse
        v-if="loading"
      ></v-progress-linear>
      <v-card-actions style="background-color: white;">
        <v-spacer></v-spacer>
        <v-btn
          color="red"
          text
          @click="edit = false"
        >
          Close
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="onUpdatePromo"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";
import {CreatePromoDocument, Promo, UpdatePromoDocument} from "~/gql";

@Component
export default class PromoCodeActions extends Vue {
  @Prop() promo: Promo

  private code = ''
  private flatTypes = ['FLAT', 'PERCENTAGE']
  private flat = ''
  private value = 0
  private min = 0
  private max = 0
  private applicable = ['HOTEL', 'HOUR', 'TOUR', 'INTERCITY']
  private applicableTo = ''
  private enabled = false

  private loading = false

  private edit = false;

  mounted() {
    if (this.promo) {
      this.code = this.promo.code
      this.flat = this.promo.type
      this.value = this.promo.value
      this.min = this.promo.min
      this.max = this.promo.max
      this.applicableTo = this.promo.applicable
      this.enabled = this.promo.enabled
    }
  }

  onUpdatePromo() {
    if (/\s/.test(this.code)) {
      this.$message.error('Code does not match regex')
      return
    }
    if (this.code === '') {
      this.$message.error('Code is required')
      return
    }
    if (this.flat === '') {
      this.$message.error('Type is required')
      return
    }
    if (this.value === 0) {
      this.$message.error('Value is required')
      return
    }
    if (this.applicableTo === '') {
      this.$message.error('Applicable target is required')
      return
    }
    this.loading = true
    this.$apollo.mutate({
      mutation: UpdatePromoDocument,
      variables: {
        code: this.code,
        type: this.flat,
        applicable: this.applicableTo,
        value: parseInt(this.value),
        max: parseInt(this.max),
        min: parseInt(this.min),
        id: this.promo.id,
        enabled: this.enabled
      }
    })
      .then(value => {
        this.loading = false
        this.$message.success('Promo Updated')
        this.edit = false
      })
      .catch(e => {
        this.loading = false
        this.$message.error(e.message)
      })
  }
}
</script>
