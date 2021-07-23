<template>
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
          to="/register"
          style="margin-left: 20px; margin-top: 50px; font-size: 20px"
        >
          Sign Up
        </v-btn>

        <v-btn
          text
          to="/login"
          style="margin-left: 20px; margin-top: 50px; font-size: 20px"
        >
          Log In
        </v-btn>
      </v-app-bar>
      <img
        alt="background"
        style="width: 100%; height: 100%"
        src="../assets/vacc-backdrop.jpeg"
      />
    </div>
    <div class="bg-card">
      <div class="bg-subcard"></div>
      <h1 class="bg-text">Review,</h1>
      <h1 class="bg-text">Rate &</h1>
      <h1 class="bg-text">Recommend</h1>
      <h1 class="bg-text">Your Vaccine Experience</h1>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.bg-card {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  border-radius: 10px;
  position: absolute;
  top: 30%;
  left: 7%;
  width: 418px;
  height: 460px;
  border: 1px #000000;
}

.bg-subcard {
  background-color: yellow;
  border-radius: 7px;
  height: 20px;
  width: 418px;
}

.bg-text {
  color: white;
  font-weight: bold;
  text-align: left;
  font-size: 50px;
  padding-left: 60px;
}
</style>
