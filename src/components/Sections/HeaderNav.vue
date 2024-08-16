<template>
  <div class="fixed top-0 z-20 flex flex-row items-center justify-between w-full p-1 shadow-lg bg-secondary">
    <router-link to="/">
      <img src="../../assets/img/logo.png" class="h-16 md:pl-24" alt="">
    </router-link>
    <!-- Hamburger Menu for Mobile -->
    <div class="flex items-center pr-4 md:hidden">
      <button @click="toggleMenu" class="focus:outline-none">
        <img src="../../assets/img/hamburger.png" class="w-8 h-8" alt="Menu">
      </button>
    </div>
    <div class="flex-row items-center hidden pr-24 md:flex space-x-7">
      <nav-link route-name="home">Home</nav-link>
      <nav-link route-name="about">About</nav-link>
      <nav-link route-name="contact">Contact</nav-link>
      <nav-link route-name="team">Team</nav-link>
      <nav-link route-name="gallery">Gallery</nav-link>
      <PrimaryButton text="Register Today" bgColor="#EF5148" textColor="white" />
    </div>
    <div :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" class="fixed left-0 z-20 flex-col w-full p-4 space-y-4 md:hidden top-16 bg-secondary sm:static sm:flex sm:flex-row sm:space-x-7 sm:items-center sm:pr-24">
      <nav-link route-name="home">Home</nav-link>
      <nav-link route-name="about">About</nav-link>
      <nav-link route-name="contact">Contact</nav-link>
      <nav-link route-name="team">Team</nav-link>
      <nav-link route-name="gallery">Gallery</nav-link>
      <PrimaryButton text="Register Today" bgColor="#EF5148" textColor="white" />
    </div>
  </div>
</template>

  
<script setup>
import { ref } from 'vue';
import NavLink from '../NavLink.vue';
import PrimaryButton from '../PrimaryButton.vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Optional: Add any additional styles here */
</style>