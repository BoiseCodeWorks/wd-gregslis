import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase/app'
import db from '../utils/firebaseInit'

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
                .catch(err => {
                    console.error(err.response.data.message)
                })
        },
        addCar({ commit, dispatch }, newCar) {
            api.post('cars', newCar)
                .then(res => {
                    dispatch('getAllCars')
                })
                .catch(err => {
                    console.error(err.response.data.message)
                })
        },
        editCar({ commit, dispatch }, car) {
            api.put('cars/' + car._id, car)
                .then(res => {
                    dispatch('getAllCars')
                })
                .catch(err => {
                    console.error(err.response.data.message)
                })
        },
        removeCar({ dispatch, commit }, id) {
            api.delete('cars/' + id)
                .then(res => {
                    dispatch('getAllCars')
                })
                .catch(err => {
                    console.error(err.response.data.message)
                })
        },
        getAllHouses({ commit, dispatch }) {
            db.collection('houses').get().then(querySnapShot => {
                let houses = []
                querySnapShot.forEach(doc => {
                    let house = doc.data()
                    house.id = doc.id
                    houses.push(house)
                })
                commit("setHouses", houses)
            })
        },
        addHouse({ commit, dispatch }, house) {
            db.collection('houses').add(house).then(doc => {
                console.log("Document written with ID: ", doc.id)
                dispatch("getAllHouses")
            })
        },
        deleteHouse({ dispatch, commit }, id) {
            db.collection('houses').doc(id).delete().then(() => {
                dispatch('getAllHouses')
            })
        },
        editHouse({ commit, dispatch }, house) {
            api.put('houses/' + house._id, house)
                .then(res => {
                    dispatch('getAllHouses')
                })
                .catch(err => {
                    console.error(err.response.data.message)
                })
        },
    }
})

export default store
