<template>
  <v-app>
    <v-app-bar app color="#022a38" class="home-page-header" height="80" elevation="5">
    <v-row class="fill-height" align="center" justify="space-between">
        <v-img :src="isro" contain height="65px" max-width="120" class="ml-0" />
        <v-col cols="auto" class="text-center">
            <div class="header-text">
                <h3 class="mb-0">भारतीय अंतरिक्ष अनुसंधान संगठन, अंतरिक्ष विभाग</h3>
                <h3 class="mb-0">Indian Space Research Organisation, Department of Space</h3>
                <h3 class="mb-0">भारत सरकार / Government of India</h3>
            </div>
        </v-col>
        <v-img :src="india" contain height="65px" max-width="140" class="mr-0" />
    </v-row>
</v-app-bar>

<v-app-bar app  height="50" elevation="3">
  <router-link to="/">
    <v-btn>Home</v-btn>
  </router-link>

  <router-link to="/about">
    <v-btn>About</v-btn>
  </router-link>

  <router-link to="/ui">
    <v-btn>UI</v-btn>
  </router-link>
</v-app-bar>


<router-view/>
</v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    isro: require('@/assets/img/isro.png'),
    india: require('@/assets/img/india.png'),
  }),
}
</script>
<style scoped>
   .header-text {
       color: wheat;
       line-height: 1.2;
   }
</style>