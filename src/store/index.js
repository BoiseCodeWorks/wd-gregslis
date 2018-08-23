import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

let store = new vuex.Store({
    state: {
        cars: []
    },
    mutations: {
        setCar(state, newCar) {
            state.cars.push(newCar)
        },
        removeCar(state, index) {
            state.cars.splice(index, 1)
        }
    },
    actions: {
        addCar({ commit, dispatch }, newCar) {
            commit("setCar", newCar)
        },
        removeCar({ dispatch, commit }, index) {
            commit("removeCar", index)
        }
    }
})

export default store