import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    age: {
        years: 0,
        weeks: 0
    },
    time: 52,
    intelligence: 0,
    strength: 0,
    coordination: 0,
    social: 0
  }
})

export default {
    age: () => `${store.state.age.years}y ${parseInt(store.state.age.weeks * 0.23)}m`, 
    time: () => store.state.time,
    intelligence: () => store.state.intelligence,
    strength: () => store.state.strength,
    coordination: () => store.state.coordination,
    social: () => store.state.social,
    update(updates) {
        if (updates.time) {
            store.state.time = store.state.time + updates.time;
            store.state.age.weeks = store.state.age.weeks + (updates.time * -1);
            if (store.state.age.weeks >= 52) {
                store.state.age.weeks = store.state.age.weeks - 51;
                store.state.age.years = store.state.age.years + 1;
            }
        }
        if (updates.intelligence) {
            store.state.intelligence = store.state.intelligence + updates.intelligence;
        }
        if (updates.strength) {
            store.state.strength = store.state.strength + updates.strength;
        }
        if (updates.coordination) {
            store.state.coordination = store.state.coordination + updates.coordination;
        }
        if (updates.social) {
            store.state.social = store.state.social + updates.social;
        }
    }
}