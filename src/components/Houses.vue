<template>
    <div class="houses">
        <router-link :to="{name: 'Dashboard'}">HOME
        </router-link>

        <h3>Houses</h3>
        <form v-on:submit.prevent="createHouse">
            <input type="number" name="bedrooms" v-model="house.bedrooms" placeholder="bedrooms">
            <input type="number" name="bathrooms" v-model="house.bathrooms" placeholder="bathrooms">
            <input type="url" name="img" v-model="house.imgUrl" placeholder="IMG">
            <input type="number" name="levels" v-model="house.levels" placeholder="levels">
            <input type="number" name="year" v-model="house.year" placeholder="year">
            <input type="number" name="price" v-model="house.price" placeholder="price">
            <input type="text" name="description" v-model="house.description" placeholder="description">
            <button type="submit">Create</button>
        </form>
        <div class="row">
            <div class="col-4 outline" v-for="(house, index) in houses" :key="index">
                <p>House {{index+1}}</p>
                <img :src="house.imgUrl" alt="" width="150">
                <p>Bathrooms: {{house.bathrooms}}</p>
                <p>Bedrooms: {{house.bedrooms}}</p>
                <p>Year: {{house.year}}</p>
                <p>Price: {{house.price}}</p>
                <button class="btn btn-danger btn-sm" type="button" @click="deleteHouse(house._id)">Delete</button>
                <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#editModal" @click="editHouse = house">
                    Edit
                </button>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit House</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <input type="number" name="bedrooms" v-model="editHouse.bedrooms" placeholder="bedrooms">
                            <input type="number" name="bathrooms" v-model="editHouse.bathrooms" placeholder="bathrooms">
                            <input type="url" name="img" v-model="editHouse.imgUrl" placeholder="IMG">
                            <input type="number" name="levels" v-model="editHouse.levels" placeholder="levels">
                            <input type="number" name="year" v-model="editHouse.year" placeholder="year">
                            <input type="number" name="price" v-model="editHouse.price" placeholder="price">
                            <input type="text" name="description" v-model="editHouse.description" placeholder="description">
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateHouse">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "houses",
        data() {
            return {
                house: {},
                editHouse: {}
            };
        },
        mounted() {
            this.$store.dispatch("getAllHouses")
        },
        computed: {
            houses() {
                return this.$store.state.houses
            }
        },
        methods: {
            createHouse() {
                this.$store.dispatch("addHouse", this.house)
            },
            deleteHouse(id) {
                this.$store.dispatch("deleteHouse", id)
            },
            updateHouse() {
                this.$store.dispatch("editHouse", this.editHouse)
            }
        },
        components: {}
    };
</script>


<style scoped>
    .outline {
        outline: black solid 1px;
    }
</style>