import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/',
    timeout: 3000
})


vue.use(vuex)

let store = new vuex.Store({
    state: {
        cars: [],
        houses: []
    },
    mutations: {
        setCars(state, cars) {
            state.cars = cars
        },
        setHouses(state, houses) {
            state.houses = houses
        }
    },
    actions: {
        getAllCars({ commit, dispatch }) {
            api.get('cars')
                .then(res => {
                    commit('setCars', res.data.data)
                })
        },
        addCar({ commit, dispatch }, newCar) {
            api.post('cars', newCar)
                .then(res => {
                    dispatch('getAllCars')
                })
        },
        editCar({ commit, dispatch }, car) {
            api.put('cars/' + car._id, car)
                .then(res => {
                    dispatch('getAllCars')
                })
        },
        removeCar({ dispatch, commit }, id) {
            api.delete('cars/' + id)
                .then(res => {
                    dispatch('getAllCars')
                })
        },
        getAllHouses({ commit, dispatch }) {
            api.get('houses')
                .then(res => {
                    commit('setHouses', res.data.data)
                })
        }
    }
})

export default store
