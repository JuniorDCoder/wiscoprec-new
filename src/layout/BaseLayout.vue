<template>
    <div>
        <HeaderNav/>
        <slot />
        <FooterNav/>
    </div>
</template>
<script setup>
import HeaderNav from '../components/Sections/HeaderNav.vue';
import FooterNav from '../components/Sections/FooterNav.vue';
</script>
