<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-12">
        <h1>Dashboard</h1>
        <!-- <button class="btn btn-dark" @click="toggleCars">Cars</button> -->
        <router-link :to="{name: 'Cars'}">CARS</router-link>
        <router-link :to="{name: 'Houses'}"><button class="btn btn-dark">Houses</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Cars from "./Cars";
import Houses from "./Houses";
export default {
  name: "dashboard",
  mounted() {
    this.$store.dispatch("getAllHouses");
  },
  data() {
    return {
      showCars: false,
      showHouses: false
    };
  },
  methods: {
    toggleCars() {
      this.showCars = true;
      this.showHouses = false;
    },
    toggleHouses() {
      this.showCars = false;
      this.showHouses = true;
    }
  },
  components: {
    Cars,
    Houses
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
