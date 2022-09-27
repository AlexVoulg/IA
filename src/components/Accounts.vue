<script setup>


</script>


<template>
        <div class="main">
            <div class="info">
                <h2><span>Email: </span>alexvoulg2005@gmail.com</h2>
                <h2 class="spassword"><span>Password: </span> alexvoulg.2005 </h2>
                <button class="deleteBtn">Delete Account</button>
            </div>
        </div>

</template>


<style scoped lang="scss">
.main {
    display: flex;
    font-family: 'Josefin Sans', sans-serif;
    background-color: #fff;
    width: fit-content;
    border-radius: 5px;
    cursor: default;
    padding: 10px 0;
}


.info {
    color: black;
    font-size: 15px;
    padding: 0 5px 0 2px;
    height: 100%;
}


.info span {
    color: rgb(123, 108, 255);
}

.deleteBtn {
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: right;
    align-items: right;
    color: rgb(184, 73, 73);
    text-decoration: none;
}
</style>