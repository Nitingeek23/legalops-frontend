<script setup lang="ts">
import { Button } from '@/components/custom/button'
defineProps<{
  msg: string
}>()
</script>

<template>
  <Button> {{ msg }}</Button>
</template>

<style scoped></style>
