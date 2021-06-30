<template>
  <v-app>
    <v-row align="center" justify="center"
      ><v-col align="center">
        <v-card max-width="200" max-height="200">
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-progress-circular
                :size="50"
                :width="5"
                color="primary"
                indeterminate
              />
            </v-col>
            <v-col cols="12">
              <div
                class="caption text-uppercase text-center"
                v-text="load"
              ></div>
            </v-col>
          </v-row>
        </v-card> </v-col
    ></v-row>
  </v-app>
</template>

<script>
export default {
    data: () => ({
        load:'Loading...'
    })
};
</script>

<style>
.v-progress-circular {
  margin: 1rem;
}
</style>