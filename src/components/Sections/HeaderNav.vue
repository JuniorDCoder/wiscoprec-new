<template>
    <div class="fixed top-0 w-full flex flex-row items-center bg-secondary p-1 justify-between shadow-lg z-10">
      <router-link to="/">
        <img src="../../assets/img/logo.png" class="h-16 md:pl-24" alt="">
      </router-link>
      <!-- Hamburger Menu for Mobile -->
      <div class="md:hidden flex items-center pr-4">
        <button @click="toggleMenu" class="focus:outline-none">
          <img src="../../assets/img/hamburger.png" class="h-8 w-8" alt="Menu">
        </button>
      </div>
      <div class="hidden md:flex flex-row space-x-7 items-center pr-24">
        <nav-link route-name="home">
          Home
        </nav-link>
        <nav-link route-name="about">
          About
        </nav-link>
        <nav-link route-name="contact">
          Contact
        </nav-link>
        <nav-link route-name="team">
          Team
        </nav-link>
        <nav-link route-name="gallery">
          Gallery
        </nav-link>
        <PrimaryButton text="Register Today" bgColor="#EF5148" textColor="white" />
      </div>
      <div :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" class="fixed md:hidden top-16 left-0 w-full bg-secondary flex-col space-y-4 p-4 sm:static sm:flex sm:flex-row sm:space-x-7 sm:items-center sm:pr-24">
        <nav-link route-name="home">
          Home
        </nav-link>
        <nav-link route-name="about">
          About
        </nav-link>
        <nav-link route-name="contact">
          Contact
        </nav-link>
        <nav-link route-name="team">
          Team
        </nav-link>
        <nav-link route-name="gallery">
          Gallery
        </nav-link>
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