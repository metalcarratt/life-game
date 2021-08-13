<template>
    <div class="action">
        <label>{{ action.name }}</label>
        <img :src="getImgUrl(action)" />
        {{ action.cost }} x <TimeCard />
    </div>
</template>

<script>
import TimeCard from '@/components/TimeCard.vue';


export default {
    props: ['action'],
    components: { TimeCard },
    methods: {
        getImgUrl(action) {
            return require('../assets/' + action.image);
        }
    }
}
</script>

<style scoped>
.action {
    display: inline-block;
    vertical-align: top;
    width: 100px;
    height: 140px;
    background-color: #c9c9ec;
    padding: 8px;
    border-radius: 8px;
    border-bottom: 4px solid #6c6ca6;
    border-right: 4px solid #6c6ca6;
    margin-right: 10px;
}

.action:hover {
    cursor: pointer;
    background-color: #9a9ab5;
    border: none;
}

.action label {
    font-size: 12px;
    font-weight: 700;
}

.action img {
    max-width: 100px;
    border-width: 1px;
}
</style>