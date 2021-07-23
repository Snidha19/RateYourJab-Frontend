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
      </v-app-bar>
      <img
          alt="background"
         class="bg-image"
          src="../assets/vacc-backdrop.jpeg"
      />
    </div>
    <div class="card">
<!--     <h1 class="card-title"> Login </h1>-->
      <v-form class="card-actions" ref="form" v-model="valid">
      <v-text-field
          label="Email or Username"
          solo
          v-model="username"
          :rules="nameRules"
          height="70px"
          class="card-text"
          required
      ></v-text-field>
      <v-text-field
          label="Password"
          type="password"
          solo
          v-model="password"
          :rules="passwordRules"
          height="70px"
          class="card-text"
          required
      ></v-text-field>
        <div v-if="error" class="alert alert-success" role="alert">{{error}}</div>
        <v-btn class="card-btn" color="white" height="50px" @click="submit" rounded to="/review">
          Submit
        </v-btn>
      </v-form>
    </div>
    <div style="margin-top: -340px; margin-left: 750px">
      <p style="color:black; font-size:15px; margin-left:70px">Don't have an account?</p>
      <v-btn color="red" style="margin-left:50px" rounded outlined width="200" to="/register">Register here</v-btn>
    </div>
<!--    <h2 style="margin-top: -320px; margin-left: 680px"> Don't have an account? <span class="red&#45;&#45;text" style="cursor:pointer">Sign Up here </span></h2>-->
  </v-app>
</template>

<style>
.bg-image{
  width: 100%;
  height: 100%;
}

.card {
  background-color: rgba(		28, 89, 122, 0.5); /* Black w/opacity/see-through */
  color: white;
  border: 1px solid #f1f1f1;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 600px;
  height:400px;
  padding: 20px;
  justify-content: center;
}

.card-title{
  font-size: 40px;
  color: black;
  margin-left: 220px;
  margin-bottom: 20px;
}

.card-actions{
  margin-top: 50px;
  justify-content: center;
  margin-left: 50px;
}

.card-text {
  width:90%;
  border-radius: 5px;
}

.card-btn{
  margin-left: 100px;
  margin-top:10px;
  width:50%;
  font-size: 40px;
}
</style>
<script>
import Vue from "vue";

export default {
  name: "Login",
  components: {},
  data : ()=> ({
    valid:true,
    username:"",
    nameRules :[
      (v) => !!v || "Username is required"
    ],
    password:"",
    passwordRules :[
      (v) => !!v || "Password is required"
    ],
    error: "",
  }),
  methods: {
    async submit(){
      if (this.$refs.form.validate){
        let formData = new FormData;
        formData.append("username", this.username);
        formData.append("password", this.password);

        let response = await Vue.axios.post("/api/login", formData);
        if(response.data.success) {
          this.$router.push({path:"/review"});
      }
        else {
          this.error = "Invalid username or password";
        }
      }
      console.log(this.username, this.password);
    }
  }
};
</script>
