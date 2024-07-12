<template>
  <!-- <ScrollArea class=""> -->
  <ScrollArea class="flex-grow h-full" id="scroll-container">
    <div>
      <AboutUs />
    </div>
    <div class="bg-[#0000ff]" :style="`height: ${heightVar}`">
      Jokester began sneaking into the castle in the middle of the night and leaving jokes all over
      the place: under the king's pillow, in his soup, even in the royal toilet. The king was
      furious, but he couldn't seem to stop Jokester. And then, one day, the people of the kingdom
      discovered that the jokes left by Jokester were so funny that they couldn't help but laugh.
      And once they started laughing, they couldn't stop.
    </div>
    <div class="bg-[#0000ff]" :style="`height: ${heightVar}`">
      Jokester began sneaking into the castle in the middle of the night and leaving jokes all over
      the place: under the king's pillow, in his soup, even in the royal toilet. The king was
      furious, but he couldn't seem to stop Jokester. And then, one day, the people of the kingdom
      discovered that the jokes left by Jokester were so funny that they couldn't help but laugh.
      And once they started laughing, they couldn't stop.
    </div>
  </ScrollArea>
  <!-- </ScrollArea> -->
</template>

<script setup lang="ts">
import ScrollArea from '@/components/custom/scroll-area/ScrollArea.vue'
import AboutUs from '@/components/LandingScreen/AboutUs.vue'
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
