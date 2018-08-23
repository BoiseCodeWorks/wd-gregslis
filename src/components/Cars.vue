<template>
    <div class="cars">
        <div class="row">
            <div class="col-12">
                <h3>Cars</h3>
                <form>
                    <input type="text" name="make" v-model="car.make">
                    <input type="text" name="model" v-model="car.model">
                    <button type="button" @click="createCar">Create</button>
                </form>
            </div>
            <div class="col-4 outlines" v-for="(car, index) in cars">
                <p>{{car.make}}</p>
                <p>{{car.model}}</p>
                <button @click="deleteCar(index)">Delete</button>
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
            deleteCar(index) {
                this.$store.dispatch("removeCar", index)
            }
        },
        components: {}
    }
</script>


<style scoped>
    .outlines {
        outline: black solid 1px
    }
</style>