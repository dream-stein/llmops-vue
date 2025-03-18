<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGetDraftAppConfig, useUpdateDraftAppConfig } from '@/hooks/use-app.ts'
import PresetPromptTextarea from '@/views/space/apps/component/PresetPromptTextarea.vue'
import PreViewDebugHeader from '@/views/space/apps/component/PreViewDebugHeader.vue'

// 1. 页面基础数据定义
const route = useRoute()
const { draftAppConfigForm, loadDraftAppConfig } = useGetDraftAppConfig(
  route.params?.app_id as string,
)
const { handleUpdateDraftAppConfig } = useUpdateDraftAppConfig()
</script>

<template>
  <div class="flex-1 w-full min-h-0 bg-white">
    <div class="flex-1 grid grid-cols-[26fr_14fr] h-full w-full">
      <!-- 左侧应用编排 -->
      <div class="bg-gray-50 flex flex-col h-full">
        <!-- 顶部标题 -->
        <div class="flex items-center h-16 border-b p-4">
          <div class="text-lg text-gray-700">应用编排</div>
          <!-- LLM模型配置 -->
        </div>
        <!-- 底部编排区域 -->
        <div class="grid grid-cols-[13fr_13fr] overflow-hidden h-[calc(100vh-141px)]">
          <!-- 左侧人设与回复逻辑 -->
          <div class="border-r py-4">
            <preset-prompt-textarea
              v-model:preset_prompt="draftAppConfigForm.preset_prompt"
              :app_id="route.params?.app_id as string"
            />
          </div>
          <!-- 右侧应用能力 -->
          <div class="">右侧应用能力</div>
        </div>
      </div>
      <!-- 右侧调试与会话 -->
      <div class="min-w-[404px]">
        <pre-view-debug-header
          :app_id="route.params?.app_id as string"
          :long_term_memory="draftAppConfigForm.long_term_memory"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
