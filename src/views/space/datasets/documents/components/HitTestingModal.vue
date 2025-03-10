<script setup lang="ts">
import { ref } from 'vue'
import moment from 'moment'

// 1. 定义召回测试组件所需的基础数据
const props = defineProps({
  visible: { type: Boolean, required: true },
  dataset_id: { type: String, required: true },
})
const emits = defineEmits(['update:visible'])
const loading = ref(false)
const data = [
  {
    id: '26834b62-8bb4-410b-a626-00aded4892b9',
    dataset_id: 'e1baf52a-1be2-4b93-ad62-6fad72f1ec37',
    query: '慕课网LLMOps是什么？',
    source: 'Hit Testing',
    created_at: 1726858849,
  },
  {
    id: 'c9fdef30-e821-480c-be6f-e355ab40eb7d',
    query: '想学习flask，有什么建议么？',
    source: 'hit_testing',
    created_at: 1728782165,
    dataset_id: 'f3f28f75-8e60-4eba-b6df-4d1b390bbd89',
  },
  {
    id: '14ca23f5-2d51-4aee-b0e2-abc83a6ddffa',
    query: '想学习flask，有什么建议么？',
    source: 'hit_testing',
    created_at: 1728782165,
    dataset_id: 'f3f28f75-8e60-4eba-b6df-4d1b390bbd89',
  },
  {
    id: '21f75ca5-ed0c-4369-8c2a-6dfb4842b3d1',
    query: '想学习flask，有什么建议么？',
    source: 'hit_testing',
    dataset_id: 'f3f28f75-8e60-4eba-b6df-4d1b390bbd89',
    created_at: 1728782165,
  },
]

// 2. 定义关闭模态窗函数，之下关闭模态窗并重置表单+表格数据
const hideModal = () => {
  emits('update:visible', false)
}
</script>

<template>
  <div class="">
    <!-- 召回测试模态窗 -->
    <a-modal
      :width="1000"
      :visible="true"
      hide-title
      :footer="false"
      modal-class="rounded-xl h-3/4 overflow-auto scrollbar-w-none"
      @cancel="hideModal"
    >
      <!-- 顶部标题 -->
      <div class="flex items-center justify-between">
        <div class="text-lg font-bold text-gray-700">召回测试</div>
        <a-button type="text" class="!text-gray-700" size="small" @click="hideModal">
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
                <a-button size="small" class="rounded-lg px-2">
                  <template #icon>
                    <icon-pushpin />
                  </template>
                  向量检索
                </a-button>
              </div>
              <!-- 输入框容器 -->
              <div class="bg-white rounded-lg p-2">
                <!-- 输入框 -->
                <a-textarea
                  placeholder="请输入文本，建议使用简短的陈述句"
                  :max-length="200"
                  :auto-size="{ minRows: 6, maxRows: 6 }"
                  class="!bg-white !border-0 mb-1"
                />
                <!-- 字符限制以及召回按钮 -->
                <div class="flex items-center justify-between">
                  <a-tag size="small" class="rounded text-gray-700">0/200</a-tag>
                  <a-button type="primary" size="small" class="rounded-lg">召回测试</a-button>
                </div>
              </div>
            </div>
            <!-- 底部最近查询 -->
            <div class="">
              <div class="text-gray-700 font-bold mb-4">最近查询</div>
              <a-table :pagination="false" size="small" :bordered="{ wrapper: false }" :data="data">
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
                  >
                    <template #cell="{ record }">
                      <div class="">
                        {{ moment(record.created_at * 1000).format('YYYY-MM-DD HH:mm:ss') }}
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
            <a-row :gutter="[16, 16]">
              <a-col v-for="n in 10" :key="n" :span="12">
                <div class="p-4 bg-gray-50 rounded-lg cursor-pointer">
                  <!-- 顶部得分部分 -->
                  <div class="flex items-center gap-2 mb-1.5">
                    <icon-pushpin />
                    <a-progress :stroke-width="6" :show-text="false" :percent="0.45" />
                    <div class="text-gray-700 text-xs">0.45</div>
                  </div>
                  <!-- 中间内容部分 -->
                  <div class="text-gray-500 line-clamp-4">
                    ## 角色
                    你是一个拥有10年经验的资深Python工程师，精通Flask/SQLAlchemy等，能熟练使用各类IDEA
                  </div>
                  <!-- 文档归属信息 -->
                  <a-divider class="my-2" />
                  <div class="flex items-center gap-2 text-gray-500 text-xs">
                    <icon-file class="flex-shrink-0" />
                    <div class="line-clamp-1">课程Prompt提示词.txt</div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </a-modal>
    <!-- 检索设置模态窗 -->
    <a-modal :visible="true" hide-title :footer="false" modal-class="rounded-xl">
      <!-- 顶部标题 -->
      <div class="flex items-center justify-between">
        <div class="text-lg font-bold text-gray-700">检索设置</div>
        <a-button type="text" class="!text-gray-700" size="small" @click="hideModal">
          <template #icon>
            <icon-close />
          </template>
        </a-button>
      </div>
      <!-- 中间表单内容 -->
      <a-form class="pt-6">
        <a-form-item field="retrieval_strategy" label="检索策略" label-align="left">
          <a-radio-group
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
            <a-slider :step="1" :min="1" :max="10" />
            <a-input-number class="w-[80px]" :default-value="4" />
          </div>
        </a-form-item>
        <a-form-item field="k" label="最小匹配度">
          <div class="flex items-center gap-4 w-full pl-3">
            <a-slider :step="0.01" :min="0" :max="0.99" />
            <a-input-number class="w-[80px]" :default-value="0.5" />
          </div>
        </a-form-item>
        <!-- 底部按钮 -->
        <div class="flex items-center justify-between">
          <div class=""></div>
          <a-space :size="16">
            <a-button class="rounded-lg" @click="hideModal">取消</a-button>
            <a-button :loading="loading" type="primary" html-type="submit" class="rounded-lg">
              保存
            </a-button>
          </a-space>
        </div>
      </a-form>
    </a-modal>
  </div>
</template>

<style scoped></style>
