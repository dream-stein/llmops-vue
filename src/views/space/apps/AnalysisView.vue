<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import moment from 'moment'
import { useGetAppAnalysis } from '@/hooks/use-analysis.ts'

// 1.定义页面所需数据
const route = useRoute()
const { loading: getAppAnalysisLoading, app_analysis, loadAppAnalysis } = useGetAppAnalysis()

// 2.计算趋势数据，让其符合ECharts的格式

onMounted(() => {
  loadAppAnalysis(route.params?.app_id as string)
})
</script>

<template>
  <div class="px-6 py-5 overflow-scroll scrollbar-w-none">
    <!-- 概览指标 -->
    <div class="flex flex-col gap-5 mb-5">
      <!-- 标题 -->
      <div class="flex items-baseline gap-1">
        <div class="text-base text-gray-700 font-semibold">概览指标</div>
        <div class="text-xs text-gray-500">(过去7天)</div>
      </div>
      <!-- 指标卡片 -->
      <a-spin :loading="getAppAnalysisLoading">
        <div class="flex items-center gap-4">
          <overview-indicator
            title="全部会话数"
            help="反映 AI 每天的会话消息总数，在指定的时间范围内，用户对应用发起的请求总次数，一问一答记一次，用于衡量用户活跃度。"
            unit="次"
            :data="app_analysis?.total_messages?.data"
            :pop="app_analysis?.total_messages?.pop"
          >
            <template #icon>
              <icon-dashboard class="text-black" />
            </template>
          </overview-indicator>
        </div>
      </a-spin>
    </div>
    <!-- 指标详情 -->
    <div class="flex flex-col gap-5">
      <!-- 标题 -->
      <div class="flex items-baseline gap-1">
        <div class="text-base text-gray-700 font-semibold">详情指标</div>
        <div class="text-xs text-gray-500">(过去7天)</div>
      </div>
      <!-- 可视化图表 -->
      <a-spin>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col bg-white rounded-lg border border-gray-200 p-4 h-[300px]">
            <!-- 标题 -->
            <div class="flex items-center gap-2 mb-1 flex-shrink-0">
              <div class="text-gray-700 font-bold">全部会话数</div>
              <a-tooltip
                content="反映 AI 每天的会话消息总数，在指定的时间范围内，用户对应用发起的请求总次数，一问一答记一次，用于衡量用户活跃度。"
              >
                <icon-question-circle-fill />
              </a-tooltip>
            </div>
            <!-- 副标题 -->
            <div class="text-gray-500 mb-1 flex-shrink-0">过去7天</div>
          </div>
        </div>
      </a-spin>
    </div>
  </div>
</template>

<style scoped></style>
