<script setup>
import Topnav from "./views/Topnav.vue";

import { getCurrentUser } from "./services/Authentication.js";

let user;
async function getUser(){
  user = await getCurrentUser();
  console.log(user);
} 

getUser();
</script> 
<template>
  <!-- <h1 v-for="trip in trips" :key="trip"> 
    {{ trip }}
  </h1> -->
  <div class="app-container">
    <Topnav />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  
body {
  margin: 0;
  padding: 0;
  background-color: #191919;
}

</style>
