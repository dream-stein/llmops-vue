<script setup lang="ts">
import { ref, watch } from 'vue'
import { type Form, type ValidatedError } from '@arco-design/web-vue'
import { useCreateApp, useGetApp, useUpdateApp } from '@/hooks/use-app'

// 1.定义自定义组件所需数据
const props = defineProps({
  app_id: { type: String, default: '', required: false },
  visible: { type: Boolean, required: true },
  callback: { type: Function, required: false },
})
const emits = defineEmits(['update:visible', 'update:app_id'])

// 2.定义隐藏模态窗函数
const hideModal = () => emits('update:visible', false)
</script>

<template>
  <a-modal
    :width="520"
    :visible="props.visible"
    hide-title
    :footer="false"
    modal-class="rounded-xl"
    @cancel="hideModal"
  >
    <!-- 顶部标题 -->
    <div class="flex items-center justify-between">
      <div class="text-lg font-bold text-gray-700">
        {{ props.app_id === '' ? '创建 AI 应用' : '编辑 AI 应用' }}
      </div>
      <a-button type="text" class="!text-gray-700" size="small" @click="hideModal">
        <template #icon>
          <icon-close />
        </template>
      </a-button>
    </div>
  </a-modal>
</template>

<style scoped></style>
