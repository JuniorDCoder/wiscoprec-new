<template>
    <div
      class="bg-white w-full md:w-1/2 cursor-pointer p-12 flex flex-col md:flex-row justify-between gap-5 transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div v-if="imageFirst" class="bg-primary w-full md:w-1/2 h-[280px]"></div>
      <div class="flex flex-col w-full md:w-1/2">
        <h2 class="text-gray-500 text-2xl md:text-3xl font-semibold border-b-4 border-[#48CDDE]">
          {{ heading }}
        </h2>
        <div v-if="listItems.length" class="mt-4">
          <ul class="list-disc ml-4 flex flex-col gap-2">
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
  