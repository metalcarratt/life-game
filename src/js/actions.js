import stats from './stats.js';
// import observeImg from '@/assets/observe.png';

const observe = {
    name: "Observe",
    description: "You observe your surroundings",
    image: "observe.png",
    cost: 2,
    updates: {
        time: -2,
        intelligence: 5
        
    },
    allowed: () => true //stats.intelligence() < 10
}

const wriggle = {
    name: "Wriggle",
    description: "You practice moving your limbs",
    image: "wriggle.png",
    cost: 2,
    updates: {
        time: -2,
        strength: 5
    },
    allowed: () => stats.strength() < 20
}

const rolling = {
    name: "Roll over",
    description: "You try to roll over",
    image: "roll-over.png",
    cost: 2,
    updates: {
        time: -2,
        strength: 10,
        coordination: 5
    },
    allowed: () => stats.strength() >= 20 && stats.strength() < 60
}

const crawling = {
    name: "Crawl",
    description: "You try to crawl",
    image: "crawl.png",
    cost: 2,
    updates: {
        time: -2,
        strength: 10,
        coordination: 10
    },
    allowed: () => stats.strength() >= 60
}

const smiling = {
    name: "Smile",
    description: "You practice smiling at people",
    image: "smile.png",
    cost: 2,
    updates: {
        time: -2,
        social: 5
    },
    allowed: () => stats.intelligence() >= 10
}

export default {
    actions: [wriggle, observe, rolling, crawling, smiling]
}