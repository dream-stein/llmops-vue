<script setup lang="ts">
// 1. 定义自定义组件所需数据
import { type PropType, ref } from 'vue'

const props = defineProps({
  loading: { type: Boolean, default: false, required: true },
  agent_thoughts: {
    type: Array as PropType<Record<string, any>[]>,
    default: [] as Array<any>,
    required: true,
  },
})
const visible = ref(false)
</script>

<template>
  <!-- 智能体推理过程 -->
  <div :class="`flex flex-col rounded-2xl border ${visible ? 'w-[320px]' : 'w-[180px]'}`">
    <div
      :class="`flex items-center justify-between h-10 rounded-2xl bg-gray-100 px-4 text-gray-700 cursor-pointer w-auto ${visible ? 'rounded-bl-none rounded-br-none' : ''}`"
      @click="visible = false"
    >
      <!-- 左侧图标与标题 -->
      <div class="flex items-center gap-2">
        <icon-list />
        {{ visible ? '隐藏' : '显示' }}运行流程
      </div>
      <!-- 右侧图标 -->
    </div>
  </div>
</template>

<style scoped></style>
