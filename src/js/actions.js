import stats from './stats.js';
import skills from './skills.js';

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
    skill: {
        name: skills.WRIGGLING,
        exp: 1
    },
    allowed: () => !skills.hasLearned(skills.WRIGGLING)
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
    skill: {
        name: skills.ROLLING_OVER,
        exp: 1
    },
    allowed: () => skills.hasLearned(skills.WRIGGLING) && !skills.hasLearned(skills.ROLLING_OVER)
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
    skill: {
        name: skills.CRAWLING,
        exp: 1
    },
    allowed: () => skills.hasLearned(skills.ROLLING_OVER) && !skills.hasLearned(skills.CRAWLING)
}

const sitting = {
    name: "Sit",
    description: "You try to sit",
    image: "sitting.png",
    cost: 2,
    updates: {
        time: -2,
        strength: 10,
        coordination: 10
    },
    skill: {
        name: skills.SITTING,
        exp: 1
    },
    allowed: () => skills.hasLearned(skills.ROLLING_OVER) && !skills.hasLearned(skills.SITTING)
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
    actions: [wriggle, observe, rolling, crawling, smiling, sitting],

    performAction(action) {
        const updates = action.updates;
        stats.update(updates);
        
        if (action.skill) {
            skills.experience(action.skill.name, action.skill.exp);
        }
    }
}