<script setup>
</script>


<template>
  <div class="main">
    <div class="side">
      <div class="info">
        <h2><span>Email: </span> alexvoulg@gmail.com</h2>
        <h2><span>Password: </span>alexvoulg.2005</h2>
      </div>
      <div class="bottom">
        <button class="signOutButton">Sign Out</button>
        <button class="deleteAccountButton">Delete Account</button>
      </div>
    </div>
    <div class="favourites"></div>
    <!-- <Accounts></Accounts> -->
  </div>
</template>

<style scoped lang="scss">
$buttonPurple: rgb(123, 108, 255);

* {
  font-family: "Josefin Sans", sans-serif;
}

html, body{
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
  width: 200px; 
  height: 100%;
  padding: 0 10px;
}

.bottom {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
}

.signOutButton {
  padding: 0.5rem;
  margin: 0;
  width: 200px;
  background-color: $buttonPurple;
  color: white;
  border: none;
  border-radius: 5px;
  width: fit-content;
}
.deleteAccountButton {
  padding: 0.5rem;

  width: fit-content;

  background-color: rgb(240, 60, 60);
  color: white;
  border: none;
  border-radius: 5px;
}

.info span {
  color: rgb(123, 108, 255);
}

.info {
  color: black;
}
</style>