<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ConnectionMode, Panel, useVueFlow, VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import {
  useCancelPublishWorkflow,
  useGetDraftGraph,
  useGetWorkflow,
  usePublishWorkflow,
} from '@/hooks/use-workflow.ts'
import { onMounted } from 'vue'
import moment from 'moment/moment'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import '@vue-flow/minimap/dist/style.css'

// 1. 定义页面所需数据
const route = useRoute()
const { loading: getWorkflowLoading, workflow, loadWorkflow } = useGetWorkflow()
const { loading: getDraftGraphLoading, nodes, edges, loadDraftGraph } = useGetDraftGraph()
const { loading: publishWorkflowLoading, handlePublishWorkflow } = usePublishWorkflow()
const { handleCancelPublish } = useCancelPublishWorkflow()

onMounted(() => {
  const workflow_id = (route.params?.workflow_id as string) ?? ''
  loadWorkflow(workflow_id)
  loadDraftGraph(workflow_id)
  nodes.value = [
    {
      id: '1',
      position: { x: 50, y: 50 },
      data: { label: 'Node 1' },
    },
  ]
})
</script>

<template>
  <!-- 外部容器 -->
  <div class="min-h-screen flex flex-col h-full overflow-hidden relative">
    <!-- 顶部Header -->
    <div
      class="h-[77px] flex-shrink-0 bg-white p-4 flex items-center justify-between relative border-b"
    >
      <!-- 左侧工作流信息 -->
      <div class="flex items-center gap-2">
        <!-- 回退按钮 -->
        <router-link :to="{ name: 'space-workflows-list' }">
          <a-button size="mini">
            <template #icon>
              <icon-left />
            </template>
          </a-button>
        </router-link>
        <!-- 工作流容器 -->
        <div class="flex items-center gap-3">
          <!-- 工作流图标 -->
          <a-avatar :size="40" shape="square" class="rounded-lg" :image-url="workflow.icon" />
          <!-- 工作流信息 -->
          <div class="flex flex-col justify-between h-[40px]">
            <a-skeleton-line v-if="getWorkflowLoading" :widths="[100]" />
            <div v-else class="text-gray-700 font-bold">{{ workflow.name }}</div>
            <div v-if="getWorkflowLoading" class="flex items-center gap-2">
              <a-skeleton-line :widths="[60]" :line-height="18" />
              <a-skeleton-line :widths="[60]" :line-height="18" />
              <a-skeleton-line :widths="[60]" :line-height="18" />
            </div>
            <div v-else class="flex items-center gap-2">
              <div class="max-w-[160px] line-clamp-1 text-xs text-gray-500">
                {{ workflow.description }}
              </div>
              <div class="flex items-center h-[18px] text-xs text-gray-500">
                <icon-schedule />
                {{ workflow.status === 'draft' ? '草稿' : '已发布' }}
              </div>
              <a-tag size="small" class="rounded h-[18px] leading-[18px] bg-gray-200 text-gray-500">
                已自动保存 {{ moment(workflow.updated_at).format('HH:mm:ss') }}
              </a-tag>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧操作按钮 -->
      <div class="">
        <a-space :size="12">
          <a-button-group>
            <a-button
              :disabled="!workflow.is_debug_passed"
              :loading="publishWorkflowLoading"
              type="primary"
              class="!rounded-tl-lg !rounded-bl-lg"
              @click="() => handlePublishWorkflow(workflow.id as string)"
            >
              更新发布
            </a-button>
            <a-dropdown position="br">
              <a-button
                :disabled="workflow.status !== 'published'"
                type="primary"
                class="!rounded-tr-lg !rounded-br-lg !w-5"
              >
                <template #icon>
                  <icon-down />
                </template>
              </a-button>
              <template #content>
                <a-doption
                  :disabled="workflow.status !== 'published'"
                  class="!text-red-700"
                  @click="() => handleCancelPublish(workflow.id as string)"
                >
                  取消发布
                </a-doption>
              </template>
            </a-dropdown>
          </a-button-group>
        </a-space>
      </div>
    </div>
    <!-- 中间编排画布 -->
    <div class="flex-1">
      <vue-flow>
        <!-- 工作流背景 -->
        <background />
        <!-- 迷你地图 -->
        <mini-map
          class="rounded-xl border border-gray-300 overflow-hidden !left-0 !right-auto"
          :width="160"
          :height="96"
          pannable
          zoomable
        />
      </vue-flow>
    </div>
  </div>
</template>

<style scoped></style>
