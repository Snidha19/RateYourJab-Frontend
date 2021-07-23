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
    <div class="card-config">
      <v-card
        v-for="review in reviews"
        :key="review.username"
        class="r-card"
        color="#f0f8ff"
        elevation="2"
      >
        <v-card-text>
          <p class="text-h4 text--primary">
            {{ review.username }}
          </p>
          <v-spacer></v-spacer>
          <p style="font-size: 20px">{{ review.tag }}</p>
          <div>
            Gender: {{ review.gender }} <br />
            Age : {{ review.age }}
          </div>
          <br />
          <div>
            Fever: {{ review.question1 }} <br />
            Headache : {{ review.question2 }} <br />
            Difficulty in breathing: {{ review.question3 }} <br />
            Rashes: {{ review.question4 }} <br />
            Ache or pain on the spot of vaccine: {{ review.question5 }} <br />
            Tiredness: {{ review.question6 }} <br />
          </div>
          <br />
          <div class="text-h6 text--primary">
            {{ review.review }}
          </div>
        </v-card-text>
        <!--        <v-card-actions>-->
        <!--          <v-btn icon color="error" @click="remove"><v-icon>mdi-delete</v-icon> </v-btn>-->
        <!--        </v-card-actions>-->
      </v-card>
    </div>

    <div class="side-card">
      <v-card class="mx-auto" max-width="344" color="#f0f8ff" elevation="2">
        <v-card-title style="margin-left: 25%; font-size: 30px">
          Vaccines
        </v-card-title>
        <v-card-actions>
          <v-btn color="blue" text @click="filter('Sinovac')" v-model="tag">
            Sinovac</v-btn
          ><br />
        </v-card-actions>
        <v-card-actions>
          <v-btn color="blue" text @click="filter('AstraZeneca')" v-model="tag"
            >AstraZeneca</v-btn
          ><br />
        </v-card-actions>
        <v-card-actions>
          <v-btn color="blue" text @click="filter('Pfizer')" v-model="tag"
            >Pfizer</v-btn
          ><br />
        </v-card-actions>
        <v-card-actions>
          <v-btn color="blue" text @click="filter('Moderna')" v-model="tag"
            >Moderna</v-btn
          ><br />
        </v-card-actions>
        <v-card-text> </v-card-text>
      </v-card>
    </div>
    <v-btn
      color="blue"
      dark
      absolute
      top
      right
      fab
      x-large
      style="position: absolute; right: 50px; top: 150px"
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
  data: () => ({
    reviews: [],
    tag: "",
  }),
  methods: {
    async logout() {
      let response = await Vue.axios.get("/api/logout");
      await store.dispatch("clearUser");
      if (response.data.success) {
        this.$router.push({ path: "/" });
      }
    },
    async filter(tag) {
      let formData = new FormData();
      formData.append("tag", tag);

      let response = await Vue.axios.post("/api/searchbytag", formData);
      this.reviews = response.data.reviews;
    },
  },
  async mounted() {
    let response = await Vue.axios.get("/api/review");
    this.reviews = response.data.reviews;
    console.log(this.reviews);
  },
};
</script>

<style>
.image {
  width: 100%;
  height: 100%;
}

.card-config {
  color: white;
  position: absolute;
  top: 10%;
  left: 5%;
  width: 50%;
  height: auto;
  padding: 20px;
}

.side-card {
  color: darkseagreen;
  position: absolute;
  top: 20%;
  left: 45%;
  width: 80%;
  height: auto;
  padding: 20px;
}

.r-card {
  margin-top: 20px;
}
</style>
