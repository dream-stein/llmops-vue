<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import moment from 'moment'
import { getDatasetQueries, hit } from '@/service/dataset.ts'
import { Message } from '@arco-design/web-vue'

// 1. 定义组件接受数据以及事件
const props = defineProps({
  visible: { type: Boolean, required: true },
  dataset_id: { type: String, required: true },
})
const emits = defineEmits(['update:visible'])

// 2. 最近查询相关的内容
const queriesLoading = ref(false)
const queries = reactive<Array<any>>([])
const loadQueries = async () => {
  try {
    queriesLoading.value = true
    const resp = await getDatasetQueries(props.dataset_id)
    const data = resp.data
    queries.splice(0, queries.length, ...data)
  } finally {
    queriesLoading.value = false
  }
}

// 3. 知识库检索设置相关
const retrievalSettingModalVisible = ref(false)
const defaultRetrievalSetting = {
  retrieval_strategy: 'semantic',
  k: 5,
  score: 0.5,
}
const retrievalSettingForm = reactive({ ...defaultRetrievalSetting })
const hideRetrievalSettingModal = () => {
  // 复原检索策略
  Object.assign(retrievalSettingForm, { ...hitTestingForm })

  // 隐藏模态窗
  retrievalSettingModalVisible.value = false
}

const saveRetrievalSetting = () => {
  // 重置检索查询片段列表
  hitTestingSegments.splice(0, hitTestingSegments.length)

  // 更新检索策略
  Object.assign(hitTestingForm, { query: hitTestingForm.query, ...retrievalSettingForm })

  // 隐藏模态窗
  retrievalSettingModalVisible.value = false
}

// 4. 召回设置相关
const hitTestingLoading = ref(false)
const hitTestingSegments = reactive<Array<any>>([])
const hitTestingForm = reactive({
  query: '',
  ...defaultRetrievalSetting,
})
const hideHitTestingModal = () => emits('update:visible', false)
const handleHitTesting = async () => {
  // 检索的源文本为空
  if (hitTestingForm.query.trim() === '') {
    Message.error('检索源文本不能为空')
    return
  }
  try {
    hitTestingLoading.value = true
    const resp = await hit(props.dataset_id, hitTestingForm)
    const data = resp.data

    hitTestingSegments.splice(0, hitTestingSegments.length, ...data)

    await loadQueries()
  } finally {
    hitTestingSegments.splice(
      0,
      hitTestingSegments.length,
      ...[
        {
          id: '1',
          document: {
            id: '2',
            name: 'LLMOps项目API文档.md',
          },
          dataset_id: '3',
          position: 1,
          score: 0.54,
          content: '推荐技能',
          keywords: ['社交', 'App', '成本', '功能', '内容分发'],
          character_count: 487,
          token_count: 407,
          hit_count: 1,
          enabled: true,
          disabled_at: 0,
          status: 'completed',
          error: '',
          updated_at: 1726858854,
          created_at: 1726858854,
        },
        {
          id: '2',
          document: {
            id: '9',
            name: '天文学基础.md',
          },
          dataset_id: '3',
          position: 1,
          score: 0.99,
          content: '由于宇宙暗物质的摩擦而引发的光谱湮灭现象',
          keywords: ['社交', 'App', '成本', '功能', '内容分发'],
          character_count: 487,
          token_count: 407,
          hit_count: 1,
          enabled: true,
          disabled_at: 0,
          status: 'completed',
          error: '',
          updated_at: 1726858854,
          created_at: 1726858854,
        },
      ],
    )
    hitTestingLoading.value = false
  }
}

// 5. 监听数据变化
watch(
  () => props.visible,
  async (newValue) => {
    if (newValue) {
      await loadQueries()
    } else {
      // 模态窗关闭，情况最近查询、召回记录、初始化检索配置
      queries.splice(0, queries.length)
      hitTestingSegments.splice(0, hitTestingSegments.length)

      Object.assign(hitTestingForm, { query: '', ...defaultRetrievalSetting })
      Object.assign(retrievalSettingForm, { ...defaultRetrievalSetting })
    }
  },
)
</script>

