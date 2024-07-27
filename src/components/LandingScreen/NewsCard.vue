<template>
  <div
    class="border border-gray-300 flex w-full rounded-lg"
    :class="{
      'flex-row': orientation === 'row',
      'max-w-[50%]': orientation === 'column',
      'flex-col': orientation === 'column'
    }"
  >
    <image :src="getImageURL()" alt="client image" class="w-full h-[300px] object-cover" />
    <div class="p-4 flex flex-col justify-between">
      <Badge variant="secondary" class="w-fit px-4 py-2 font-bold text-[#96006D]"
        >Article Tag</Badge
      >
      <div>
        <h3 class="font-bold text-[24px] pb-4">{{ content.heading }}</h3>
        <p class="text-[16px]">
          {{ content.content }}
        </p>
        <div class="w-full flex justify-between items-center">
          <Button variant="link" class="px-0 text=[16px] text-[#F63A61] flex"
            >Learn More <ArrowRight
          /></Button>
          <p class="text-[14px] text-[#0f00494d] text-light">20 June / 7 Min Read</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { News } from '@/types/NewsTypes'
import { ArrowRight } from 'lucide-vue-next'
import { Badge } from '@/components/custom/badge'
import type { PropType } from 'vue'

const props = defineProps({
  orientation: {
    type: String,
    default: 'column'
  },
  content: {
    type: Object as PropType<News>,
    required: true
  }
})

const getImageURL = () => {
  return new URL(`../../assets/${props.content.cover}`, import.meta.url)
}
</script>

<style scoped></style>
