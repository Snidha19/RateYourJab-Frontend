<template>
  <!--  <div class="home">-->
  <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
  <!--    <router-link to ="/App"> go to App </router-link>-->
  <!--  </div>-->
  <v-app>
    <div>
      <v-app-bar color="#80BFE2" dense dark style="height: 100px">
        <img
          style="width: 70px; height: 70px; margin-top: 50px"
          alt="logo"
          src="../assets/covid-19-logo.png"
        />
        <v-app-bar-title
          style="
            margin-left: 20px;
            margin-top: 50px;
            font-size: 25px;
            font-family: Roboto, serif;
            font-weight: bold;
          "
          >RATE YOUR JAB</v-app-bar-title
        >

        <v-spacer></v-spacer>

        <v-btn
          text
          to="/About"
          style="margin-left: 20px; margin-top: 50px; font-size: 20px"
        >
          Sign Up
        </v-btn>

        <v-btn
          text
          to="/Login"
          style="margin-left: 20px; margin-top: 50px; font-size: 20px"
        >
          Log In
        </v-btn>
      </v-app-bar>
      <img
        alt="background"
        style="width: fit-content"
        src="../assets/vacc-backdrop.jpeg"
      />
    </div>
    <div class="bg-card">
      <div class="bg-subcard"></div>
      <h1 class="bg-text">Review, Rate & Recommend Your Vaccine Experience</h1>
    </div>
  </v-app>
</template>

<style>
.bg-card {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  border-radius: 10px;
  position: absolute;
  top: 30%;
  left: 7%;
  /*transform: translate(-50%, -50%);*/
  /*z-index: 2;*/
  width: 418px;
  height: 460px;
  /*padding: 20px;*/
}

.bg-subcard {
  background-color: yellow;
  border-radius: 8px;
  height: 20px;
  width: 418px;
}

.bg-text {
  color: white;
  font-weight: bold;
  text-align: left;
  font-size: 60px;
  padding-left: 30px;
}
</style>
<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
