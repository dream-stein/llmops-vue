<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useUpdateDraftAppConfig } from '@/hooks/use-app'

// 1.定义自定义组件所需数据
const props = defineProps({
  app_id: { type: String, default: '', required: true },
  model_config: { type: Object, default: {} as any, required: true },
  dialog_round: { type: Number, default: 3, required: true },
})
const emits = defineEmits(['update:model_config'])
</script>

<template>
  <a-trigger
    v-if="props.model_config?.provider"
    trigger="click"
    position="bl"
    :popup-translate="[0, 12]"
    @hide="() => {}"
  >
    <div class="flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-1.5 py-1 rounded-lg">
      <a-avatar :size="16" shape="square" :image-url="props.model_config?.icon" />
      <div class="text-gray-700 text-xs">{{ props.model_config?.model }}</div>
    </div>
  </a-trigger>
</template>

<style scoped></style>
