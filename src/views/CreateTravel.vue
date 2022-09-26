<script setup>
import {ref} from 'vue';
import {addTravel} from '../services/CreateData.js';

const country = ref("");
const description = ref("");
const places = ref("");
const prices = ref("");

async function addTravel(){
    //check validity that no input is empty
    if (country.value == "" || description.value == "" || places.value == "" || prices.value == "") {
        alert("Error, empty fields")
        return false;
    }
    const travelInfo = {
        "country" : country.value,
        "description" : description.value,
        "places" : places.value,
        "prices" : prices.value
    }

    await addTravel(travelInfo);
}


</script>


<template>

    <div class="add">
        <h1>Add New Travel</h1>
        <form class="text-fields">
            <h2>Name Of Country</h2>
            <input v-model="country" type="text" class="input-field" placeholder="Country" required>
            <input v-model="description" type="text" class="input-field" placeholder="Description" required>
            <h2>Places To Visit</h2>
            <input v-model="places" type="text" class="input-field" placeholder="Places" required>
            <h2>Prices</h2>
            <input v-model="prices" type="text" class="input-field" placeholder="Prices" required>
            <button v-on:click="addTravel" class="submit-btn">Add Travel</button>
        </form>
    </div>
</template>


    
<style scoped lang="scss">

.add{
    background: #fff;
    width: 450px;
    height: 600px;
    margin: auto;
    border-radius: 7px;
    font-family: 'Josefin Sans', sans-serif;
}

h1{
    text-align: center;
    padding-top: 15px;
    margin: 50px;
    cursor: default;
    color: rgb(123, 108, 255)
}

h2{
    text-align: left;
}

form{
    width: 350px;
    margin-left: 5px;
}

.add{
    top: 125px;
    width: 380px;
    transition: .5s;
}   

.input-field{
    text-align: left;
    width: 100%;
    padding: 10px 0;
    margin: 10px 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #999;
    outline:none;
    background: transparent;
}

.submit-btn{
    width: 350px;
    height: 25px;
    margin-top: 20px;
    border-radius: 3px;
    font-size: 15px;
    text-align: center;
    background-color: rgb(123, 108, 255);    
    color: white;
    border: none;
}

.submit-btn:hover{
    background-color: rgb(104, 88, 252);
    box-shadow: 0 2px 2px 1px  rgba(0, 0, 0, 0.185);
}

/* Add a black background color to the top navigation */
.topnav {
    background-color: #333;
    overflow: hidden;
    font-family: 'Josefin Sans', sans-serif;
}

/* Style the links inside the navigation bar */
.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
    background-color: rgba(142, 129, 252, 0.8);
    color: white;
}

</style>