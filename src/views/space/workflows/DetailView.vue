<script setup lang="ts">
import { onMounted, ref } from 'vue'
import moment from 'moment/moment'
import { useRoute } from 'vue-router'
import { VueFlow } from '@vue-flow/core'
import {
  useCancelPublishWorkflow,
  useGetDraftGraph,
  useGetWorkflow,
  usePublishWorkflow,
} from '@/hooks/use-workflow.ts'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

// 1.定义页面所需数据
const router = useRoute()
const { loading: getWorkflowLoading, workflow, loadWorkflow } = useGetWorkflow()
const { loading: getDraftGraphLoading, nodes, edges, loadDraftGraph } = useGetDraftGraph()
const { loading: publishWorkflowLoading, handlePublishWorkflow } = usePublishWorkflow()
const { handleCancelPublish } = useCancelPublishWorkflow()

onMounted(() => {
  const workflow_id = String(router.params?.workflow_id ?? '')
  loadWorkflow(workflow_id)
  loadDraftGraph(workflow_id)
})
const myNodes = ref([
  {
    id: '1',
    type: 'default',
    data: { color: '#4f46e5' },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'default',
    data: { color: '#4f46e5' },
    position: { x: 0, y: 50 },
  },
])

const myEdges = ref([
  {
    id: 'e1a-2',
    source: '1',
    sourceHandle: 'a',
    target: '2',
    animated: true,
    style: {
      stroke: '#4f46e5s',
    },
  },
])
</script>

<template>
  <!-- 外部容器 -->
  <div class="min-h-screen flex flex-col h-full overflow-hidden">
    <!-- 顶部Header -->
    <!--    <div-->
    <!--      class="h-[77px] flex-shrink-0 bg-white p-4 flex items-center justify-between relative border-b"-->
    <!--    >-->
    <!--      &lt;!&ndash; 左侧工作流消息 &ndash;&gt;-->
    <!--      <div class="flex items-center gap-2">-->
    <!--        &lt;!&ndash; 回退按钮 &ndash;&gt;-->
    <!--        <router-link :to="{ name: 'space-workflows-list' }">-->
    <!--          <a-button size="mini">-->
    <!--            <template #icon>-->
    <!--              <icon-left />-->
    <!--            </template>-->
    <!--          </a-button>-->
    <!--        </router-link>-->
    <!--        &lt;!&ndash; 工作流容器 &ndash;&gt;-->
    <!--        <div class="flex items-center gap-3">-->
    <!--          &lt;!&ndash; 工作流图标 &ndash;&gt;-->
    <!--          <a-avatar :size="40" shape="square" class="rounded-lg" :image-url="workflow.icon" />-->
    <!--          &lt;!&ndash; 工作流信息 &ndash;&gt;-->
    <!--          <div class="flex flex-col justify-between h-[40px]">-->
    <!--            <a-skeleton-line v-if="getWorkflowLoading" :widths="[100]" />-->
    <!--            <div v-else class="text-gray-700 font-bold">{{ workflow.name }}</div>-->
    <!--            <div v-if="getWorkflowLoading" class="flex items-center gap-2">-->
    <!--              <a-skeleton-line :widths="[60]" :line-height="18" />-->
    <!--              <a-skeleton-line :widths="[60]" :line-height="18" />-->
    <!--              <a-skeleton-line :widths="[60]" :line-height="18" />-->
    <!--            </div>-->
    <!--            <div v-else class="flex items-center gap-2">-->
    <!--              <div class="max-w-[160px] line-clamp-1 text-xs text-gray-500">-->
    <!--                {{ workflow.description }}-->
    <!--              </div>-->
    <!--              <div class="flex items-center h-[18px] text-xs text-gray-500">-->
    <!--                <icon-schedule />-->
    <!--                {{ workflow.status === 'draft' ? '草稿' : '已发布' }}-->
    <!--              </div>-->
    <!--              <a-tag size="small" class="rounded h-[18px] leading-[18px] bg-gray-200 text-gray-500">-->
    <!--                已自动保存 {{ moment(workflow.updated_at * 1000).format('HH:mm:ss') }}-->
    <!--              </a-tag>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      &lt;!&ndash; 右侧操作按钮 &ndash;&gt;-->
    <!--      <div class="">-->
    <!--        <a-space :size="12">-->
    <!--          <a-button-group>-->
    <!--            <a-button-->
    <!--              :disabled="!workflow.is_debug_passed"-->
    <!--              :loading="publishWorkflowLoading"-->
    <!--              type="primary"-->
    <!--              class="!rounded-tl-lg !rounded-bl-lg"-->
    <!--              @click="() => handlePublishWorkflow(String(workflow.id))"-->
    <!--            >-->
    <!--              更新发布-->
    <!--            </a-button>-->
    <!--            <a-dropdown position="br">-->
    <!--              <a-button-->
    <!--                :disabled="workflow.status !== 'published'"-->
    <!--                type="primary"-->
    <!--                class="!rounded-tr-lg !rounded-br-lg !w-5"-->
    <!--              >-->
    <!--                <template #icon>-->
    <!--                  <icon-down />-->
    <!--                </template>-->
    <!--              </a-button>-->
    <!--              <template #content>-->
    <!--                <a-doption-->
    <!--                  :disabled="workflow.status !== 'published'"-->
    <!--                  class="!text-red-700"-->
    <!--                  @click="() => handleCancelPublish(String(workflow.id))"-->
    <!--                >-->
    <!--                  取消发布-->
    <!--                </a-doption>-->
    <!--              </template>-->
    <!--            </a-dropdown>-->
    <!--          </a-button-group>-->
    <!--        </a-space>-->
    <!--      </div>-->
    <!--    </div>-->
    <!-- 中间编排画布 -->
    <div class="flex-1">
      <vue-flow v-model:nodes="myNodes" v-model:edges="myEdges"> </vue-flow>
    </div>
  </div>
</template>

<style scoped></style>
