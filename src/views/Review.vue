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
        >RATE YOUR JAB</v-app-bar-title>
        <v-spacer></v-spacer>

        <v-btn
            text
            style="margin-left: 20px; margin-top: 50px; font-size: 20px"
            @click="logout"
        >
         LogOut
        </v-btn>

      </v-app-bar>
      <img
          alt="background"
          class="image"
          style="opacity: 0.5"
          src="../assets/vac 2.jpeg"
      />
    </div>
    <v-btn
        color="blue"
        dark
        absolute
        top
        right
        fab
        style="position: absolute; right: 50px; top: 120px"
        to="/addreview"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Vue from "vue";
import store from "@/store";

export default {
  name: "Review",
  methods: {
    async logout(){
        let response = await Vue.axios.post("/api/logout");
        await store.dispatch("clearUser");
      if(response.data.success) {
        this.$router.push({path:"/"});
      }
      }
  }
}
</script>

<style>
.image {
  width: 100%;
  height: 100%;
}


</style>