<template>
  <v-container id="contact" tag="section" fluid class="fill-height">
    <v-row class="fill-height" align="center" justify="center" align-content="center">
      <v-col cols="12" align-self="center">
        <v-row align="center" justify="center" align-content="center" no-gutters>
          <p class="text--primary text-h2 my-0 py-1 px-3">DON'T BE SHY, SAY 👋</p>
        </v-row>
        <v-row class="mt-12" align="center" justify="center" align-content="center" no-gutters>
          <v-col class="mt-6" cols="12" align-self="center">
            <v-card class="mx-auto mt-6">
              <v-container>
                <v-row no-gutters align="center" justify="center" align-content="center">
                  <v-col class="px-7" cols="12" md="6" lg="6" align-self="center">
                    <v-row>
                      <v-text-field color="primary" label="Name" outlined></v-text-field>
                    </v-row>
                    <v-row>
                      <v-text-field color="primary" label="Email" outlined></v-text-field>
                    </v-row>
                  </v-col>
                  <v-col class="px-5" cols="12" md="6" lg="6" align-self="center">
                    <v-textarea
                      color="primary"
                      clearable
                      outlined
                      name="input-7-4"
                      label="Message"
                      hint="Fill me up!"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row class="py-5" align="start" justify="start">
                  <v-col class="px-8" cols="12" md="4" lg="4" align-self="center">
                      <v-checkbox input-value="true" color="primary" label="Hoping you are not 🤖!"></v-checkbox>
                  </v-col>   
                </v-row>
                <v-row class="py-5" align="end" justify="end">
                  <v-col class="px-8" cols="12" md="2" lg="2" align-self="center">
                    <v-btn tile large block color="secondary" class="text--primary">
                      <v-icon left>mdi-send-circle-outline</v-icon>SEND
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
<style scoped>
</style>