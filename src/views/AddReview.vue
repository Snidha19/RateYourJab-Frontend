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
        class="image"
        style="opacity: 0.5"
        src="../assets/vac 2.jpeg"
      />
    </div>
    <div class="q-card">
      <v-card class="ans-card">
        <v-card-title>Do you have fever</v-card-title>
        <v-card-actions>
          <v-select :items="ans" v-model="question1" label="select" dense solo>
          </v-select>
        </v-card-actions>
      </v-card>
      <v-card class="ans-card">
        <v-card-title>Do you have headache?</v-card-title>
        <v-card-actions>
          <v-select :items="ans" v-model="question2" label="select" dense solo>
          </v-select>
        </v-card-actions>
      </v-card>
      <v-card class="ans-card">
        <v-card-title>Do you have difficulty in breathing?</v-card-title>
        <v-card-actions>
          <v-select :items="ans" v-model="question3" label="select" dense solo>
          </v-select>
        </v-card-actions>
      </v-card>
      <v-card class="ans-card">
        <v-card-title>Do you have rashes on your body?</v-card-title>
        <v-card-actions>
          <v-select :items="ans" v-model="question4" label="answer" dense solo>
          </v-select>
        </v-card-actions>
      </v-card>
      <v-card class="ans-card">
        <v-card-title
          >Do you have ache or pain on the spot of vaccine?</v-card-title
        >
        <v-card-actions>
          <v-select :items="ans" v-model="question5" label="answer" dense solo>
          </v-select>
        </v-card-actions>
      </v-card>
      <v-card class="ans-card">
        <v-card-title>Do you feel tired?</v-card-title>
        <v-card-actions>
          <v-select :items="ans" v-model="question6" label="answer" dense solo>
          </v-select>
        </v-card-actions>
      </v-card>
      <v-card class="ans-card">
        <v-card-title>Select the vaccine you received</v-card-title>
        <v-card-actions>
          <v-select :items="vac" v-model="tag" label="answer" dense solo>
          </v-select>
        </v-card-actions>
      </v-card>
      <v-card class="ans-card-review">
        <v-card-title>Write your review</v-card-title>
        <v-card-actions>
          <v-textarea outlined v-model="review"> </v-textarea>
        </v-card-actions>
      </v-card>
      <v-btn class="btn" @click="add"> Add review </v-btn>
    </div>
  </v-app>
</template>

<script>
import Vue from "vue";
import store from "@/store";

export default {
  name: "AddReview",
  data: () => ({
    question1: " ",
    question2: " ",
    question3: " ",
    question4: " ",
    question5: " ",
    question6: " ",
    tag: " ",
    review: " ",
    ans: ["Yes", "No"],
    vac: ["AstraZeneca", "Sinovac", "Pfizer", "Moderna"],
  }),
  methods: {
    async add() {
      let formData = new FormData();
      formData.append("username", store.state.username);
      formData.append("question1", this.question1);
      formData.append("question2", this.question2);
      formData.append("question3", this.question2);
      formData.append("question4", this.question2);
      formData.append("question5", this.question2);
      formData.append("question6", this.question2);
      formData.append("tag", this.tag);
      formData.append("review", this.review);

      let response = await Vue.axios.post("/api/addreview", formData);
      if (response.data.success) {
        this.$router.push({ path: "/review" });
      }
    },
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  height: 100%;
}

.q-card {
  color: white;
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: auto;
  padding: 20px;
}

.ans-card {
  height: 120px;
  margin-top: 20px;
}

.ans-card-review {
  height: auto;
  margin-top: 20px;
}

.btn {
  margin-top: 20px;
}
</style>
