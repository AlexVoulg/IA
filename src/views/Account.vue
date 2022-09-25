<script setup>
import Accounts from '../components/Accounts.vue';


</script>


<template>
    <div class="container">
        <Accounts></Accounts>
    </div>
</template>

<style scoped lang="scss">
    .container{
        //cant make it center without padding-top
        padding-top: 300px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

</style>