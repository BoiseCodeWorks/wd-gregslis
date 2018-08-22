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
                cars: [{ title: "something" }],
                car: {}
            }
        },
        computed: {},
        methods: {
            createCar() {
                this.cars.push(this.car)
                this.car = {}
            },
            deleteCar(index) {
                this.cars.splice(index, 1)
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