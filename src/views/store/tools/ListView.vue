<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { getCategories, getBuiltinTools } from '@/service/builtin-tool.ts'
import moment from 'moment'
import { apiPrefix, typeMap } from '@/config'

// 声明变量
const categories = reactive<Array<any>>([])
const providers = reactive<Array<any>>([])
const loading = ref<boolean>(false)
const category = ref<string>('all')
const search_word = ref<string>('')
const showIdx = ref<number>(-1)
const filterProvides = computed(() => {
  return providers.filter((item) => {
    // 分别检索分类信息+搜索词，只有同时符合的时候才返回数据
    const matchCategory = category.value === 'all' || item.category === category.value
    const matchSearchWord =
      search_word.value === '' || item.label.toLowerCase().includes(search_word.value)
    return matchCategory && matchSearchWord
  })
})

onMounted(async () => {
  try {
    loading.value = true
    const resp = await getCategories()
    categories.push(...resp.data)
  } finally {
    loading.value = false
  }
})

onMounted(async () => {
  try {
    loading.value = true
    const resp = await getBuiltinTools()
    providers.push(...resp.data)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <a-spin :loading="loading" class="block h-full w-full">
    <div class="p-6 flex flex-col">
      <!-- 顶层标题 + 创建按钮 -->
      <div class="flex items-center justify-between mb-6">
        <!-- 左侧标题 -->
        <div class="flex items-center gap-2">
          <a-avatar :size="32" class="bg-blue-700">
            <icon-common :size="18" />
          </a-avatar>
          <div class="text-lg font-medium text-gray-900">插件广场</div>
        </div>
        <!-- 创建按钮 -->
        <a-button type="primary" class="rounded-lg">创建自定义插件</a-button>
      </div>
      <!-- 插件分类 + 搜索框 -->
      <div class="flex items-center justify-between mb-6">
        <!-- 左侧分类 -->
        <div class="flex items-center gap-2">
          <a-button
            :type="category === 'all' ? 'secondary' : 'text'"
            class="rounded-lg !text-gray-700 px-3"
            @click="category = 'all'"
            >全部
          </a-button>
          <a-button
            v-for="item in categories"
            :key="item.category"
            :type="category === item.category ? 'secondary' : 'text'"
            class="rounded-lg !text-gray-700 px-3"
            @click="category = item.category"
          >
            {{ item.name }}
          </a-button>
        </div>
        <!-- 右侧搜索 -->
        <a-input-search
          v-model="search_word"
          placeholder="请输入插件名称"
          class="w-[240px] bg-white rounded-lg border-gray-300"
        />
      </div>
      <!-- 底部插件列表 -->
      <a-row :gutter="[20, 20]" class="flex-1">
        <!-- 有数据的UI状态 -->
        <a-col v-for="(provider, idx) in filterProvides" :key="provider.name" :span="6">
          <a-card hoverable class="cursor-pointer rounded-lg" @click="showIdx = idx">
            <!-- 顶部提供商名称 -->
            <div class="flex items-center gap-3 mb-3">
              <!-- 左侧图标 -->
              <a-avatar :size="40" shape="square" :style="{ backgroundColor: provider.background }">
                <img
                  :src="`${apiPrefix}/builtin-tools/${provider.name}/icon`"
                  :alt="provider.name"
                />
              </a-avatar>
              <!-- 右侧工具信息 -->
              <div class="flex flex-col">
                <div class="text-base text-gray-900 font-bold">{{ provider.label }}</div>
                <div class="text-xs text-gray-500 line-clamp-1">
                  提供商 {{ provider.name }} · {{ provider.tools.length }} 插件
                </div>
              </div>
            </div>
            <!-- 提供商的描述信息 -->
            <div class="leading-[18px] text-gray-500 h-[72px] line-clamp-4 mb-2">
              {{ provider.description }}
            </div>
            <!-- 提供商的发布信息 -->
            <div class="flex items-center gap-1.5">
              <a-avatar :size="18" class="bg-blue-700">
                <icon-user />
              </a-avatar>
              <div class="text-xs text-gray-400">
                LLMOps · 发布时间 {{ moment(provider.created_at).format('YYYY-MM-DD HH:mm') }}
              </div>
            </div>
          </a-card>
        </a-col>
        <!-- 没数据的UI状态 -->
        <a-col v-if="filterProvides.length === 0" :span="24">
          <a-empty
            description="没有可用的内置插件"
            class="h-[400px] flex flex-col items-center justify-center"
          />
        </a-col>
      </a-row>
      <!-- 卡片抽屉 -->
      <a-drawer
        :visible="showIdx != -1"
        :width="350"
        :footer="false"
        title="工具详情"
        :drawer-style="{ background: '#F9FAFB' }"
        @cancel="showIdx = -1"
      >
        <!-- 外部容器，用于判断showIdx是否为-1,为-1时候就不显示 -->
        <div v-if="showIdx != -1" class="">
          <!-- 顶部提供商名称 -->
          <div class="flex items-center gap-3 mb-3">
            <!-- 左侧图标 -->
            <a-avatar
              :size="40"
              shape="square"
              :style="{ backgroundColor: filterProvides[showIdx].background }"
            >
              <img
                :src="`${apiPrefix}/builtin-tools/${filterProvides[showIdx].name}/icon`"
                :alt="filterProvides[showIdx].name"
              />
            </a-avatar>
            <!-- 右侧工具信息 -->
            <div class="flex flex-col">
              <div class="text-base text-gray-900 font-bold">
                {{ filterProvides[showIdx].label }}
              </div>
              <div class="text-xs text-gray-500 line-clamp-1">
                提供商 {{ filterProvides[showIdx].name }} ·
                {{ filterProvides[showIdx].tools.length }} 插件
              </div>
            </div>
          </div>
          <!-- 提供商的描述信息 -->
          <div class="leading-[18px] text-gray-500 mb-2">
            {{ filterProvides[showIdx].description }}
          </div>
          <!-- 分隔符 -->
          <hr class="my-4" />
          <!-- 提供者工具 -->
          <div class="flex flex-col gap-2">
            <div class="text-xs text-gray-500">
              包含 {{ filterProvides[showIdx].tools.length }} 个工具
            </div>
            <!-- 工具列表 -->
            <a-card
              v-for="tool in filterProvides[showIdx].tools"
              :key="tool.name"
              class="cursor-pointer flex flex-col rounded-xl"
            >
              <!-- 工具名称 -->
              <div class="font-bold text-gray-900 mb-2">{{ tool.label }}</div>
              <!-- 工具描述 -->
              <div class="text-gray-500 text-xs">{{ tool.description }}</div>
              <!-- 工具参数 -->
              <div v-if="tool.inputs.length > 0" class="">
                <!-- 分隔符 -->
                <div class="flex items-center gap-2 my-4">
                  <div class="text-xs font-bold text-gray-500">参数</div>
                  <hr class="flex-1" />
                </div>
                <!-- 参数列表 -->
                <div class="flex flex-col gap-4">
                  <div
                    v-for="toolInput in tool.inputs"
                    :key="toolInput.name"
                    class="flex flex-col gap-2"
                  >
                    <!-- 上半部分 -->
                    <div class="flex items-center gap-2 text-xs">
                      <div class="text-gray-900 font-bold">{{ toolInput.name }}</div>
                      <div class="text-gray-500">{{ typeMap[toolInput.type] }}</div>
                      <div v-if="toolInput.required" class="text-red-700">必填</div>
                    </div>
                    <!-- 参数描述信息 -->
                    <div class="text-xs text-gray-500">{{ toolInput.description }}</div>
                  </div>
                </div>
              </div>
            </a-card>
          </div>
        </div>
      </a-drawer>
    </div>
  </a-spin>
</template>

<style scoped></style>
