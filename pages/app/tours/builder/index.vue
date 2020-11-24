<template>
  <div>
    <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Details-->
        <div class="d-flex align-items-center flex-wrap mr-2">

          <!--begin::Title-->
          <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Tour Builder</h5>
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
      <div class=" container ">
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
                :src="this.topimagerender"
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
          </div>
          <div class="col-md-12">
            <div>
              <h6 style="margin-top: 20px">Basic Info</h6>
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
                Save
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-dialog
      v-model="cats"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title style="background: #0BB783">
          <span class="headline text-white">Add Category</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Category Name"
                  required
                  v-model="catname"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-select
                  :items="loadicons"
                  label="Category Icon"
                  v-model="caticon"
                >
                  <template v-slot:item="{item}">
                    <div>
                      <v-icon
                        large
                        color="primary"
                      >
                        mdi-{{item}}
                      </v-icon>
                      <span style="margin-left: 10px">{{item}}</span>
                    </div>
                  </template>
                </v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-progress-linear
          color="lime"
          indeterminate
          reverse
          v-if="loading"
        ></v-progress-linear>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="cats = false"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="onCreateNewCategory"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">

import {Component, Vue, Watch} from "nuxt-property-decorator";
import {
  AllCitiesDocument,
  Cities,
  CreateCategoryDocument,
  CreateTourDocument,
  GetAllTourCategoriesDocument,
  TourCategory
} from "~/gql";
import Editor from '@tinymce/tinymce-vue'
import {MaterialIcons} from "~/utils/material-icons";
import axios from 'axios';
import {mainUrl} from "~/utils/global";
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
    }
  }
})
export default class Builder extends Vue {
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

  private category = []
  private city = ''
  private youtube = ''

  private slug = ''

  @Watch('title')
  onChangeName() {
    this.slug = slugify(this.title)
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
    console.log(this.$apolloHelpers.getToken())
    let topImage
    let allImages: any[] = []
    const formData = new FormData();
    formData.append('files', this.topimage!, this.topimage!.name)
    const uploadTopImage = await axios.post(`${mainUrl}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization : `Bearer ${this.$apolloHelpers.getToken()}`
      }
    })
    topImage = uploadTopImage.data[0].id
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
    this.$apollo.mutate({
      mutation: CreateTourDocument,
      variables: {
        title: this.title,
        youtube: this.youtube,
        basic: this.editorModel,
        cats: this.category,
        allMedia: allImages,
        master: topImage,
        city: this.city,
        info: this.infoModel,
        terms: this.termsModel
      }
    })
    .then(value => {
      this.loading = false
      this.$message.success('Tour added')
      this.$router.back()
    })
    .catch(e => {
      this.loading = false
      this.$message.error(e.message)
    })
  }
}
</script>
