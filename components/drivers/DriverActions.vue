<template>
  <div>
    <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold ml-2" @click="edit = true">View / Edit Driver</a>
    <v-dialog
      v-model="edit"
      width="50vw"
    >
      <v-app-bar color="primary">
        <v-toolbar-title class="text-white font-weight-bold">Edit Driver</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              label="Name"
              placeholder="Driver Name"
              filled
              rounded
              v-model="name"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Number"
              placeholder="Phone Number"
              filled
              rounded
              v-model="number"
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
          @click="onUpdateDriver"
        >Updated</v-btn>
        <v-btn
          color="error"
          text
          @click="edit = false"
        >Cancel</v-btn>
      </v-card-actions>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";
import {CreateDriverDocument, Drivers, UpdateDriverDocument} from "~/gql";

@Component
export default class DriverActions extends Vue {
  @Prop() driver: Drivers

  private edit: boolean = false

  private loading = false

  private name = ''
  private number = ''

  mounted() {
    if (this.driver) {
      this.name = this.driver.name
      this.number = this.driver.number
    }
  }

  onUpdateDriver() {
    if (this.name === '') {
      this.$message.error('Name is required')
      return
    }
    if (this.number === '') {
      this.$message.error('Number is required')
      return
    }
    this.loading = true;
    this.$apollo.mutate({
      mutation: UpdateDriverDocument,
      variables: {
        name: this.name,
        number: this.number,
        id: this.driver.id
      }
    })
      .then(value1 => {
        this.loading = false;
        this.edit = false;
        this.$message.success('Driver Updated')
      })
      .catch(error => {
        this.loading = false;
        this.$message.error(error.message)
      })
  }

}
</script>
