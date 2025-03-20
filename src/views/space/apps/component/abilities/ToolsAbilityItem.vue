<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'
import { type GetDraftAppConfigResponse } from '@/models/app'
import { useUpdateDraftAppConfig } from '@/hooks/use-app.ts'
import { useGetApiTool, useGetBuiltinTool } from '@/hooks/use-tools.ts'
import { apiPrefix, typeMap } from '@/config'

// 1.定义自定义组件所需数据
const props = defineProps({
  app_id: { type: String, default: '', required: true },
  tools: {
    type: Array as PropType<GetDraftAppConfigResponse['data']['tools']>,
    default: [] as Array<any>,
    required: true,
  },
})
const emits = defineEmits(['update:tools'])
const { loading: updateDraftAppConfigLoading, handleUpdateDraftAppConfig } =
  useUpdateDraftAppConfig()
const { loading: getApiToolLoading, api_tool, loadApiTool } = useGetApiTool()
const { loading: getBuiltinToolLoading, builtin_tool, loadBuiltinTool } = useGetBuiltinTool()
const toolInfoModalVisible = ref(false)
const toolInfoNavType = ref('info')
const toolInfo = ref<Record<string, any>>({})
const toolInfoIdx = ref(-1)
const toolInfoSettingForm = ref<Record<string, any>>({})
const toolsModalVisible = ref(false)
const toolsActivateType = ref('api_tool')
const toolsActivateCategory = ref('all')

// 2.定义显示工具设置模态窗
const handleShowToolInfoModal = (idx: number) => {
  // 2.1 获取当前选中的工具
  if (idx === -1) return
  toolInfoIdx.value = idx
  const tool = props.tools[idx]

  // 2.2 检测不同的工具类型调用不同API接口
  if (tool.type === 'builtin_tool') {
    loadBuiltinTool(tool.provider.name, tool.tool.name)
    toolInfo.value = {
      type: 'builtin_tool',
      provider: {
        id: builtin_tool.provider.name,
        icon: builtin_tool.icon,
        name: builtin_tool.provider.name,
        label: builtin_tool.provider.label,
        description: builtin_tool.provider.description,
      },
      tool: {
        id: builtin_tool.name,
        name: builtin_tool.name,
        label: builtin_tool.label,
        description: builtin_tool.description,
        inputs: builtin_tool.inputs,
        params: builtin_tool.params,
      },
    }
  } else {
    loadApiTool(tool.provider.id, tool.tool.name)
    toolInfo.value = {
      type: 'api_tool',
      provider: {
        id: api_tool.provider.id,
        icon: api_tool.provider.icon,
        name: api_tool.provider.name,
        label: api_tool.provider.name,
        description: api_tool.provider.description,
      },
      tool: {
        id: api_tool.name,
        name: api_tool.name,
        label: api_tool.name,
        description: api_tool.description,
        inputs: builtin_tool.inputs,
        params: [],
      },
    }
  }
  // 2.3 显示模态窗
  toolInfoModalVisible.value = true
}
</script>

