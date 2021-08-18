<template>
    <div class="popup">
        <h1>{{ actionResult.description }}</h1>
        <p v-if="actionResult.updates.strength">+{{ actionResult.updates.strength }} strength</p>
        <p v-if="actionResult.updates.intelligence">+{{ actionResult.updates.intelligence }} intelligence</p>
        <p v-if="actionResult.updates.coordination">+{{ actionResult.updates.coordination }} coordination</p>
        <p v-if="actionResult.updates.social">+{{ actionResult.updates.social }} social</p>

        <button @click="$emit('close')">Okay</button>
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
    height: 200px;
    background-color: #fff55e;
    border: 3px solid #f42929;;
    border-radius: 20px;

    position: absolute;
    top: 200px;
    left: calc(50% - 200px);

    box-shadow: 0px 0px 10px black;
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

button {
    width: calc(100% - 20px);
    margin: 10px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid blue;
    background-color: #b7c1ea;
    font-size: 16px;
    color: #1c2a44;
}

button:hover {
    cursor: pointer;
    background-color: #7b83a4;
}
</style>