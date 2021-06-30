<template>
  <v-snackbar :color="data.color" top v-model="data.show" timeout="3000">
      <v-row class="px-2" align="center">
    <h4>{{ data.message }}</h4>
    <v-spacer />
    <v-btn text small @click="data.show = false">Close</v-btn>
      </v-row>
  </v-snackbar>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>