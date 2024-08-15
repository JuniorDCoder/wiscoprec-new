<template>
  <BaseLayout>
    <div class="relative">
      <img src="../assets/img/AdobeStock_301564720 1.png" alt="" class="w-full h-[400px] md:h-auto">
      <div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent md:mt-[-300px] flex items-center justify-center">
        <div class="overflow-hidden md:w-full">
          <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(slide, index) in slides" :key="index" class="min-w-full flex-shrink-0 text-white text-center md:space-y-5 p-8">
              <h1 class="md:text-7xl text-3xl font-bold">{{ slide.title }}</h1>
              <p class="md:text-5xl text-xl">{{ slide.subtitle }}</p>
              <p class="mt-2 md:text-2xl md:block hidden">{{ slide.description }}</p>
              
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-24 md:pb-64">
        <button v-for="(slide, index) in slides" :key="index" @click="currentIndex = index" class="w-4 h-4 rounded-full" :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"></button>
        <div class="absolute flex flex-row gap-5 top-10">
          <PrimaryButton text="Register Today" bgColor="white" textColor="#EF5148" />
          <PrimaryButton text="Learn More" bgColor="" class="border-white border-2" textColor="white" />
        </div>
        
      </div>
      <div class="absolute w-full flex flex-col gap-6 py-12 px-6 md:px-24 top-[100p%] bg-primary">
        <div class="w-full flex flex-col md:flex-row gap-9 bg-primary">
          <OurFields 
            heading="Medicine / Nursing" 
            :listItems="['FHS', 'FMBS', 'FAHSSA', 'UDM']" 
          />
          <OurFields 
            heading="Engineering" 
            :listItems="['ENSPY', 'NAHPI', 'COLTECH', 'SUPPTIC', 'FET', 'COT']" 
            :imageFirst="true"
          />
        </div>
        <div class="w-full flex flex-col md:flex-row gap-9 bg-primary">
          <OurFields 
            heading="Agriculture" 
            :listItems="['COLTECH', 'Dschang', 'RCA Bambili', 'UDM']" 
            :imageFirst="true"
          />
          <OurFields 
            heading="Orientation" 
            paragraphText="WISCOPREC provides orientation for students preparing for all the above-mentioned examinations and schools in Cameroon, including ENSPY, NAHPI, COLTECH, SUPPTIC, FET, COT, FHS, FMBS, FAHSSA, and UDM etc..."
          />

        </div>
        
        
      </div> 
      
      
    </div>
    
  </BaseLayout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BaseLayout from '../layout/BaseLayout.vue';
import OurFields from '@/components/OurFields.vue';

import  PrimaryButton from '../components/PrimaryButton.vue';

const slides = ref([
  {
    title: 'Your Journey Starts Here.',
    subtitle: '"Your success is our Priority"',
    description: 'We provide top-notch educational support to help you achieve your academic and professional goals.'
  },
  {
    title: 'Empower Your Future.',
    subtitle: '"Education is the key to success"',
    description: 'Join our community and unlock your potential with our comprehensive learning resources.'
  },
  {
    title: 'Achieve Excellence.',
    subtitle: '"Strive for greatness"',
    description: 'Our dedicated team is here to support you every step of the way towards achieving your dreams.'
  }
]);

const currentIndex = ref(0);

// Function to advance to the next slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

// Interval ID for clearing on component unmount
let intervalId;

onMounted(() => {
  // Start automatic scrolling with a 3-second interval
  intervalId = setInterval(nextSlide, 4000);
});

onUnmounted(() => {
  // Clear the interval when the component is destroyed
  clearInterval(intervalId);
});
</script>

<style scoped>
/* Optional: Add any additional styles here */
</style>