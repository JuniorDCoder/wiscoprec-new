<template>
  <BaseLayout>
      <div class="flex flex-col h-full gap-5 mx-4 my-24 md:flex-row md:mx-28 md:my-44">
          <div class="flex flex-col w-full gap-12 md:w-1/2">
              <h1 class="md:text-4xl text-3xl w-3/4 md:w-1/2 font-semibold text-gray-500 border-b-4 border-[#48CDDE]">We are Wisdom
                Cooperation</h1>
              <p class="w-full text-lg text-gray-500 md:w-5/6">Wisdom Cooperation was
                 founded with a clear mission: to empower students like you to 
                 achieve academic excellence and unlock your full potential. We believe that every 
                 student deserves access to high-quality educational support and personalized guidance. 
                 Since our inception, we've built a reputation for excellence in providing intensive GCE preparation
                  courses and career counseling services. Our team of passionate educators and experienced professionals 
                  is dedicated to helping you navigate the challenges of standardized exams and chart a successful path 
                  towards your future goals. At Wisdom Cooperation, we foster a supportive learning environment that fosters 
                  confidence, critical thinking, and a love for learning. We are committed to your success, 
                  and our student-centered approach ensures you receive the tools and guidance you need to excel in your academic 
                  endeavors and beyond.
              </p>
          </div>
          <img src="../assets/img/AdobeStock_301564720 1.png" class="w-full md:w-1/2 md:h-3/4" alt="">
      </div>
      <Testimonials />
  </BaseLayout>
</template>

<script setup>
import Testimonials from '@/components/Sections/Testimonials.vue';
import BaseLayout from '../layout/BaseLayout.vue';
</script>