<template>
  <div class="">
    <!-- 折叠面板 -->
    <a-collapse-item key="tools" class="app-ability-item">
      <template #header>
        <div class="text-gray-700 font-bold">扩展插件</div>
      </template>
      <template #extra>
        <a-button
          size="mini"
          type="text"
          class="!text-gray-700"
          @click.stop="toolsModalVisible = true"
        >
          <template #icon>
            <icon-plus />
          </template>
        </a-button>
      </template>
      <div v-if="props.tools.length > 0" class="flex flex-col gap-1">
        <div
          v-for="(tool, idx) in props.tools"
          :key="idx"
          class="flex items-center justify-between bg-white p-3 rounded-lg cursor-pointer hover:shadow-sm group"
        >
          <!-- 左侧工具信息 -->
          <div class="flex items-center gap-2">
            <!-- 图标 -->
            <a-avatar
              :size="36"
              shape="square"
              class="rounded flex-shrink-0"
              :image-url="tool.provider.icon"
            />
            <!-- 名称与描述信息 -->
            <div class="flex flex-col gap-1 h-9">
              <div class="text-gray-700 font-bold leading-[18px] line-clamp-1 break-all">
                {{ tool.provider.label }} / {{ tool.tool.label }}
              </div>
              <div class="text-gray-500 text-xs line-clamp-1 break-all">
                {{ tool.tool.description }}
              </div>
            </div>
          </div>
          <!-- 右侧按钮 -->
          <div class="hidden group-hover:flex items-center gap-1 flex-shrink-0 ml-2">
            <a-button
              :loading="getApiToolLoading || getBuiltinToolLoading"
              size="mini"
              type="text"
              class="!text-gray-700 rounded"
              @click="() => handleShowToolInfoModal(idx)"
            >
              <template #icon>
                <icon-settings />
              </template>
            </a-button>
            <a-button
              :loading="updateDraftAppConfigLoading"
              size="mini"
              type="text"
              class="!text-red-700 rounded"
              @click="async () => {}"
            >
              <template #icon>
                <icon-delete />
              </template>
            </a-button>
          </div>
        </div>
      </div>
      <div v-else class="text-xs text-gray-500 leading-[22px]">
        插件能够让智能体调用外部
        API，例如搜索信息、浏览网页、生成图片等，扩展智能体的能力和使用场景。
      </div>
    </a-collapse-item>
    <!-- 工具设置模态窗 -->
    <a-modal
      :visible="toolInfoModalVisible"
      hide-title
      :footer="false"
      class="tool-setting-modal"
      modal-class="h-[calc(100vh-32px)] right-4"
      @cancel="toolInfoModalVisible = false"
    >
      <!-- 顶部标题&关闭按钮 -->
      <div class="flex items-center justify-between mb-6">
        <!-- 左侧标题&导航 -->
        <div class="flex items-center">
          <!-- 工具信息 -->
          <div class="flex items-center gap-2">
            <a-avatar :size="24" shape="circle" :image-url="toolInfo?.provider?.icon" />
            <div class="text-gray-700 font-bold max-w-[200px] line-clamp-1 break-all">
              {{ toolInfo?.tool?.label }}
            </div>
          </div>
          <!-- 分隔符 -->
          <div class="mx-4 text-gray-400">
            <icon-oblique-line :size="12" />
          </div>
          <!-- 导航菜单 -->
          <div class="flex items-center gap-6">
            <div
              :class="`text-gray-700 pt-1 cursor-pointer border-blue-700 hover:border-b-4 hover:font-bold transition-all ${toolInfoNavType === 'info' ? 'font-bold border-b-4' : ''}`"
              @click="toolInfoNavType = 'info'"
            >
              信息
            </div>
            <div
              v-if="toolInfo.type === 'builtin_tool' && toolInfo?.tool?.params?.length > 0"
              :class="`text-gray-700 pt-1 cursor-pointer border-blue-700 hover:border-b-4 hover:font-bold transition-all ${toolInfoNavType === 'setting' ? 'font-bold border-b-4' : ''}`"
              @click="toolInfoNavType = 'setting'"
            >
              设置
            </div>
          </div>
        </div>
        <!-- 右侧关闭按钮 -->
        <a-button
          size="mini"
          type="text"
          class="!text-gray-700"
          @click="toolInfoModalVisible = false"
        >
          <template #icon>
            <icon-close />
          </template>
        </a-button>
      </div>
      <!-- 信息容器 -->
      <div
        v-if="toolInfoNavType === 'info'"
        class="h-[calc(100vh-170px)] pb-4 overflow-scroll scrollbar-w-none"
      >
        <!-- 工具描述 -->
        <div class="text-gray-70 font-bold mb-1">工具描述</div>
        <div class="text-gray-500 text-xs">{{ toolInfo?.tool?.description }}</div>
        <div v-if="toolInfo?.tool?.inputs?.length > 0" class="">
          <!-- 分隔符 -->
          <div class="flex items-center gap-2 my-4">
            <div class="text-xs font-bold text-gray-500">参数</div>
            <hr class="flex-1" />
          </div>
          <!-- 参数列表 -->
          <div class="flex flex-col gap-4">
            <div
              v-for="input in toolInfo?.tool?.inputs"
              :key="input.name"
              class="flex flex-col gap-2"
            >
              <!-- 上半部分 -->
              <div class="flex items-center gap-2 text-xs">
                <div class="text-gray-900 font-bold">{{ input.name }}</div>
                <div class="text-gray-500">{{ typeMap[input.type] }}</div>
                <div v-if="input.required" class="text-red-700">必填</div>
              </div>
              <!-- 参数描述信息 -->
              <div class="text-xs text-gray-500">{{ input.description }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 设置容器 -->
    </a-modal>
  </div>
</template>

<style scoped></style>
