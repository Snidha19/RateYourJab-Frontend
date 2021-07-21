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
      </v-app-bar>
      <img
        alt="background"
        class="bg-image"
        src="../assets/vacc-backdrop.jpeg"
      />
    </div>
    <div class="center-card">
      <v-form class="center-card-actions" ref="form" v-model="valid">
        <v-text-field
          label="Fullname"
          solo
          v-model="fullName"
          :rules="rules"
          height="70px"
          class="center-card-text"
          required
        ></v-text-field>
        <v-text-field
          label="Age"
          solo
          type="integer"
          v-model="age"
          :rules="rules"
          height="70px"
          class="center-card-text"
          required
        ></v-text-field>
        <v-text-field
          label="Gender"
          solo
          v-model="gender"
          :rules="rules"
          height="70px"
          class="center-card-text"
          required
        ></v-text-field>
        <v-text-field
          label="Username"
          solo
          v-model="username"
          :rules="rules"
          required
          height="70px"
          class="center-card-text"
        ></v-text-field>
        <v-text-field
          label="Password"
          solo
          v-model="password"
          :rules="rules"
          type="password"
          height="70px"
          class="center-card-text"
          required
        ></v-text-field>
        <v-text-field
          label="Confirm Password"
          solo
          v-model="password"
          :rules="rules"
          type="password"
          height="70px"
          class="center-card-text"
          required
        ></v-text-field>
        <v-btn
          class="center-card-btn"
          color="white"
          height="50px"
          rounded
          to="/login"
          @click="submit"
        >
          Sign Up
        </v-btn>
      </v-form>
    </div>
  </v-app>
</template>

<style>
.bg-image {
  width: 100%;
  height: 100%;
}
.center-card {
  background-color: rgba(28, 89, 122, 0.4); /* Black w/opacity/see-through */
  color: white;
  border: 1px solid #f1f1f1;
  border-radius: 30px;
  position: absolute;
  top: 14%;
  left: 35%;
  width: 600px;
  height: 780px;
}

.center-card-actions {
  margin-top: 50px;
  justify-content: center;
  margin-left: 80px;
}

.center-card-text {
  width: 85%;
  border-radius: 5px;
}

.center-card-btn {
  margin-left: 100px;
  margin-top: 10px;
  width: 50%;
  font-size: 40px;
}
</style>

<script>
import Vue from "vue";

export default {
  name: "Register",
  data: () => ({
    valid:true,
    fullName: "",
    age: "",
    gender: "",
    username: "",
    password: "",
    rules: [(v) => !!v || "This field is required"],
  }),
  methods: {
    async submit() {
      if (this.$refs.form.validate) {
        let formData = new FormData();
        formData.append("username", this.username);
        formData.append("age", this.age);
        formData.append("gender", this.gender);
        formData.append("fullName", this.fullName);
        formData.append("password", this.password);

        let response = await Vue.axios.post("/api/register", formData);
        if (response.data.success) {
          this.$router.push({ path: "/login" });
        }
      }
      console.log(this.username, this.password,this.age,this.gender,this.fullName);
    },
  },
};
</script>
