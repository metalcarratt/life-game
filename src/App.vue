<template>
  <div id="app">
    <div class="panel left">
      <fieldset>
        {{ intelligence }} x <font-awesome-icon icon="brain" />
      </fieldset>
      <fieldset>
        {{ strength }} x <font-awesome-icon icon="dumbbell" />
      </fieldset>
    </div>

    <img src="./assets/baby.jpg" />

    <div class="panel right">
      <fieldset>
        <label>{{ time }} x </label>
        <TimeCard />
      </fieldset>
    </div>

    <div class="panel bottom">
      <Button name="Observe" :cost="2" @click.native="observe" />
      <Button name="Roll over" :cost="2" @click.native="rollOver" />
    </div>

  </div>
</template>

<script>
import TimeCard from '@/components/TimeCard.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'App',
  components: { TimeCard, Button },
  data() {
    return {
      time: 52,
      intelligence: 0,
      strength: 0
    }
  },
  methods: {
    observe() {
      this.time = this.time - 2;
      this.intelligence = this.intelligence + 1;
    },
    rollOver() {
      this.time = this.time - 2;
      this.strength = this.strength + 1;
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

.panel.left {
  background-color: #ffda4a;
  border: 1px solid #25256a;
  margin-right: 10px;
  margin-bottom: 10px;
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
