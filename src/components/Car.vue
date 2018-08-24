<template>
  <div class="cars">
    <router-link :to="{name: 'Dashboard'}">HOME</router-link>
    <div class="row">
      <div v-if="car._id" class="col-4 outlines">
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
    props: ['id'],
    data() {
      return {}
    },
    computed: {
      car() {
        return this.$store.state.cars.find(car => car._id == this.id)
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
