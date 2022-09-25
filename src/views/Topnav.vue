<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const loggedIn = ref(true)
const admin = ref(true)

const route = useRoute();
const routeName = ref(route.name);

//koitaei gia allages sto route.name
watch(() => route.name, () => {
    routeName.value = route.name;
});

</script>

<template>
    <div class="topnav">
        <router-link :class="[route.name === 'home' ? 'activePage' : '']" to="/">Home</router-link>
        <router-link :class="[route.name === 'travels' ? 'activePage' : '']" to="/travels">Travels</router-link>
        <router-link :class="[route.name === 'about' ? 'activePage' : '']" to="/about">About & Contact</router-link>
        <router-link :class="[route.name === 'createTravel' ? 'activePage' : '']" v-if="loggedIn" to="/createTravel">Create Travel</router-link>
        <!-- Change if user is logged in -->
        <div class="right">
            <router-link :class="[route.name === 'admin' ? 'activePage' : '']" v-if="admin" to="/admin">Admin</router-link>
            <router-link :class="[route.name === 'Account' ? 'activePage' : '']" to="/account">Account</router-link>
            <router-link :class="[route.name === 'login' ? 'activePage' : '']" to="/login">Login</router-link>
        </div>

    </div>
</template>

<style scoped lang="scss">

.right{
    display: flex;
    justify-content: right;
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

.empty {
    
}

.activePage {
    background-color: rgba(142, 129, 252, 0.8);
    color: white;
}
</style>