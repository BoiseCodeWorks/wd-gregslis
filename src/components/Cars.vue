<template>
  <div class="cars">
    <div class="row">
      <div class="col-12">
        <h3>Cars</h3>
        <form>
          <input type="text" name="make" v-model="car.make" placeholder="make">
          <input type="text" name="model" v-model="car.model" placeholder="model">
          <input type="url" name="img" v-model="car.imgUrl" placeholder="IMG">
          <input type="number" name="year" v-model="car.year" placeholder="year">
          <input type="number" name="price" v-model="car.price" placeholder="price">
          <button type="button" @click="createCar">Create</button>
        </form>
      </div>
      <div class="col-4 outlines" v-for="(car, index) in cars">
        <img :src="car.imgUrl" alt="">
        <p>{{car.make}}</p>
        <p>{{car.model}}</p>
        <p>{{car.price}}</p>
        <button @click="bid(car)">BID</button>
        <button @click="deleteCar(car._id)">Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'cars',
    data() {
      return {
        car: {}
      }
    },
    computed: {
      cars() {
        return this.$store.state.cars
      }
    },
    methods: {
      createCar() {
        if (this.car.make && this.car.model) {
          this.$store.dispatch("addCar", this.car)
          this.car = {}
        } else {
          alert("You didnt fill it out!!!!!")
        }
      },
      bid(car) {
        car.price += 100
        this.$store.dispatch('editCar', car)
      },
      deleteCar(id) {
        this.$store.dispatch("removeCar", id)
      }
    },
    components: {}
  }

</script>


<style scoped>
  .outlines {
    outline: black solid 1px
  }

  .outlines img {
    width: 100%
  }

</style>
