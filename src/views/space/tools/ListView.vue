<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getApiToolProvidersWithPage } from '@/service/api-tools.ts'
import moment from 'moment/moment'
import { typeMap } from '@/config'

const route = useRoute()
const providers = reactive<Array<any>>([])
const paginator = reactive({
  current_page: 1,
  page_size: 20,
  total_page: 0,
  total_record: 0,
})

const showIdx = ref<number>(-1)
const loading = ref<boolean>(false)

const loadMoreData = async (init: boolean = false) => {
  // 1. 检测下是否需要加载数据
  if (!init && paginator.current_page > paginator.total_page) return

  // 2. 加载更多数据并更新数据状态
  try {
    // 3. 调用接口获取响应数据
    loading.value = true
    const resp = await getApiToolProvidersWithPage(
      paginator.current_page,
      paginator.page_size,
      route.query?.search_word ?? '',
    )
    const data = resp.data

    // 4. 更新分页器
    paginator.current_page = data.paginator.current_page
    paginator.page_size = data.paginator.page_size
    paginator.total_page = data.paginator.total_page
    paginator.total_record = data.paginator.total_record

    // 5. 判断是否存在更多数据
    if (paginator.current_page <= paginator.total_page) {
      paginator.current_page += 1
    }

    // 6. 追加或者覆盖数据
    if (init) {
      providers.splice(0, providers.length, ...data.list)
    } else {
      providers.push(...data.list)
    }
  } finally {
    providers.push(
      ...[
        {
          idx: 0,
          icon: 'https://img2.baidu.com/it/u=3273113790,2053448389&fm=253&fmt=auto&app=138&f=PNG?w=240&h=240',
          name: '有道单词',
          tools: [
            {
              name: 'YoudaoSuggest',
              description: '这是一个查询下对应英文单词字典的工具',
              inputs: [
                {
                  name: 'q',
                  type: 'str',
                  description: '要检索查询的单词，例如love/computer',
                  required: true,
                },
                {
                  name: 'doctype',
                  type: 'str',
                  description: '返回的数据类型，支持json和xml两种格式，默认情况下json数据',
                  required: false,
                },
              ],
            },
            {
              name: 'YoudaoSuggest2',
              description: '这是一个查询下对应英文单词字典的工具',
              inputs: [
                {
                  name: 'q',
                  type: 'str',
                  description: '要检索查询的单词，例如love/computer',
                  required: true,
                },
                {
                  name: 'doctype',
                  type: 'str',
                  description: '返回的数据类型，支持json和xml两种格式，默认情况下json数据',
                  required: false,
                },
              ],
            },
          ],
          description: '这是一个查询下对应英文单词字典的工具',
          created_at: 1740324084000,
        },
      ],
    )
    loading.value = false
  }
}

const handleScroll = (event) => {
  // 1. 获取滚动距离，可滚动的最大距离，客户端/浏览器窗口的高度
  const { scrollTop, scrollHeight, clientHeight } = event.target

  // 2. 判断是否滑动到底部
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    if (loading.value) {
      return
    }
    loadMoreData()
  }
}

onMounted(async () => {
  await loadMoreData(true)
})

watch(
  () => route.query?.search_word,
  () => {
    // 1. 初始化分页器
    paginator.current_page = 1
    paginator.page_size = 20
    paginator.total_page = 0
    paginator.total_record = 0

    // 2. 调用数据加兹安完成初始化
    loadMoreData(true)
  },
)
</script>

<template>
  <a-spin
    :loading="loading"
    class="block h-full w-full scrollbar-w-none overflow-scroll"
    @scroll="handleScroll"
  >
    <!-- 底部插件列表 -->
    <a-row :gutter="[20, 20]" class="flex-1">
      <!-- 有数据的UI状态 -->
      <a-col v-for="(provider, idx) in providers" :key="provider.name" :span="6">
        <a-card hoverable class="cursor-pointer rounded-lg" @click="showIdx = idx">
          <!-- 顶部提供商名称 -->
          <div class="flex items-center gap-3 mb-3">
            <!-- 左侧图标 -->
            <a-avatar :size="40" shape="square" :image-url="provider.icon" />
            <!-- 右侧工具信息 -->
            <div class="flex flex-col">
              <div class="text-base text-gray-900 font-bold">{{ provider.name }}</div>
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
              慕小课 · 编辑时间 {{ moment(provider.created_at).format('YYYY-MM-DD HH:mm') }}
            </div>
          </div>
        </a-card>
      </a-col>
      <!-- 没数据的UI状态 -->
      <a-col v-if="providers.length === 0" :span="24">
        <a-empty
          description="没有可用的API插件"
          class="h-[400px] flex flex-col items-center justify-center"
        />
      </a-col>
    </a-row>
    <!-- 加载器 -->
    <a-row v-if="providers.length > 0">
      <!-- 数据加载中 -->
      <a-col v-if="paginator.current_page <= paginator.total_page" :span="24" align="center">
        <a-space class="my-4">
          <a-spin />
          <div class="text-gray-400">记载中</div>
        </a-space>
      </a-col>
      <!-- 数据加载完成 -->
      <a-col v-else :spellcheck="24" align="center">
        <div class="text-gray-400 my-4">数据已加载完成</div>
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
          <a-avatar :size="40" shape="square" :image-url="providers[showIdx].icon"> </a-avatar>
          <!-- 右侧工具信息 -->
          <div class="flex flex-col">
            <div class="text-base text-gray-900 font-bold">
              {{ providers[showIdx].name }}
            </div>
            <div class="text-xs text-gray-500 line-clamp-1">
              提供商 {{ providers[showIdx].name }} · {{ providers[showIdx].tools.length }} 插件
            </div>
          </div>
        </div>
        <!-- 提供商的描述信息 -->
        <div class="leading-[18px] text-gray-500 mb-2">
          {{ providers[showIdx].description }}
        </div>
        <!-- 分隔符 -->
        <hr class="my-4" />
        <!-- 提供者工具 -->
        <div class="flex flex-col gap-2">
          <div class="text-xs text-gray-500">包含 {{ providers[showIdx].tools.length }} 个工具</div>
          <!-- 工具列表 -->
          <a-card
            v-for="tool in providers[showIdx].tools"
            :key="tool.name"
            class="cursor-pointer flex flex-col rounded-xl"
          >
            <!-- 工具名称 -->
            <div class="font-bold text-gray-900 mb-2">{{ tool.name }}</div>
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
  </a-spin>
</template>

<style scoped></style>
