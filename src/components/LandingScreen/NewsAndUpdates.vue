<template>
  <div class="flex flex-col min-h-screen py-16 px-16">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-4xl font-bold">News & Updates</h1>
      <Button class="rounded-full w-32 text-white bg-[#039C62]">Join Now</Button>
    </div>
    <div class="flex flex-col gap-8 flex-grow">
      <div class="flex flex-row justify-start items-start gap-8">
        <img src="../../assets/news1.png" alt="client image" class="w-[400px] h-[480px]" />
        <div class="p-8 text-start flex-grow">
          <h3 class="font-bold text-[36px] pb-8">Virtual Condition For Hearing</h3>
          <p class="text-[18px]">
            CLRMDR creates quality hearing bundles & video for arbitration hearings and delivers them
            as pan drive soft copy and hard copy. The hearing bundles follow the guidelines set out by
            top courts across the world. They make referring easy and bring all the participants of a
            hearing on the same page fast.
          </p>
          <p class="pt-8 font-light">
            Write to arbitration.newdelhi@gmail.com<br />to use the service for your upcoming hearing.
          </p>
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <div class="border border-gray-300 flex flex-col w-full max-w-[50%]">
          <img src="../../assets/news2.png" alt="client image" class="w-full h-[300px] object-cover" />
          <div class="p-4">
            <h3 class="font-bold text-[24px] pb-4">Dispute Resolution</h3>
            <p class="text-[16px]">
              CLRMDR offers the most accessible way of resolving disputes with its online arbitration, mediation, and
              conciliation process.
            </p>
          </div>
        </div>

        <div class="border border-gray-300 flex flex-col w-full max-w-[50%]">
          <img src="../../assets/news3.png" alt="client image" class="w-full h-[300px] object-cover" />
          <div class="p-4">
            <h3 class="font-bold text-[24px] pb-4">CRLMDR Hearing Management Services</h3>
            <p class="text-[16px]">
              Secure hearing rooms with breakout rooms. Facility to make submissions as text, audio, video, and
              documents. Secure recording and live-streaming services. Transcription services for real-time and delayed
              transcripts. Stenographers who can join the hearings on short notice. Hearing bundle preparation service.
              Witness observer service. Case manager assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow"></div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/custom/button/Button.vue'
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

.flex-col {
  flex-direction: column;
}
</style>
