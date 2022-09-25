<script setup>

</script>


<template>
    <div class="main">
            <h1>Travel</h1>
            <router-link to="/travels">View Our Travels</router-link>
    </div>
</template> 


<style scoped lang="scss"> 
.main {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: none;
}

.main h1{
    font-size: 160px;
    color:  rgba(142, 129, 252, 0.8);
    font-weight: 600;
    margin-top: 30vh;
    margin-bottom: 20px;
    cursor: default;
}

.main a{
    color: white;
    text-decoration: none;
    font-size: 24px;
    border: 2px solid white;
    padding: 14px 70px;
    border-radius: 50px;
    width: 560px;
}

.main a:hover{
    color: rgba(142, 129, 252, 0.8);
}

</style>