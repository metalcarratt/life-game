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

    <Popup v-if="showPopup" :actionResult="lastAction" />
  </div>
</template>

<script>
import TimeCard from '@/components/TimeCard.vue';
import Action from '@/components/Action.vue';
import Popup from '@/components/Popup.vue';
import Stats from '@/components/Stats.vue';

import actions from '@/js/actions.js';
import stats from '@/js/stats.js';

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
  },
  methods: {
    clickAction(action) {
      const updates = action.updates;
      stats.update(updates);
      this.lastAction = action;


      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 400);
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
}

img {
  max-width: 200px;
  max-height: 400px;
  border: 8px solid #8484ff;
}

.panel.right, .panel.left {
  height: 300px;
  width: 300px;
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
</style>
