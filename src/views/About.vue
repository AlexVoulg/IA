<script setup>
    



</script>

<template>
    <selection class="about">
        <div class="main">
            <img src="../assets/aboutContactImg.png">
            <div class="about-text">
                <h1>About Us</h1>
                <h5>Travel <span>Agency</span></h5>
                <p>Travelling is an amazing experience for all. Unfortunately, many
                    people are not able to travel simply because they have no one
                    else able to join them due to work, finance and more.
                    It can be difficult to find company to travel with and even
                    more difficult to travel alone. Such experience, can be
                    very expensive, depressing, lonely, boring and most importantly
                    very dangerous especially in new countries that the traveler
                    is unfamiliar with.
                </p>

                <div class="contact">
                    <h4 class="email"><span>Email:</span> travelAgencyIA@gmail.com</h4>
                    <h4 class="phone"><span>Phone:</span> 2106180231</h4>
                </div>
            </div>
        </div>
    </selection>


</template>
    

<style scoped lang="scss">
.about {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 78px 0;
}

.about img {
    height: auto;
    width: 460px;
    padding-top: 60px;
}

.about-text {
    width: 550px;
}

.main {
    font-family: "Josefins-Sans", sans-serif;
    display: flex;
    width: 1130px;
    max-width: 95%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
}

.about-text h1 {
    color: white;
    font-size: 80px;
    text-transform: capitalize;
    margin-bottom: 20px;
}

.about-text h5 {
    color: white;
    font-size: 25px;
    text-transform: capitalize;
    margin-bottom: 25px;
    letter-spacing: 2px;
}

.about-text p {
    color: rgba(142, 129, 252, 0.8);
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
}

span {
    color: rgba(142, 129, 252, 0.8);
}

.contact {
    display: flex;
    flex-direction: column;
    letter-spacing: 1px;
    gap: 1px;
}

.email {
    padding: 1px 0;
    color: #fff;
    margin:0;
}

.phone {
    color: #fff;
    margin: 8px 0;
}

.email span {
    color: rgba(142, 129, 252, 0.8);
}

.phone span {
    color: rgba(142, 129, 252, 0.8);
}

</style>