<script setup>
import { ref } from 'vue'
import Destination from '../components/Destination.vue';
import { db } from '../main.js'
import { collection, getDocs } from "firebase/firestore"; //it just works

import { addTravel } from "../services/CreateData.js"
const destinations = ref();
const destinationsIds = ref();
async function getData(){
    const result = await getDocs(collection(db, "destinations"));
    destinations.value = result.docs.map(i => i.data())
    destinationsIds.value = result.docs.map(i => i.id)
    for (let i = 0; i < destinations.value.length; i++){
        destinations.value[i].id = destinationsIds.value[i];
    }
    console.log(destinations.value)

    // querySnapshot.forEach((doc) => {
    // console.log( doc.data() );
    // });
}
getData();

</script> 


<template>
    <div class="container">
        <Destination v-for="destination in destinations" :key="destination" :trip="destination" />
    </div>
</template>


    
<style scoped lang="scss">

.container{
        display: flex;
        flex-wrap: wrap;
    }

</style>