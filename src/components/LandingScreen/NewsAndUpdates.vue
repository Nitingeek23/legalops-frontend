<template>
  <div class="flex flex-col items-center min-h-screen py-16 px-16 w-3/4">
    <div class="flex items-center justify-between mb-8 w-full">
      <h1 class="text-4xl font-bold">News & Updates</h1>
      <Button class="rounded-full p-2 text-white bg-[#039C62]">View more articles</Button>
    </div>
    <div class="flex flex-col gap-8 flex-grow">
      <NewsCard :content="newsData[0]" orientation="row" />

      <div class="flex flex-row gap-4">
        <NewsCard v-for="(news, index) in horizontallyAlignedNews" :key="index" :content="news" />
      </div>
    </div>
    <div class="flex-grow"></div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/custom/button/Button.vue'
import type { News } from '@/types/NewsTypes'
import NewsCard from '@/components/LandingScreen/NewsCard.vue'
import { computed } from 'vue'

const newsData: Array<News> = [
  {
    cover: 'news1.png',
    heading: 'Virtual Condition For Hearing',
    content:
      'CLRMDR creates quality hearing bundles & video for arbitration hearings and delivers them as pan drive soft copy and hard copy. The hearing bundles follow the guidelines set out by top courts across the world. They make referring easy and bring all the participants of a hearing on the same page fast.'
  },
  {
    cover: 'news2.png',
    heading: 'Virtual Condition For Hearing',
    content:
      'CLRMDR creates quality hearing bundles & video for arbitration hearings and delivers them as pan drive soft copy and hard copy. The hearing bundles follow the guidelines set out by top courts across the world. They make referring easy and bring all the participants of a hearing on the same page fast.'
  },
  {
    cover: 'news1.png',
    heading: 'Virtual Condition For Hearing',
    content:
      'CLRMDR creates quality hearing bundles & video for arbitration hearings and delivers them as pan drive soft copy and hard copy. The hearing bundles follow the guidelines set out by top courts across the world. They make referring easy and bring all the participants of a hearing on the same page fast.'
  }
]

const horizontallyAlignedNews = computed(() => {
  return newsData.slice(1)
})
</script>

<style scoped>
img {
  object-fit: cover;
}

.border {
  overflow: hidden;
}

.p-4 {
  padding: 1rem;
}

/* .flex-col {
  flex-direction: column;
} */
</style>
