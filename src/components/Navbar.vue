<template>
  <div class="navbar">
    <h3 class="text-lg font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.75)]">CLRMDR</h3>

    <div>
      <Button variant="ghost">About us</Button>
      <Button variant="ghost">Contact us</Button>
      <Button variant="ghost">Rules</Button>
      <Button variant="ghost">Services</Button>
      <Button variant="ghost">Cause List</Button>
      <Button variant="ghost">Case Status</Button>
    </div>

    <Button
      variant="outline"
      class="rounded-full p-0 w-32 flex justify-around text-white bg-[#039C62]"
      >Login <ChevronRight class="w-4 h-4 mt-1" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/custom/button'
import { ChevronRight } from 'lucide-vue-next'
</script>

<style scoped>
.navbar {
  width: 100%;
  /* height: 105px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-top: 36px;
  padding-bottom: 33px; */
  padding: 24px 0;
  border-bottom: 1px solid #ccc;
}

.login-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
