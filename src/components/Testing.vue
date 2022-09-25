<!-- <script setup>

</script>

<template>

</template>

<style scoped lang="scss">
        
</style> -->
<script setup>
(async () => {
    let countries = await fetch("https://mercurypass-api.herokuapp.com/api/countries")
    countries = await countries.json()
    console.log(countries)
})()

</script>



<template>


</template>




<style scoped lang="scss">

</style>
