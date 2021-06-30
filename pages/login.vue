<template>
  <div>
    <v-card class="pa-5" v-if="!showLoader" flat tile height="500">
      <v-row class="mx-auto justify-center">
         <v-card style="margin-top:10%" class="pa-5" width="500">
              <div class="title text-center mb-5">Login Form</div>
      <v-text-field
        dense
        outlined
        label="Email"
        v-model="tf_adminEmail_vm"
      ></v-text-field>

      <v-text-field
        dense
        outlined
        v-model="tf_adminPassword_vm"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-btn depressed color="success" @click="submitLogin">Login</v-btn>
         </v-card>
      </v-row>
    </v-card>
    <ErrorPopUp :data="errorMsg" />
    <Loader v-if="showLoader" />
  </div>
</template>

<script>
import Loader from "../components/loader.vue";
import ErrorPopUp from "~/components/ErrorPopUp.vue";
import _ from "lodash";
import { myAPI_Validator_JSON } from "~/functions/common";

export default {
  components: {
    Loader,
    ErrorPopUp,
  },
  layout: "loginLayout",
  data: () => ({
    tf_adminEmail_vm: "admin@admin.com",
    tf_adminPassword_vm: "12345",
    showLoader: false,

    errorMsg: {
      show: false,
      message: "",
      color: "success",
    },

    show1: false,
    rules: {
      required: (value) => !!value || "Required.",

      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  methods: {
    submitLogin: _.throttle(async function () {
      this.showLoader = true;
      try {
        let payload = {
          email: this.tf_adminEmail_vm,
          password: this.tf_adminPassword_vm,
          remember: false,
        };
        let ip = await this.$axios.$post("user/login", payload);
        let res = myAPI_Validator_JSON(ip);
        console.log("IP OP", ip);
        if (res.success == true) {
          this.errorMsg.color = "success";
          this.errorMsg.message = "Logged In SuccessFully";
        //   console.log("SET USER", res.data.logged_user);
          this.$store.dispatch("setUser", res.data.logged_user);
        //   this.$store.dispatch("setShopDetails", res.data.shopDetails);
          this.errorMsg.show = true;
          this.showLoader = false;
          this.$router.push("/profile");
        } else {
          this.errorMsg.color = "error";
          this.errorMsg.message = res.errCode;
          this.errorMsg.show = true;
          this.showLoader = false;
        }
      } catch (error) {
       this.showLoader = false;
          this.errorMsg.color = "error";
          this.errorMsg.message = "Eamil/Password Incotrect";
          this.errorMsg.show = true;
        console.log("SIGNIN CATCH ERR ::::> ", error);
      }
   }, 5000),
  },
};
</script>

<style>
</style>