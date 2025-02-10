<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>
<template>
  <p>这是主页</p>
  <p>数值是:{{ counterStore.count }}</p>
  <p>双倍数值：{{ counterStore.doubleCount }}</p>
  <a-button type="primary" @click="counterStore.increment">数值+1</a-button>
  <router-link to="/space/apps">跳转到应用列表</router-link>
</template>

<style scoped></style>
