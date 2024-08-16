<template>
    <div
      class="flex flex-col justify-between w-full gap-5 p-12 transition-transform duration-300 ease-in-out bg-white cursor-pointer md:w-1/2 md:flex-row hover:scale-105"
    >
      <div v-if="imageFirst" class="bg-primary w-full md:w-1/2 h-[280px]"></div>
      <div class="flex flex-col w-full md:w-1/2">
        <h2 class="text-gray-500 text-2xl md:text-3xl md:w-6/7 font-semibold border-b-4 border-[#48CDDE]">
          {{ heading }}
        </h2>
        <div v-if="listItems.length" class="mt-4">
          <ul class="flex flex-col gap-2 ml-4 list-disc">
            <li class="text-gray-500" v-for="(item, index) in listItems" :key="index">{{ item }}</li>
          </ul>
        </div>
        <div v-else-if="paragraphText" class="mt-4">
          <p class="text-gray-500">{{ paragraphText }}</p>
        </div>
      </div>
      <div v-if="!imageFirst" class="bg-primary w-full md:w-1/2 h-[280px]"></div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    heading: {
      type: String,
      required: true
    },
    listItems: {
      type: Array,
      default: () => []
    },
    paragraphText: {
      type: String,
      default: ''
    },
    imageFirst: {
      type: Boolean,
      default: false
    }
  });
  </script>
  