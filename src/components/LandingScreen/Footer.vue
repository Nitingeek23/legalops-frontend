<template>
  <div class="bg-[#FFFAE7] flex flex-col items-center py-16 rounded-md px-16">
    <div class="flex w-full justify-between items-center">
      <div class="flex flex-col items-center justify-between ml-36">
        <p class="font-semibold text-[24px] mb-4 text-bg-[#0F0049]">CLRMDR</p>
      </div>
      <div class="flex items-center space-x-4 mr-36">
        <img src="@/assets/fb-image.png" alt="Facebook Icon" class="w-[32px] h-[32px]">
        <img src="@/assets/linkedIn-image.png" alt="LinkedIn Icon" class="w-[32px] h-[32px]">
        <img src="@/assets/insta-image.png" alt="Instagram Icon" class="w-[32px] h-[32px]">
        <img src="@/assets/twitter.png" alt="Twitter Icon" class="w-[32px] h-[32px]">
      </div>
    </div>
    <Separator class="w-5/6 border-t border-gray-300 mb-4 mr-4" />
    <div class="flex w-full items-start justify-between px-36 py-8">
      <p class="text-[16px] text-bg-[#111827] opacity-50">Copyright ©2024. CLRMDR. All Rights Reserved</p>
      <div class="flex">
        <a href="#" class="text-[16px] text-bg-[#111827] opacity-50">Terms & Conditions - </a>
        <a href="#" class="text-[16px] text-bg-[#111827] opacity-50" style="margin-left: 8px;"> Privacy Policy</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Separator from '@/components/custom/separator/Separator.vue'
</script>

<style scoped></style>
