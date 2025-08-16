<script setup lang="ts">
import { onMounted, ref } from 'vue'
import moment from 'moment/moment'
import { useRoute } from 'vue-router'
import { Panel, VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import {
  useCancelPublishWorkflow,
  useGetDraftGraph,
  useGetWorkflow,
  usePublishWorkflow,
} from '@/hooks/use-workflow.ts'
import StartNode from '@/views/space/workflows/components/nodes/StartNode.vue'
import LlmNode from '@/views/space/workflows/components/nodes/LLMNode.vue'
import CodeNode from '@/views/space/workflows/components/nodes/CodeNode.vue'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import '@vue-flow/minimap/dist/style.css'

// 1.定义页面所需数据
const router = useRoute()
const instance = ref<any>(null)
const zoomLevel = ref<number>(1)
const zoomOptions = [
  { label: '200%', value: 2 },
  { label: '100%', value: 1 },
  { label: '75%', value: 0.75 },
  { label: '50%', value: 0.5 },
  { label: '25%', value: 0.25 },
]
const { onPaneReady } = useVueFlow()
const { loading: getWorkflowLoading, workflow, loadWorkflow } = useGetWorkflow()
const { loading: getDraftGraphLoading, nodes, edges, loadDraftGraph } = useGetDraftGraph()
const { loading: publishWorkflowLoading, handlePublishWorkflow } = usePublishWorkflow()
const { handleCancelPublish } = useCancelPublishWorkflow()

onMounted(() => {
  const workflow_id = String(router.params?.workflow_id ?? '')
  loadWorkflow(workflow_id)
  loadDraftGraph(workflow_id)
})

onPaneReady((vueFlowInstance) => {
  vueFlowInstance.fitView()
  instance.value = vueFlowInstance
})

const myNodes = ref([
  {
    id: '1',
    position: { x: 150, y: 50 },
    type: 'start',
    data: {
      label: 'Node 1',
      title: '开始节点',
      inputs: [
        { name: 'query', type: 'string' },
        { name: 'location', type: 'string' },
      ],
    },
  },
  {
    id: '2',
    position: { x: 300, y: 150 },
    type: 'llm',
    data: {
      label: 'Node 1',
      title: '大语言模型',
      inputs: [
        {
          name: 'query',
          type: 'string',
          value: { type: 'ref', content: { ref_var_name: 'query' } },
        },
        {
          name: 'context',
          type: 'string',
          value: { type: 'ref', content: { ref_var_name: 'combined_dex' } },
        },
      ],
      prompt:
        '你是一个强有力的AI机器人，请根据用户的提问回复特定的内容，用户的提问是:[[query]]。如果有必要，可以适应上下文内容尽享回复，上下文内容<context>',
      outputs: [{ name: 'output', type: 'string' }],
    },
  },
  {
    id: '3',
    position: { x: 300, y: 150 },
    type: 'code',
    data: {
      label: '2222',
      title: 'code节点',
      inputs: [
        {
          name: 'query',
          type: 'string',
          value: { type: 'ref', content: { ref_var_name: 'query' } },
        },
        {
          name: 'context',
          type: 'string',
          value: { type: 'ref', content: { ref_var_name: 'combined_dex' } },
        },
      ],
      prompt:
        '你是一个强有力的AI机器人，请根据用户的提问回复特定的内容，用户的提问是:[[query]]。如果有必要，可以适应上下文内容尽享回复，上下文内容<context>',
      outputs: [{ name: 'output', type: 'string' }],
    },
  },
])

const myEdges = ref([
  {
    id: 'e1a-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e1a-3',
    source: '1',
    target: '3',
  },
])
</script>

<template>
  <!-- 外部容器 -->
  <div class="min-h-screen flex flex-col h-full overflow-hidden relative">
    <!-- 顶部Header -->
    <div
      class="h-[77px] flex-shrink-0 bg-white p-4 flex items-center justify-between relative border-b"
    >
      <!-- 左侧工作流消息 -->
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
                已自动保存 {{ moment(workflow.updated_at * 1000).format('HH:mm:ss') }}
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
              @click="() => handlePublishWorkflow(String(workflow.id))"
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
                  @click="() => handleCancelPublish(String(workflow.id))"
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
    <div style="height: 900px; border: 1px solid #ccc">
      <vue-flow
        :min-zoom="0.25"
        :max-zoom="2"
        :nodes="myNodes"
        :edges="myEdges"
        @viewport-change="
          (viewport) => {
            zoomLevel = viewport.zoom
          }
        "
      >
        <!-- 自定义节点类型插槽 -->
        <template #node-start="customNodeProps">
          <start-node v-bind="customNodeProps" />
        </template>
        <template #node-llm="customNodeProps">
          <llm-node v-bind="customNodeProps" />
        </template>
        <template #node-code="customNodeProps">
          <code-node v-bind="customNodeProps" />
        </template>
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
        <!-- 使用默认插槽添加工具菜单 -->
        <panel position="bottom-center">
          <div class="p-[5px] bg-white rounded-xl border z-50">
            <a-space :size="8">
              <template #split>
                <a-divider direction="vertical" class="m-0" />
              </template>
              <!-- 添加节点 -->
              <a-trigger position="top" :popup-translate="[0, -16]">
                <a-button type="primary" size="small" class="rounded-lg px-2">
                  <template #icon>
                    <icon-plus-circle-fill />
                  </template>
                  节点
                </a-button>
                <template #content>
                  <div
                    class="bg-white borer border-gray-200 w-[240px] shadow rounded-xl overflow-hidden py-2"
                  >
                    <!-- 开始节点 -->
                    <div class="flex flex-col px-3 py-2 gap-2 cursor-pointer hover:bg-gray-50">
                      <!-- 节点名称 -->
                      <div class="flex items-center gap-2">
                        <a-avatar shape="square" :size="24" class="bg-blue-700 rounded-lg">
                          <icon-home />
                        </a-avatar>
                        <div class="text-gray-700 font-semibold">开始节点</div>
                      </div>
                      <!-- 节点描述 -->
                      <div class="text-gray-500 text-xs">
                        工作流的起始节点，支持定义工作流的起点输入等信息。
                      </div>
                    </div>
                    <!-- 大语言模型节点 -->
                    <div class="flex flex-col px-3 py-2 gap-2 cursor-pointer hover:bg-gray-50">
                      <!-- 节点名称 -->
                      <div class="flex items-center gap-2">
                        <a-avatar shape="square" :size="24" class="bg-sky-500 rounded-lg">
                          <icon-language />
                        </a-avatar>
                        <div class="text-gray-700 font-semibold">大语言模型节点</div>
                      </div>
                      <!-- 节点描述 -->
                      <div class="text-gray-500 text-xs">
                        调用大语言模型，根据输入参数和提示词生成回复。
                      </div>
                    </div>
                    <!-- 扩展节点 -->
                    <div class="flex flex-col px-3 py-2 gap-2 cursor-pointer hover:bg-gray-50">
                      <!-- 节点名称 -->
                      <div class="flex items-center gap-2">
                        <a-avatar shape="square" :size="24" class="bg-orange-500 rounded-lg">
                          <icon-tool />
                        </a-avatar>
                        <div class="text-gray-700 font-semibold">扩展插件</div>
                      </div>
                      <!-- 节点描述 -->
                      <div class="text-gray-500 text-xs">
                        添加插件广场内或自定义API插件，支持能力扩展和复用。
                      </div>
                    </div>
                    <!-- 知识库检索 -->
                    <div class="flex flex-col px-3 py-2 gap-2 cursor-pointer hover:bg-gray-50">
                      <!-- 节点名称 -->
                      <div class="flex items-center gap-2">
                        <a-avatar shape="square" :size="24" class="bg-violet-500 rounded-lg">
                          <icon-storage />
                        </a-avatar>
                        <div class="text-gray-700 font-semibold">知识库检索</div>
                      </div>
                      <!-- 节点描述 -->
                      <div class="text-gray-500 text-xs">
                        根据输入的参数，在选定的知识库中检索相关片段并召回，返回切片列表。
                      </div>
                    </div>
                    <!-- 模板转换 -->
                    <div class="flex flex-col px-3 py-2 gap-2 cursor-pointer hover:bg-gray-50">
                      <!-- 节点名称 -->
                      <div class="flex items-center gap-2">
                        <a-avatar shape="square" :size="24" class="bg-emerald-500 rounded-lg">
                          <icon-branch />
                        </a-avatar>
                        <div class="text-gray-700 font-semibold">模板转换</div>
                      </div>
                      <!-- 节点描述 -->
                      <div class="text-gray-500 text-xs">对多个字符串变量的格式进行处理。</div>
                    </div>
                    <!-- HTTP请求 -->
                    <div class="flex flex-col px-3 py-2 gap-2 cursor-pointer hover:bg-gray-50">
                      <!-- 节点名称 -->
                      <div class="flex items-center gap-2">
                        <a-avatar shape="square" :size="24" class="bg-rose-500 rounded-lg">
                          <icon-link />
                        </a-avatar>
                        <div class="text-gray-700 font-semibold">HTTP请求</div>
                      </div>
                      <!-- 节点描述 -->
                      <div class="text-gray-500 text-xs">配置外部API服务，并发起请求。</div>
                    </div>
                    <!-- Python代码执行 -->
                    <div class="flex flex-col px-3 py-2 gap-2 cursor-pointer hover:bg-gray-50">
                      <!-- 节点名称 -->
                      <div class="flex items-center gap-2">
                        <a-avatar shape="square" :size="24" class="bg-cyan-500 rounded-lg">
                          <icon-code />
                        </a-avatar>
                        <div class="text-gray-700 font-semibold">Python代码执行</div>
                      </div>
                      <!-- 节点描述 -->
                      <div class="text-gray-500 text-xs">
                        编写代码处理输入输出变量来生成返回值。
                      </div>
                    </div>
                    <!-- 结束节点 -->
                    <div class="flex flex-col px-3 py-2 gap-2 cursor-pointer hover:bg-gray-50">
                      <!-- 节点名称 -->
                      <div class="flex items-center gap-2">
                        <a-avatar shape="square" :size="24" class="bg-red-700 rounded-lg">
                          <icon-filter />
                        </a-avatar>
                        <div class="text-gray-700 font-semibold">结束节点</div>
                      </div>
                      <!-- 节点描述 -->
                      <div class="text-gray-500 text-xs">
                        工作流的结束节点，支持定义工作流最终输出的变量等信息。
                      </div>
                    </div>
                  </div>
                </template>
              </a-trigger>
              <!-- 自适应布局&视口大小 -->
              <div class="flex items-center gap-3">
                <a-button size="small" text="text" class="!text-gray-700 rounded-lg">
                  <template #icon>
                    <icon-apps />
                  </template>
                </a-button>
                <a-dropdown
                  trigger="hover"
                  @select="
                    (value) => {
                      // 调整视口大小并更新视口等级
                      zoomLevel = Number(value)
                      instance.zoomTo(value)
                    }
                  "
                >
                  <a-button size="small" class="!text-gray-700 px-2 rounded-lg gap-1 w-[80px]">
                    {{ (zoomLevel * 100).toFixed(0) }}%
                    <icon-down />
                  </a-button>
                  <template #content>
                    <a-doption v-for="zoom in zoomOptions" :key="zoom.value" :value="zoom.value">
                      {{ zoom.label }}
                    </a-doption>
                  </template>
                </a-dropdown>
              </div>
              <!-- 调试与预览 -->
              <a-button type="text" size="small" class="px-2 rounded-lg">
                <template #icon>
                  <icon-play-arrow />
                </template>
                调试
              </a-button>
            </a-space>
          </div>
        </panel>
      </vue-flow>
    </div>
  </div>
</template>

<style scoped></style>
