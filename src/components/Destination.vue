<script setup>

const props = defineProps({
    trip: Object
})


</script>

<template>
    <div class="container" >
        <p>id : {{trip.id}}</p>
        <h1 class="titles"> {{trip.country}} </h1>
        <p>{{trip.description}}</p>
        <h2>Places to visit</h2>
        <p>{{trip.places}}</p>
        <h2>Prices</h2>
        <p>{{trip.prices}}</p>
        <button  class="likeBtn"><i class="fas fa-heart"></i></button>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    width: 100%;
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
    align-items: center;
    text-align: left;
    
    
    transition: 200ms all ease;

    &:hover {
        box-shadow: 0px 15px 20px 1px rgba(0, 0, 0, 0.185);
        transform: scale(1.01);
    }
}

.titles {
    font-family: 'Josefin Sans', sans-serif;
    color: rgba(142, 129, 252, 0.8);
    font-size: 2rem;
}

.likeBtn{
    width: 2rem;
    height: 2rem;
    border-radius: 50px;
    align-items: center;
    text-align: center;
    justify-content: center;

    transition: all 100ms ease;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.5);
    &:hover{
        background-color: red;
        color: white;      
    }
}



</style>
