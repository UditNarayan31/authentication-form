<template>
  <v-app>
    <v-main>
      <v-container class="pa-0" style="max-width: 100%">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {},
  middleware: "loggedInCheck",

  mounted() {
    console.log("Layout Loaded ==> Plain.vue ");
  },
};
</script>