<template>
    <div class="flex flex-col min-h-screen">
      <HeaderNav />
      <!-- Main content -->
      <div class="flex-grow">
        <slot />
      </div>
      <FooterNav />
    </div>
  </template>
  
  <script setup>
  import HeaderNav from '../components/Sections/HeaderNav.vue';
  import FooterNav from '../components/Sections/FooterNav.vue';
  </script>
  
  <style scoped>
  html, body, #app {
    height: 100%;
  }
  </style>
  