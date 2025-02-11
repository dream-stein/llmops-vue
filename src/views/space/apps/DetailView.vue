<script setup lang="ts">
import { post } from '@/util/request'

async function debug() {
  const response = await post('apps/detailView/detailView', {
    body: { query: '你好，你是谁' },
  })
  console.log(response)
}
</script>

<template>
  <a-button @click="debug">发起请求</a-button>
</template>

<style scoped></style>
