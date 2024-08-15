<template>
    <button :style="{ backgroundColor: bgColor, color: textColor }" class="font-bold py-3 px-5 rounded z-10">
        <router-link to="/">
            {{ text }}
        </router-link>
    </button>
</template>

<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    text: String,
    bgColor: String,
    textColor: String,
});
</script>

<style scoped>
button {
    transition: background-color 0.2s, color 0.2s;
}
button:hover {
    opacity: 0.85;
}
</style>