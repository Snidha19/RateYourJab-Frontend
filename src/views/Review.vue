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
            to="/"
            style="margin-left: 20px; margin-top: 50px; font-size: 20px"
            @click="submit"
        >
         LogOut
        </v-btn>

      </v-app-bar>
      <img
          alt="background"
          class="bg-image"
          src="../assets/vacc-backdrop.jpeg"
      />
    </div>
  </v-app>
</template>

<script>
import Vue from "vue";

export default {
  name: "Review",
  methods: {
    async submit(){
      if (this.$refs.form.validate){
        let formData = new FormData;
      //   formData.append("username", this.username);
      //   formData.append("password", this.password);

        await Vue.axios.post("/api/logout", formData);
        // if(response.data.success) {
        //   this.$router.push({path:"/review"});
        // }
      }
      console.log(this.username, this.password);
    }
  }
}
</script>

<style scoped>

</style>