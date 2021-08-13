<template>
    <div class="popup">
        <h1>{{ actionResult.description }}</h1>
        <p v-if="actionResult.updates.strength">+{{ actionResult.updates.strength }} strength</p>
        <p v-if="actionResult.updates.intelligence">+{{ actionResult.updates.intelligence }} intelligence</p>
        <p v-if="actionResult.updates.coordination">+{{ actionResult.updates.coordination }} coordination</p>
        <p v-if="actionResult.updates.social">+{{ actionResult.updates.social }} social</p>
    </div>
</template>

<script>
export default {
    props: ['actionResult']
}
</script>

<style scoped>
.popup {
    width: 400px;
    height: 180px;
    background-color: #fff55e;
    border: 3px solid #f42929;;
    border-radius: 20px;

    position: absolute;
    top: 200px;
    left: calc(50% - 200px);
}

h1 {
    color: #81d29d;
    margin-bottom: 5px;
}

p {
    font-size: 24px;
    color: #4c789f;
    margin: 5px;
}
</style>