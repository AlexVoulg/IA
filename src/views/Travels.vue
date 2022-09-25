<script setup>
import { ref } from 'vue'
import Destination from '../components/Destination.vue';
import { db } from '../main.js'
import { collection, getDocs } from "firebase/firestore"; //it just works

import { addSomething } from "../services/CreateData.js"
const destinations = ref();

async function getData(){
    const result = await getDocs(collection(db, "destinations"));
    destinations.value = result.docs.map(i => i.data())
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