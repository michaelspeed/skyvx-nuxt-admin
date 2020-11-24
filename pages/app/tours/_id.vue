<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Tours Edit / View</h5>
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
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class=" container" v-if="$apollo.queries.tour.loading">
        <v-progress-linear
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
      </div>
      <div class=" container" v-if="!$apollo.queries.tour.loading">
        <div class="row">
          <div class="col-md-12">
            <v-text-field
              label="Title"
              placeholder="Tour Title"
              filled
              rounded
              v-model="title"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <div class="d-flex">
              <v-select
                v-if="!$apollo.queries.tourCategories.loading"
                :items="tourCategories"
                label="Category"
                filled
                rounded
                item-text="name"
                item-value="id"
                v-model="category"
                multiple
              ></v-select>
              <v-btn
                icon
                color="primary"
                style="margin-top: 10px; margin-left: 10px"
                @click="cats = true"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="col-md-6">
            <v-select
              v-if="!$apollo.queries.cities.loading"
              :items="cities.map(item => ({id: item.id, name: item.name}))"
              label="City"
              filled
              rounded
              item-text="name"
              item-value="id"
              v-model="city"
            ></v-select>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Youtube"
              placeholder="Youtube video ID"
              filled
              rounded
              v-model="youtube"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Slug"
              placeholder="Slug URL"
              filled
              disabled
              rounded
              v-model="slug"
            ></v-text-field>
          </div>
          <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center w-100">
              <div>
                <h6 style="margin-top: 20px">Main Image</h6>
              </div>
              <v-file-input
                hide-input
                truncate-length="15"
                accept="image/*"
                v-model="topimage"
              ></v-file-input>
            </div>
            <div>
              <v-img
                contain
                max-height="150"
                max-width="250"
                :src="topimagerender"
              ></v-img>
            </div>
            <div>
              <v-img
                v-if="topExisting && topimagerender === null"
                contain
                max-height="150"
                max-width="250"
                :src="getAssetURl(topExisting.url)"
              ></v-img>
            </div>
          </div>
          <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center w-100">
              <div>
                <h6 style="margin-top: 20px">All Images</h6>
              </div>
              <v-file-input
                hide-input
                truncate-length="15"
                multiple
                accept="image/*"
                v-model="images"
              ></v-file-input>
            </div>
            <div class="row">
              <v-img
                class="col-md-3"
                contain
                v-for="(rds, index) of renderImages" :key="index"
                max-height="150"
                :src="rds"
              ></v-img>
            </div>
            <div class="row">
              <div class="col-md-3" v-for="(rds, index) of allExisting" :key="index">
                <v-img
                  contain
                  max-height="150"
                  :src="getAssetURl(rds.url)"
                ></v-img>
                <div class="d-flex justify-content-center align-items-center mt-3">
                  <v-btn
                    dark
                    small
                    color="red"
                    tile
                    @click="onDeleteImage(index)"
                  >
                    <v-icon dark>
                      mdi-delete-variant
                    </v-icon>
                    Delete
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div>
              <h6 style="margin-top: 20px">Info</h6>
            </div>
            <client-only>
              <editor api-key="no-api-key" :init="{
                            height: 500,
                            plugins: ['image', 'preview', 'link', 'advlist', 'autolink', 'lists', 'hr'],
                            file_picker_callback: filePickerCallBack,
                            file_picker_types: 'image',
                            automatic_uploads: true,
                            images_upload_handler: imageUploadHandler,
                            branding: false,
                            content_style: 'body { font-family: Arial; }'}" v-model="editorModel"/>
            </client-only>
          </div>
          <div class="col-md-12">
            <div>
              <h6 style="margin-top: 20px">Booking Info</h6>
            </div>
            <client-only>
              <editor api-key="no-api-key" :init="{
                            height: 500,
                            plugins: ['image', 'preview', 'link', 'advlist', 'autolink', 'lists', 'hr'],
                            file_picker_callback: filePickerCallBack,
                            file_picker_types: 'image',
                            automatic_uploads: true,
                            images_upload_handler: imageUploadHandler,
                            branding: false,
                            content_style: 'body { font-family: Arial; }'}" v-model="infoModel"/>
            </client-only>
          </div>
          <div class="col-md-12">
            <div>
              <h6 style="margin-top: 20px">Terms & Conditions</h6>
            </div>
            <client-only>
              <editor api-key="no-api-key" :init="{
                            height: 500,
                            plugins: ['image', 'preview', 'link', 'advlist', 'autolink', 'lists', 'hr'],
                            file_picker_callback: filePickerCallBack,
                            file_picker_types: 'image',
                            automatic_uploads: true,
                            images_upload_handler: imageUploadHandler,
                            branding: false,
                            content_style: 'body { font-family: Arial; }'}" v-model="termsModel"/>
            </client-only>
          </div>
          <div class="col-md-12">
            <v-progress-linear
              color="lime"
              indeterminate
              reverse
              v-if="loading"
            ></v-progress-linear>
          </div>
          <div class="col-md-12">
            <div class="d-flex">
              <v-spacer></v-spacer>
              <v-btn
                tile
                color="primary"
                @click="onCreateNewTour"
              >
                Update
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" container" v-if="!$apollo.queries.tour.loading">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Pricing</h5>
          <v-btn
            rounded
            color="primary"
            @click="add = true"
          >
            Add Pricing
          </v-btn>
        </div>
        <hr/>
        <v-card elevation="1">
          <v-card-title>
            <h2 class="text-primary">Pricing</h2>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="tour.pricings"
            hide-default-footer
          >
            <template v-slot:item.actions="{ item }">
              <v-btn
                text
                color="primary"
                v-if="!item.enabled"
                @click="updateStatus(true, item.id)"
              >
                Enable
              </v-btn>
              <v-btn
                text
                color="red"
                v-if="item.enabled"
                @click="updateStatus(false, item.id)"
              >
                Disable
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
    <v-dialog
      v-model="add"
      width="50vw"
    >
      <v-app-bar color="primary">
        <v-toolbar-title class="text-white font-weight-bold">Add Pricing</v-toolbar-title>
      </v-app-bar>
      <v-card-text class="bg-white">
        <div class="row">
          <div class="col-md-12">
            <v-text-field
              label="Name"
              placeholder="Pricing Name"
              filled
              rounded
              v-model="pricingname"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <div>
              <v-checkbox
                label="Adult"
                v-model="adult"
              ></v-checkbox>
            </div>
            <v-text-field
              label="Adult"
              placeholder="Adult"
              filled
              rounded
              :disabled="!adult"
              v-model="adultValue"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <div>
              <v-checkbox
                label="Child"
                v-model="child"
              ></v-checkbox>
            </div>
            <v-text-field
              label="Child"
              placeholder="Child"
              filled
              rounded
              :disabled="!child"
              v-model="childValue"
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
          @click="onCreatePricing"
        >Add</v-btn>
        <v-btn
          color="error"
          text
          @click="add = false"
        >Cancel</v-btn>
      </v-card-actions>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {
  AllCitiesDocument, ChangePricingStatusDocument,
  Cities,
  CreateCategoryDocument, CreateTourPricingDocument,
  GetAllTourCategoriesDocument, GetSingleTourDocument,
  TourCategory, Tours, UpdateTourDocument
} from "~/gql";
import {MaterialIcons} from "~/utils/material-icons";
import axios from "axios";
import {mainUrl} from "~/utils/global";
import Editor from "@tinymce/tinymce-vue";
import slugify from "slugify";

