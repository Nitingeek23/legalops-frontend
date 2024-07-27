<template>
  <div
    class="flex flex-col items-center justify-start text-white w-full h-full bg-gradient-to-b from-[#00063F] to-[#1E2567]">
    <div class="flex-grow text-center gap-[16px] flex flex-col justify-evenly items-center w-full flex-2 h-3/4">
      <h1 class="font-bold leading-tight text-[44px]">
        Let's Resolve Disputes<br />without losing<br />Relationships
      </h1>
      <div class="flex items-center w-full justify-center gap-[32px]">
        <Button variant="outline"
          class="px-6 py-8 bg-[#039C62] text-white rounded-full outline-none hover:bg-[#039C62]">
          <span class="block text-center leading-tight pt-4 pb-4 font-bold">
            Apply For Resolution<br />Mediation/Arbitration
          </span>
        </Button>
        <Button variant="outline"
          class="px-4 py-2 text-white rounded-full bg-transparent outline-none hover:bg-[#039C62]">
          Literacy Research Program
        </Button>
      </div>
    </div>

    <div class="border-b border-gray-200 w-3/4"></div>
    <div class="flex justify-start items-center w-3/4 flex-1">
      <p> Trusted by 100k plus customers</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Button} from '../custom/button';

</script>

<style scoped></style>