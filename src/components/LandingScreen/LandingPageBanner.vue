<template>
  <!-- <ScrollArea class=""> -->
  <ScrollArea
    class="flex-grow flex flex-col justify-start items-center h-full"
    id="scroll-container"
  >
  <div :style="`height: ${heightVar}`">
      <HomePageContent />
    </div>
    <div>
      <AboutUs />
    </div>
    <div class="w-full flex flex-col justify-center items-center gap-8">
      <Separator class="w-3/4 text-[#000]" />
      <JoinUs />
    </div>
    <div class="w-full flex flex-col justify-center items-center gap-8">
      <NewsAndUpdates />
    </div>
    <div class="w-full flex flex-col justify-center items-center gap-8">
      <ContactUs />
    </div>
  </ScrollArea>
  <!-- </ScrollArea> -->
</template>

<script setup lang="ts">
import ScrollArea from '@/components/custom/scroll-area/ScrollArea.vue'
import Separator from '@/components/custom/separator/Separator.vue'
import AboutUs from '@/components/LandingScreen/AboutUs.vue'
import JoinUs from '@/components/LandingScreen/JoinUs.vue'
import NewsAndUpdates from '@/components/LandingScreen/NewsAndUpdates.vue'
import HomePageContent from "@/components/LandingScreen/HomePageContent.vue"
import ContactUs from "@/components/LandingScreen/ContactUs.vue"
import { onMounted, ref } from 'vue'
const heightVar = ref<string>('200px')

const getDynamicHeight = () => {
  const targetEl = document.querySelector('#scroll-container')
  const targetElHeight = targetEl?.getBoundingClientRect().height
  heightVar.value = `${Math.ceil(targetElHeight as number) || heightVar.value}px`
}

onMounted(() => {
  getDynamicHeight()
  window?.addEventListener('resize', () => getDynamicHeight())
})
</script>

<style scoped></style>
