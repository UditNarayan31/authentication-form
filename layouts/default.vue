<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item exact router color="blue" to="/profile">
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
        <v-btn text small @click="logout" v-if="this.$store.getters['getState']"
          >Logout</v-btn
        >
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
     <error-pop-up :data="errorMsg" />
  </v-app>
</template>

<script>
import ErrorPopUp from "../components/ErrorPopUp.vue";
import _ from 'lodash'
export default {
  components:{
    ErrorPopUp
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
       errorMsg: {
        show: false,
        message: "",
        color: "success",
      },
    }
  },
  methods: {
     logout: _.throttle(async function () {
      this.showLoader = true;
      try {
        let ip = await this.$axios.$post("user/logout");
        console.log("logout btn function", ip);
        if (ip.success == true) {
          this.showLoader = false;
          this.$router.push("/login");
          this.errorMsg.color = "success";
          this.errorMsg.message = "Logged Out SuccessFully";
          this.$store.dispatch("setUser", null);
          this.errorMsg.show = true;
        } else {
          this.showLoader = false;
          this.errorMsg.color = "error";
          this.errorMsg.message = "Logout Failed";
          this.errorMsg.show = true;
        }
      } catch (error) {
        this.showLoader = false;
        console.log("logout btn catch", error);
        this.errorMsg.color = "error";
        this.errorMsg.message = "Check Internet Connection";
        this.errorMsg.show = true;
      }
    },5000),
  },
}
</script>
