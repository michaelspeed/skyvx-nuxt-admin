<template>
  <div class="d-flex flex-column flex-root" style="height: 100vh">
    <!--begin::Login-->
    <div class="login login-5 login-signin-on d-flex flex-row-fluid" id="kt_login">
      <div class="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid" style="background-image: url(/media/bg/bg-2.jpg);">
        <div class="login-form text-center text-white p-7 position-relative overflow-hidden">
          <!--begin::Login Header-->
          <div class="d-flex flex-center mb-15">
            <a href="#">
              <img src="/logo/logo.png" class="max-h-75px" alt=""/>
            </a>
          </div>
          <!--end::Login Header-->

          <!--begin::Login Sign in form-->
          <div class="login-signin">
            <div class="mb-20">
              <h3 class="opacity-40 font-weight-normal">Sign In To Admin</h3>
              <p class="opacity-40">Enter your details to login to your account:</p>
            </div>
            <div class="form" id="kt_login_signin_form">
              <div class="form-group">
                <input class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="text" placeholder="Email" name="username" autocomplete="off" v-model="email"/>
              </div>
              <div class="form-group">
                <input class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="password" placeholder="Password" name="password" v-model="password"/>
              </div>
              <div class="form-group text-center mt-10">
                <CircularProgress v-if="loading"/>
                <button class="btn btn-pill btn-primary opacity-90 px-15 py-3" v-if="!loading" @click="onLogin">Sign In</button>
              </div>
            </div>
          </div>
          <!--end::Login Sign in form-->

        </div>
      </div>
    </div>
    <!--end::Login-->
  </div>
</template>

<script lang="ts" >
import {Component, Vue} from "nuxt-property-decorator";
import {CreateLoginDocument} from "~/gql";
import CircularProgress from "~/components/progress/CircularProgress.vue";

@Component({
  components: {CircularProgress},
  head: {
    script: [
      {src: '/js/pages/custom/login/login-general.js?v=7.0.6', body: true},
    ]
  }
})
export default class Index extends Vue {
  private email = '';
  private password = '';
  private loading = false;

  onLogin() {
    this.loading = true;
    this.$apollo.mutate({
      mutation: CreateLoginDocument,
      variables: {
        identifier: this.email,
        password: this.password
      }
    })
    .then(value => {
      this.loading = false;
      this.$apolloHelpers.onLogin(value!.data!.login.jwt)
      this.$store.dispatch('user/setLogin', value!.data!.login.user.id)
      this.$router.push('/app/dashboard');
    })
    .catch(e => {
      this.loading = false;
      this.$message.error(e.message);
    })
  }

}
</script>
