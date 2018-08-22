<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-12">
        <h1>Dashboard</h1>
        <button class="btn btn-dark" @click="toggleCars">Cars</button>
        <button class="btn btn-dark" @click="toggleHouses">Houses</button>
        <Cars v-show="showCars"></Cars>
        <Houses v-show="showHouses"></Houses>
      </div>
    </div>
  </div>
</template>

<script>
  import Cars from './Cars'
  import Houses from './Houses'
  export default {
    name: 'dashboard',
    data() {
      return {
        showCars: false,
        showHouses: true
      }
    },
    methods: {
      toggleCars() {
        this.showCars = true
        this.showHouses = false
      },
      toggleHouses() {
        this.showCars = false
        this.showHouses = true
      }
    },
    components: { Cars, Houses }
  }
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