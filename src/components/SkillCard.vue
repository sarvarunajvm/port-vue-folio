<template>
  <v-card outlined class="mx-auto mt-6">
    <v-container fluid>
      <v-row no-gutters>
        <span class="myFont h5 grey--text font-weight-light text--darken-2">{{title}}</span>
      </v-row>
      <v-divider class="mb-5"></v-divider>
      <v-row v-for="(cardItem,index) in cardItems" :key="index" no-gutters>
        <v-col cols="3" sm="3" md="4" lg="8" xl="8">
          <span class="pl-2 grey--text text--darken-2 font-weight-light text-caption">{{cardItem.title}}</span>
        </v-col>
        <v-col cols="9" sm="9" md="8" lg="4" xl="4" class="px-1 mx-0">
          <v-rating :value=cardItem.rating length="10" hover ripple class="pa-1 mx-0">
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? 'orange darken-5' : ''"
                v-text=cardItem.icon
                class="px-0 mx-0"
              ></v-icon>
            </template>
          </v-rating>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
    props:{
        title: String,
        cardItems: Array,
    },
  data: () => ({

  }),
};
</script>