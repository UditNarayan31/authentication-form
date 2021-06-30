<template>
  <div>
      <v-card>
          <v-card-text>
              <v-toolbar flat>
                  <v-card-title>WELCOME</v-card-title>
                  <v-card-subtitle class="mt-4">
                       {{
                    this.$store.getters["getState"] ? this.$store.getters["getUser"].name
                      : "User"
                  }}
                  </v-card-subtitle>
              </v-toolbar>
          </v-card-text>
      </v-card>
  </div>
</template>

<script>
export default {
 middleware: "authenticated",
}
</script>

<style>

</style>