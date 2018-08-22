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
            <div class="col-12">

            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'cars',
        data() {
            return {
                cars: [],
                car: {}
            }
        },
        computed: {},
        methods: {
            createCar() {
                this.cars.push(this.car)
                this.car = {}
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>