@Component({
  layout: 'console',
  components: {
    'editor': Editor
  },
  apollo: {
    cities: {
      query: AllCitiesDocument,
      pollInterval: 3000
    },
    tourCategories: {
      query: GetAllTourCategoriesDocument,
      pollInterval: 3000
    },
    tour: {
      query: GetSingleTourDocument,
      variables() {
        return {
          id: this.$route.params.id
        }
      },
      pollInterval: 3000
    }
  }
})
export default class TourId extends Vue {
  private title = ''
  private cities: Cities[]
  private editorModel: string = ''
  private infoModel: string = ''
  private termsModel: string = ''
  private loading = false
  private images: any[] = []
  private renderImages: any[] = []
  private topimage: any = null
  private topimagerender: any = null
  private cats = false

  private loadicons: any[] = MaterialIcons
  private catname = ''
  private caticon = ''

  private tourCategories: TourCategory[]

  private category: any[] = []
  private city = ''
  private youtube = ''

  private tour: Tours

  private allExisting: any[] = []
  private topExisting: any = null

  private slug = ''

  private add = false
  private adult = false
  private adultValue = ''
  private child = false
  private childValue = ''
  private pricingname = ''

  getAssetURl(url: string) {
    return `${mainUrl}${url}`
  }

  @Watch('title')
  onChangeName() {
    this.slug = slugify(this.title)
  }

  private headers = [
    {
      text: 'Id',
      align: 'start',
      sortable: false,
      value: 'id'
    },
    {
      text: 'Name',
      align: 'start',
      sortable: false,
      value: 'nameSlug'
    },
    {
      text: 'Adult',
      align: 'start',
      sortable: false,
      value: 'adultprice'
    },
    {
      text: 'Child',
      align: 'start',
      sortable: false,
      value: 'childprice'
    },
    {
      text: 'Actions',
      align: 'end',
      value: 'actions'
    }
  ]

