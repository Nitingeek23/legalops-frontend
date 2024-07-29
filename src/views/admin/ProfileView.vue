<template>
    <div class="flex h-screen">
      <!-- Left Section -->
      <div class="w-1/6 bg-[#1A237E] text-white flex flex-col">
        <!-- Profile Section -->
        <div class="flex flex-col items-start py-4 px-4" style="height: 15%;">
          <div class="flex items-center mb-2">
            <img src="../../assets/news2.png" alt="Profile" class="rounded-full w-24 h-24" />
            <div class="ml-4">
              <p class="text-lg font-semibold">CLRMDR</p>
              <p class="text-md">John Doe</p>
            </div>
          </div>
        </div>
        <Separator class="border-t border-gray-500 my-4" />
  
        <!-- Options Section -->
        <div class="flex flex-col space-y-8 px-4" style="flex-grow: 1;">
          <p class="cursor-pointer hover:text-gray-400">Dashboard</p>
          <p class="cursor-pointer hover:text-gray-400">Arbitrator</p>
          <p class="cursor-pointer hover:text-gray-400">Mediator</p>
          <p class="cursor-pointer hover:text-gray-400">Relationship Manager</p>
          <p class="cursor-pointer hover:text-gray-400">Case Manager</p>
          <p class="cursor-pointer hover:text-gray-400">Bank/Finance</p>
        </div>
  
        <!-- Settings and Logout Section -->
        <Separator class="border-t border-gray-500 my-4" />
        <div class="flex flex-col space-y-4 px-4 mb-4">
          <p class="cursor-pointer hover:text-gray-400">Settings</p>
          <p class="cursor-pointer hover:text-gray-400">Logout</p>
        </div>
      </div>
  
      <!-- Right Section -->
      <div class="w-3/4 bg-white p-4">
        <h2 class="text-2xl mb-4">Right Section</h2>
        <p>This section takes up the remaining space.</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Separator from '@/components/custom/separator/Separator.vue'
  </script>
  
  <style scoped>
  /* Additional styles can be added here */
  </style>
  