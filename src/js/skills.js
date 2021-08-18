import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const WRIGGLING =       "Wriggling";
const ROLLING_OVER =    "Rolling Over";
const CRAWLING =        "Crawling";
const SITTING =         "Sitting";

const ALL_SKILLs = {
    [ROLLING_OVER]: {
        expNeeded: 3,
        image: "roll-over.png"
    },
    [WRIGGLING]: {
        expNeeded: 2,
        image: "wriggle.png"
    },
    [CRAWLING]: {
        expNeeded: 4,
        image: "crawl.png"
    },
    [SITTING]: {
        expNeeded: 4,
        image: "sitting.png"
    }
}

const store = new Vuex.Store({
  state: {
    skills: {
        [ROLLING_OVER]: 0,
        [WRIGGLING]: 0,
        [CRAWLING]: 0,
        [SITTING]: 0
    },
    learned: []
  }
})

export default {
    WRIGGLING, ROLLING_OVER, CRAWLING, SITTING,

    skillDetails(skillName) {
        return ALL_SKILLs[skillName];
    },

    learned: () => store.state.learned,

    hasLearned: (skill) => store.state.learned.includes(skill),

    experience(skill, exp) {
        console.log(`+${exp}exp for ${skill}`);
        store.state.skills[skill] = store.state.skills[skill] + exp;

        const expNeeded = ALL_SKILLs[skill].expNeeded;

        console.log(`Total exp: ${store.state.skills[skill]}, needed: ${expNeeded}`);
        if (store.state.skills[skill] >= expNeeded) {
            console.log(`skill ${skill} added`);
            store.state.learned.push(skill);
        }
    }
}