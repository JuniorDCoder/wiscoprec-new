<template>
    <router-link
      class="text-gray-500"
      :class="isActive ? 'text-primary font-bold' : ''"
      :to="{ name: routeName }"
    >
      <slot />
    </router-link>
  </template>
  
  <script setup>
  import { RouterLink, useRoute } from 'vue-router';
  import { defineProps, computed } from 'vue';
  
  // Define props
  const props = defineProps({
    routeName: String,
  });
  
  const route = useRoute();
  
  // Compute if the link is active
  const isActive = computed(() => route.name === props.routeName);
  </script>
  