  updateStatus(status: boolean, id: string) {
    this.loading = true
    this.$apollo.mutate({
      mutation: ChangePricingStatusDocument,
      variables: {
        id,
        status
      }
    })
      .then(value => {
        this.$message.success('Updated')
        this.loading = false
      })
    .catch(error => {
      this.$message.error(error.message)
      this.loading = false
    })
  }

  onCreatePricing() {
    if (this.adult && this.adultValue === '') {
      this.$message.error('Adult value is requires')
      return
    }
    if (this.child && this.childValue === '') {
      this.$message.error('Child value is requires')
      return
    }
    this.loading = true
    this.$apollo.mutate({
      mutation: CreateTourPricingDocument,
      variables: {
        name: this.pricingname,
        tourId: this.tour.id,
        adult: this.adult,
        child: this.child,
        adultprice: parseFloat(this.adultValue),
        childprice: parseFloat(this.childValue)
      }
    })
    .then(value => {
      this.loading = false
      this.add = false
    })
    .catch(error => {
      this.loading = false
      this.$message.error(error.message)
    })
  }

  @Watch('tour')
  onLoadTour() {
    console.log(this.tour)
    if (this.tour) {
      this.title = this.tour.title!
      this.city = this.tour.city!.id
      this.category = this.tour.tour_categories!.map(item => item!.id)
      this.youtube = this.tour.youtube!
      this.editorModel = this.tour.basic!
      this.infoModel = this.tour.info!
      this.termsModel = this.tour.terms!
      this.allExisting = this.tour.allmedia!
      this.topExisting = this.tour.mater!
      this.slug = this.tour.slug!
    }
  }

  filePickerCallBack(callback, value, meta) {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.onchange = function (event) {
      // @ts-ignore
      const file = this.files[0]
    }
    input.click()
  }

  imageUploadHandler(blobinfo, success, failure) {
    const file = new File([blobinfo.blob()], blobinfo.filename())
    console.log(file)
  }

  @Watch('topimage')
  onLoadTop() {
    this.topimagerender = null
    let reader = new FileReader()
    reader.onload = e => {
      this.topimagerender = e.target!.result
    }
    reader.readAsDataURL(this.topimage)
  }

  @Watch('images')
  onLoadImages() {
    this.renderImages = []
    for (const rds of this.images) {
      let reader = new FileReader()
      reader.onload = e => {
        this.renderImages.push(e.target!.result)
      }
      reader.readAsDataURL(rds)
    }
  }

  onDeleteImage(index) {
    this.allExisting.splice(index, 1)
  }

  onCreateNewCategory() {
    this.loading = true
    this.$apollo.mutate({
      mutation: CreateCategoryDocument,
      variables: {
        name: this.catname,
        icon: this.caticon
      }
    })
      .then(value => {
        this.cats = false
        this.loading = false
        this.$message.success('Category Added')
      })
      .catch(e => {
        this.loading = false
        this.$message.error(e.message)
      })
  }

  async onCreateNewTour() {
    if (this.title === '') {
      this.$message.error('Tour Title is requires')
      return
    }
    if (this.city === '') {
      this.$message.error('Tour City is requires')
      return
    }
    if (this.editorModel === '') {
      this.$message.error('Tour Basic Info is requires')
      return
    }
    if (this.topimage === '') {
      this.$message.error('Main image is requires')
      return
    }
    this.loading = true
    let topImage
    if (this.topExisting) {
      topImage = this.topExisting.id
    }
    let allImages: any[] = []
    if (this.allExisting.length > 0) {
      allImages = this.allExisting.map(item => item.id)
    }
    if (this.topimage !== null) {
      const formData = new FormData();
      formData.append('files', this.topimage!, this.topimage!.name)
      const uploadTopImage = await axios.post(`${mainUrl}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization : `Bearer ${this.$apolloHelpers.getToken()}`
        }
      })
      topImage = uploadTopImage.data[0].id
    }
    if (this.images.length > 0) {
      const formData1 = new FormData()
      for (const imgs of this.images) {
        formData1.append('files', imgs, imgs.name)
      }
      const uploadAllImage = await axios.post(`${mainUrl}/upload`, formData1, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization : `Bearer ${this.$apolloHelpers.getToken()}`
        }
      })
      allImages = uploadAllImage.data.map(item => item.id)
    }
    this.$apollo.mutate({
      mutation: UpdateTourDocument,
      variables: {
        title: this.title,
        youtube: this.youtube,
        basic: this.editorModel,
        cats: this.category,
        allMedia: allImages,
        master: topImage,
        city: this.city,
        id: this.$route.params.id,
        slug: this.slug,
        info: this.infoModel,
        terms: this.termsModel
      }
    })
      .then(value => {
        this.loading = false
        this.$message.success('Tour Updated')
      })
      .catch(e => {
        this.loading = false
        this.$message.error(e.message)
      })
  }
}
</script>
