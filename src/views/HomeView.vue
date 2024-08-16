<template>
  <BaseLayout>
    <div class="relative">
      <!-- Hero section -->
      <div class="relative">
        <img src="../assets/img/AdobeStock_301564720 1.png" alt="" class="w-full h-[450px] md:h-auto">
        <div class="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-primary to-transparent">
          <div class="w-[94%] overflow-hidden md:w-full">
            <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <div v-for="(slide, index) in slides" :key="index" class="flex-shrink-0 min-w-full p-8 text-center text-white md:space-y-5">
                <h1 class="text-2xl font-bold md:text-7xl">{{ slide.title }}</h1>
                <p class="text-xl md:text-5xl">{{ slide.subtitle }}</p>
                <p class="hidden mt-2 md:text-2xl md:block">{{ slide.description }}</p>
              </div>
            </div>
          </div>
          <!-- Buttons inside hero section, now below the text -->
          <div class="relative z-10 flex flex-row justify-center w-full gap-5 mt-6 md:mt-12">
            <PrimaryButton text="Register Today" bgColor="white" textColor="#EF5148" />
            <PrimaryButton text="Learn More" bgColor="" class="border-2 border-white" textColor="white" />
          </div>
          
          <!-- Slider navigation dots -->
          <div class="absolute flex justify-center w-full mt-4 bottom-4 md:bottom-12">
            <div v-for="(slide, index) in slides" :key="index" class="w-3 h-3 mx-2 bg-white rounded-full cursor-pointer" :class="{ 'bg-primary': currentIndex === index }" @click="setSlide(index)"></div>
          </div>
        </div>
      </div>

      <!-- Content sections -->
      <div class="flex flex-col gap-6 px-6 py-12 bg-primary md:px-24">
        <!-- Adjusted content -->
        <div class="flex flex-col md:flex-row gap-9">
          <OurFields heading="Medicine / Nursing" :listItems="['FHS', 'FMBS', 'FAHSSA', 'UDM']" />
          <OurFields heading="Engineering" :listItems="['ENSPY', 'NAHPI', 'COLTECH', 'SUPPTIC', 'FET', 'COT']" :imageFirst="true" />
        </div>
        <div class="flex flex-col md:flex-row gap-9">
          <OurFields heading="Agriculture" :listItems="['COLTECH', 'Dschang', 'RCA Bambili', 'UDM']" :imageFirst="true" />
          <OurFields heading="Orientation" paragraphText="WISCOPREC provides orientation for students preparing for all the above-mentioned examinations and schools in Cameroon..." />
        </div>
      </div>

      <!-- Centers section -->
      <div class="py-12">
        <h1 class="text-3xl font-bold text-center text-gray-500">Our Centers</h1>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div class="flex flex-col justify-center">
              <div class="max-w-xl mb-6">
                <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  The quick, brown fox<br class="hidden md:block" />
                  jumps over
                  <span class="relative px-1">
                    <div class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div>
                    <span class="relative inline-block text-deep-purple-accent-400">a lazy dog</span>
                  </span>
                </h2>
                <p class="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                </p>
              </div>
              <div class="grid gap-5 row-gap-8 sm:grid-cols-2">
                <div class="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                  <div class="h-full p-5 border border-l-0 rounded-r">
                    <h6 class="mb-2 font-semibold leading-5">
                      I'll be sure to note that in my log
                    </h6>
                    <p class="text-sm text-gray-900">
                      Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down.
                    </p>
                  </div>
                </div>
                <div class="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                  <div class="h-full p-5 border border-l-0 rounded-r">
                    <h6 class="mb-2 font-semibold leading-5">
                      A business big enough that it could be listed
                    </h6>
                    <p class="text-sm text-gray-900">
                      Those options are already baked in with this model shoot me an email clear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img class="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BaseLayout from '../layout/BaseLayout.vue';
import OurFields from '@/components/OurFields.vue';
import PrimaryButton from '../components/PrimaryButton.vue';

const slides = ref([
  { title: 'Your Journey Starts Here.', subtitle: '"Your success is our Priority"', description: 'We provide top-notch educational support to help you achieve your academic and professional goals.' },
  { title: 'Empower Your Future.', subtitle: '"Education is the key to success"', description: 'Join our community and unlock your potential with our comprehensive learning resources.' },
  { title: 'Achieve Excellence.', subtitle: '"Strive for greatness"', description: 'Our dedicated team is here to support you every step of the way towards achieving your dreams.' }
]);

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const setSlide = (index) => {
  currentIndex.value = index;
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(nextSlide, 4000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

