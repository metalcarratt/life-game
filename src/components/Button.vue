<template>
    <div class="button">
        {{ name }}<br/>
        {{ cost }} x <TimeCard />
    </div>
</template>

<script>
import TimeCard from '@/components/TimeCard.vue';

export default {
    props: ['name', 'cost'],
    components: { TimeCard }
}
</script>

<style scoped>
.button {
    display: inline-block;
    width: 100px;
    background-color: #c9c9ec;
    padding: 16px;
    border-radius: 8px;
    border-bottom: 4px solid #6c6ca6;
    border-right: 4px solid #6c6ca6;
    margin-right: 10px;
}

.button:hover {
    cursor: pointer;
    background-color: #9a9ab5;
    border: none;
}
</style>