<script setup>


</script>


<template>

    <div class="main-delete">
        <div class="main">
            <h1 class="username">AlexVoulg</h1>
            <div class="info">
                <h2 class="firstName"><span>Name: </span>Alexandros</h2>
                <h2 class="lastName"><span>Surname: </span>Voulgarakis</h2>
                <h2><span>Email: </span>alexvoulg2005@gmail.com</h2>
            </div>
        </div>
        <a href="#">Delete Account</a>
    </div>

</template>


<style scoped lang="scss">
.main {
    font-family: 'Josefin Sans', sans-serif;
    background-color: #fff;
    width: fit-content;
    border-radius: 5px;
    cursor: default;
    padding: 0;
}

.username {
    text-align: center;
    color: #fff;
    font-size: 35px;
    background-color: rgb(123, 108, 255);
    margin-top: 0;
    border-radius: 5px 5px 0 0;
}

.info {
    color: black;
    font-size: 15px;
    padding: 0 5px 0 2px;
}


.info span {
    color: rgb(123, 108, 255);
}

.main-delete {
    padding: 0px;
    margin: 0;
}

a {
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: right;
    align-items: right;
    color: rgb(184, 73, 73);
    text-decoration: none;
}
</style>