<template>
  <div class="">
    <!-- 召回测试模态窗 -->
    <a-modal
      :width="1000"
      :visible="props.visible"
      hide-title
      :footer="false"
      modal-class="rounded-xl h-3/4 overflow-auto scrollbar-w-none"
      @cancel="hideHitTestingModal"
    >
      <!-- 顶部标题 -->
      <div class="flex items-center justify-between">
        <div class="text-lg font-bold text-gray-700">召回测试</div>
        <a-button type="text" class="!text-gray-700" size="small" @click="hideHitTestingModal">
          <template #icon>
            <icon-close />
          </template>
        </a-button>
      </div>
      <!-- 副标题 -->
      <div class="text-gray-500">基于给定的查询文本测试知识库的召回效果</div>
      <!-- 中间内容区 -->
      <div class="pt-6">
        <div class="w-full flex justify-between gap-2">
          <!-- 左侧输入框以及最近查询 -->
          <div class="flex flex-col w-1/2">
            <!-- 顶部输入框 -->
            <div class="border border-blue-700 bg-blue-100 rounded-lg flex flex-col mb-6">
              <!-- 输入框标题 -->
              <div class="flex items-center justify-between px-4 py-1.5">
                <div class="font-bold text-gray-900">源文本</div>
                <a-button
                  size="small"
                  class="rounded-lg px-2"
                  @click="retrievalSettingModalVisible = true"
                >
                  <template #icon>
                    <icon-language />
                  </template>
                  <div v-if="hitTestingForm.retrieval_strategy === 'semantic'" class="">
                    相似性检索
                  </div>
                  <div v-else-if="hitTestingForm.retrieval_strategy === 'full_text'" class="">
                    全文检索
                  </div>
                  <div v-else class="">混合检索</div>
                </a-button>
              </div>
              <!-- 输入框容器 -->
              <div class="bg-white rounded-lg p-2">
                <!-- 输入框 -->
                <a-textarea
                  v-model:model-value="hitTestingForm.query"
                  placeholder="请输入文本，建议使用简短的陈述句"
                  :max-length="200"
                  :auto-size="{ minRows: 6, maxRows: 6 }"
                  class="!bg-white !border-0 mb-1"
                />
                <!-- 字符限制以及召回按钮 -->
                <div class="flex items-center justify-between">
                  <a-tag size="small" class="rounded text-gray-700"
                    >{{ hitTestingForm.query.length }}/200
                  </a-tag>
                  <a-button
                    :loading="hitTestingLoading"
                    type="primary"
                    size="small"
                    class="rounded-lg"
                    @click="handleHitTesting"
                    >召回测试</a-button
                  >
                </div>
              </div>
            </div>
            <!-- 底部最近查询 -->
            <div class="">
              <div class="text-gray-700 font-bold mb-4">最近查询</div>
              <a-table
                :loading="queriesLoading"
                :pagination="false"
                size="small"
                :bordered="{ wrapper: false }"
                :data="queries"
                @row-click="(record) => (hitTestingForm.query = record.query)"
              >
                <template #columns>
                  <a-table-column
                    title="数据源"
                    data-index="source"
                    header-cell-class="text-gray-500 bg-transparent border-b font-bold"
                    cell-class="text-gray-500"
                    :width="110"
                  />
                  <a-table-column
                    title="文本"
                    data-index="query"
                    header-cell-class="text-gray-500 bg-transparent border-b font-bold"
                    cell-class="text-gray-500"
                  >
                    <template #cell="{ record }">
                      <div class="line-clamp-1">{{ record.query }}</div>
                    </template>
                  </a-table-column>
                  <a-table-column
                    title="时间"
                    data-index="created_at"
                    header-cell-class="text-gray-500 bg-transparent border-b font-bold"
                    cell-class="text-gray-500"
                    :width="160"
                  >
                    <template #cell="{ record }">
                      <div class="">
                        {{ moment(record.created_at).format('YYYY-MM-DD HH:mm') }}
                      </div>
                    </template>
                  </a-table-column>
                </template>
              </a-table>
            </div>
          </div>
          <a-divider direction="vertical" />
          <!-- 右侧召回列表 -->
          <div class="w-1/2">
            <a-spin :loading="hitTestingLoading" class="w-full">
              <!-- 有数据的姿态 -->
              <a-row v-if="hitTestingSegments.length > 0" :gutter="[16, 16]">
                <a-col v-for="segment in hitTestingSegments" :key="segment.id" :span="12">
                  <div class="p-4 bg-gray-50 rounded-lg cursor-pointer">
                    <!-- 顶部得分部分 -->
                    <div
                      v-if="hitTestingForm.retrieval_strategy === 'semantic'"
                      class="flex items-center gap-2 mb-1.5"
                    >
                      <icon-pushpin />
                      <a-progress :stroke-width="6" :show-text="false" :percent="segment.score" />
                      <div class="text-gray-700 text-xs">{{ segment.score.toFixed(2) }}</div>
                    </div>
                    <!-- 中间内容部分 -->
                    <div class="text-gray-500 line-clamp-4 h-[88px] break-all">
                      {{ segment.content }}
                    </div>
                    <!-- 文档归属信息 -->
                    <a-divider class="my-2" />
                    <div class="flex items-center gap-2 text-gray-500 text-xs">
                      <icon-file class="flex-shrink-0" />
                      <div class="line-clamp-1">{{ segment.document.name }}</div>
                    </div>
                  </div>
                </a-col>
              </a-row>
              <!-- 无数据的状态 -->
              <a-empty v-else />
            </a-spin>
          </div>
        </div>
      </div>
    </a-modal>
    <!-- 检索设置模态窗 -->
    <a-modal
      :visible="retrievalSettingModalVisible"
      hide-title
      :footer="false"
      modal-class="rounded-xl"
    >
      <!-- 顶部标题 -->
      <div class="flex items-center justify-between">
        <div class="text-lg font-bold text-gray-700">检索设置</div>
        <a-button
          type="text"
          class="!text-gray-700"
          size="small"
          @click="hideRetrievalSettingModal"
        >
          <template #icon>
            <icon-close />
          </template>
        </a-button>
      </div>
      <!-- 中间表单内容 -->
      <a-form :model="retrievalSettingForm" @submit="saveRetrievalSetting" class="pt-6">
        <a-form-item field="retrieval_strategy" label="检索策略" label-align="left">
          <a-radio-group
            v-model:model-value="retrievalSettingForm.retrieval_strategy"
            default-value="semantic"
            :options="[
              { label: '混合检索', value: 'hybrid' },
              { label: '文本检索', value: 'full_text' },
              { label: '相似度检索', value: 'semantic' },
            ]"
          />
        </a-form-item>
        <a-form-item field="k" label="最大召回数量">
          <div class="flex items-center gap-4 w-full pl-3">
            <a-slider v-model:model-value="retrievalSettingForm.k" :step="1" :min="1" :max="10" />
            <a-input-number
              v-model:model-value="retrievalSettingForm.k"
              class="w-[80px]"
              :default-value="4"
            />
          </div>
        </a-form-item>
        <a-form-item field="k" label="最小匹配度">
          <div class="flex items-center gap-4 w-full pl-3">
            <a-slider
              v-model:model-value="retrievalSettingForm.score"
              :step="0.01"
              :min="0"
              :max="0.99"
            />
            <a-input-number
              v-model:model-value="retrievalSettingForm.score"
              class="w-[80px]"
              :min="0"
              :max="0.99"
              :step="0.01"
              :precision="2"
              :default-value="0.5"
            />
          </div>
        </a-form-item>
        <!-- 底部按钮 -->
        <div class="flex items-center justify-between">
          <div class=""></div>
          <a-space :size="16">
            <a-button class="rounded-lg" @click="hideRetrievalSettingModal">取消</a-button>
            <a-button type="primary" html-type="submit" class="rounded-lg"> 保存 </a-button>
          </a-space>
        </div>
      </a-form>
    </a-modal>
  </div>
</template>

<style scoped></style>
