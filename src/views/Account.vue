<script setup>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { useAuth } from "../services/store";
import { db } from "../main";

import { doc, getDoc } from "firebase/firestore";

const router = useRouter();
const auth = useAuth();
const user = auth.currentUser;

// async function getData(){
//     const result = await getDocs(collection(db, "destinations"));
//     destinations.value = result.docs.map(i => i.data())
//     destinationsIds.value = result.docs.map(i => i.id)
//     for (let i = 0; i < destinations.value.length; i++){
//         destinations.value[i].id = destinationsIds.value[i];
//     }
//     console.log(destinations.value)

//     // querySnapshot.forEach((doc) => {
//     // console.log( doc.data() );
//     // }); 
// }
// getData();

async function getAccountDetail() {
  const auth = getAuth();
  const u = auth.currentUser;
  const result = doc(db, "users", user.value.uid);
  const details = await getDoc(docRef);
  if (details.exists()) {
    console.log("Document data:", details.data());
  }
}
getAccountDetail();

async function signOutAccount() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      //after signing out, route user to home page
      alert("Signed out successfully");
      router.push("/");
    })
    .catch((error) => {
      alert(error.message);
    });
}

async function deleteAccount() {
  router.push("/");
}
</script>


<template>
  <div class="main">
    <div class="side">
      <div class="info">
        <h2><span>Email: </span> {{user.email}} </h2>
        <h2><span>Password: </span> {{user.password }} </h2>
      </div>
      <div class="bottom">
        <button v-on:click="signOutAccount" class="signOutButton">
          Sign Out
        </button>
        <button v-on:click="deleteAccount" class="deleteAccountButton">
          Delete Account
        </button>
      </div>
    </div>
    <div class="favourites"></div>
  </div>
</template>

<style scoped lang="scss">
$buttonPurple: rgb(123, 108, 255);

* {
  font-family: "Josefin Sans", sans-serif;
}

html,
body {
  height: 100vh;
}

.main {
  //cant make it center without padding-top
  display: flex;
  flex-grow: 1;
  width: auto;
  height: 100%;
  justify-content: flex-start;
}

.side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(243, 233, 233);
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  padding: 0 10px;
}

.bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
}

.signOutButton {
  padding: 0.5rem;
  margin: 0;
  background-color: $buttonPurple;
  color: white;
  border: none;
  border-radius: 5px;
}
.deleteAccountButton {
  padding: 0.5rem;
  margin: 0;

  background-color: rgb(240, 60, 60);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.info span {
  color: rgb(123, 108, 255);
}

.info {
  color: black;
}
</style>