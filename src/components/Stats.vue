<template>
    <div class="stats">
        <fieldset>
            <label>Intelligence:</label>
            <span>{{ intelligence }} <font-awesome-icon icon="brain" /></span>
        </fieldset>
        <fieldset>
            <label>Strength:</label>
            <span>{{ strength }} <font-awesome-icon icon="dumbbell" /></span>
        </fieldset>
        <fieldset>
            <label>Coordination:</label>
            <span>{{ coordination }} <font-awesome-icon icon="hands" /></span>
        </fieldset>
        <fieldset>
            <label>Social:</label>
            <span>{{ social }} <font-awesome-icon icon="users" /></span>
        </fieldset>
    </div>
</template>

<script>
import stats from '@/js/stats.js';

export default {
    computed: {
        intelligence: () => stats.intelligence(),
        strength: () => stats.strength(),
        coordination: () => stats.coordination(),
        social: () => stats.social()
    }
}
</script>

<style scoped>
.stats {
  background-color: #fff3c3;
  border: 1px solid #25256a;
  margin-right: 10px;
  margin-bottom: 10px;
}

label {
    display: inline-block;
    width: 120px;
}

span {
    color: #263aa8;;
}

</style>