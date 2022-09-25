<script setup>

const props = defineProps({
    trip: Object
})

function route(){

}   

</script>

<template>
    <div class="container" >
        <h1 class="titles"> {{trip.country}} </h1>
        <p>{{trip.description}}</p>
        <h2>Places to visit</h2>
        <p>{{trip.places}}</p>
        <h2>Prices</h2>
        <p>{{trip.prices}}</p>
        <button class="interestedButton" id="interestedButton">Show More</button>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    color: white;
    flex-direction: column;
    background-color: rgb(233, 233, 233);
    font-family: 'Josefin Sans', sans-serif;
    border: 1px solid rgba(0, 0, 0, 0.200);
    color: black;
    border-radius: 5px;
    padding: 20px;
    margin: 10px 10px 10px 10px;
    width: fit-content;
    min-width: 320px;

    animation: 200ms all ease;

    &:hover {
        box-shadow: 0px 15px 20px 1px rgba(0, 0, 0, 0.185);
        transform: scale(1.01);
    }
}


.interestedButton {
    background-color: #191919;
    color: rgb(233, 233, 233);
    border: 1px solid rgba(0, 0, 0, 0.200);
    border-radius: 5px;
    height: 30px;
    width: 78px;
    border: none;

    &:hover {
        cursor: pointer;
        background-color: rgba(142, 129, 252, 0.8);
        color: black;
        height: 35px;
        width: 83px;
        box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.185);
    }
}


.moreInfoButton {
    background-color: black;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.200);
    border-radius: 5px;
    height: 30px;
    width: 90px;

    &:hover {
        cursor: pointer;
        background-color: aqua;
        color: black;
        height: 35px;
        width: 95px;
        box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.185);

    }
}

.titles {
    font-family: 'Josefin Sans', sans-serif;
    color: rgba(142, 129, 252, 0.8);
    font-size: 2rem;
}
</style>
