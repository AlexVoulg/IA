<script setup>
import { ref } from 'vue';
import { signIn } from '../services/Authentication.js'
import { useRouter } from 'vue-router'

const router = useRouter();
//create array of inspirational quotes and change it randomly on startup
const quotes = [

]
const quote = "Unlock possibilities"

const email = ref("")
const password = ref("")

const err = ref(false)

function login() {
    if (email.value == "" || password.value == "") {
        alert("Error, empty fields")
        err.value = true;
        return false;
    }
    const credentials = {
        "email" : email.value,
        "password" : password.value
    }

    signIn(credentials.email, credentials.password)
    router.push('/');
}

</script>

<template>
    <div class="container">
        <div class="login">
            <h1>Login</h1>
            <p>{{ quote }}</p>
            <div class="input-group">
                <input v-model="email" type="text" class="input-field" placeholder="someone@somewhere.com">
                <input v-model="password" type="password" class="input-field" placeholder="Password">
                <button v-on:click="login" class="submit-btn">Log In</button>
            </div>
        </div>
    </div>

</template>


<style scoped lang="scss">


p{
    cursor: default;
}
.error {
    border: 4px solid red;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: 'Josefin Sans', sans-serif;
    padding-top: 200px;
}

.login {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 7px;
    align-items: center;
    width: fit-content;
    height: fit-content;
    padding: 20px 20px;
    justify-content: space-between;
}

h1 {
    color: rgb(123, 108, 255);
    text-align: center;
    padding-top: 5px;
    cursor: default;
    font-size: 2.5em;
}

.input-group {
    display: flex;
    flex-direction: column;
}

.input-field {
    width: 100%;
    padding: 10px 0;
    margin: 10px 0;
    border-left: 0px;
    /* remove the left border from the text field */
    border-top: 0;
    /* remove the top border from the text field */
    border-right: 0;
    /* remove the right border from the text field */
    border-bottom: 1px solid #999;
    outline: none;
    background: transparent;
    /* make the background of the field transparent */
    letter-spacing: 0.5px;
}

.submit-btn {
    justify-content: center;
    text-align: center;
    width: 320px;
    height: 35px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    background-color: rgb(123, 108, 255);
}

.submit-btn:hover {
    color: white;
    background-color: rgb(104, 88, 252);
    width: 320px;
    height: 40;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.185);
    cursor: pointer;
}
</style>
