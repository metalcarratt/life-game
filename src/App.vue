<template>
    <div id="app">
        <Stats class="panel left" />

        <img src="./assets/baby.jpg" />

        <div class="panel right">
            <fieldset>
                <label>Age: {{ age }}</label>
            </fieldset>
            <fieldset>
                <label>{{ time }} x </label>
                <TimeCard />
            </fieldset>
            <fieldset>
                <p>Skills:</p>
                <div class="skill" v-for="(skill, skillIndex) in skills" :key="skillIndex">
                    <label>{{ skill }}</label>
                    <img :src="getImgUrl(skill)" />
                </div>
            </fieldset>
        </div>

        <div class="panel bottom">
            <Action
                :action="action"
                @click.native="clickAction(action)"
                v-for="(action, actionIndex) in actions"
                :key="actionIndex"
            />
            <!-- <Button name="Wriggle" :cost="2" @click.native="wriggle" /> -->
        </div>

        <Popup v-if="showPopup" :actionResult="lastAction" @close="showPopup = false" />
    </div>
</template>

<script>
import TimeCard from '@/components/TimeCard.vue';
import Action from '@/components/Action.vue';
import Popup from '@/components/Popup.vue';
import Stats from '@/components/Stats.vue';

import actions from '@/js/actions.js';
import stats from '@/js/stats.js';
import skillsJs from '@/js/skills.js';

export default {
    name: 'App',
    components: { TimeCard, Action, Popup, Stats },
    data() {
        return {
            showPopup: false,
            lastAction: {
                name: ""
            }
        }
    },
    computed: {
        age: () => stats.age(),
        time: () => stats.time(),
        actions: () => actions.actions.filter(action => action.allowed()),
        skills: () => skillsJs.learned()
    },
    methods: {
        clickAction(action) {
            actions.performAction(action);
            this.lastAction = action;

            this.showPopup = true;
            setTimeout(() => {
                this.showPopup = false;
            }, 400);
        },
    
        getImgUrl(skillName) {
            const skillDetail = skillsJs.skillDetails(skillName);
            const image = skillDetail.image;
            return require('./assets/' + image);
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 850px;
    margin: 0 auto;
}

img {
    max-width: 200px;
    max-height: 400px;
    border: 8px solid #8484ff;
}

.panel.right, .panel.left {
    height: 300px;
    width: 280px;
    display: inline-block;
    vertical-align: top;
}

.panel.bottom {
    display: block;
    text-align: left;
}

fieldset {
    border: none;
    text-align: left;
}

.skill {
    border: 1px solid black;
    width: 70px;
    padding: 4px;
    margin: 2px;
    display: inline-block;
    border-radius: 4px;
}

.skill label {
    margin: 0;
    text-align: center;
    display: block;
    font-size: 12px;
}

.skill img {
    width: 50px;
    border-width: 1px;
    margin: 0 auto;
    display: block;
}
</style>
