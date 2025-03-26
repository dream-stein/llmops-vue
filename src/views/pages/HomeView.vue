<script setup lang="ts">
// @ts-ignore
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import { nextTick, onMounted, ref } from 'vue'
import { useGenerateSuggestedQuestions } from '@/hooks/use-ai.ts'
import { useAccountStore } from '@/stores/account.ts'
import AssistantAgentBackground from '@/assets/images/assistant-agent-background.png'
import { Message } from '@arco-design/web-vue'
import { QueueEvent } from '@/config'
import HumanMessage from '@/views/space/apps/component/HumanMessage.vue'
import AiMessage from '@/views/space/apps/component/AiMessage.vue'

// 1.定义页面所需数据
const query = ref('')
const task_id = ref('')
const message_id = ref('')
const scroller = ref<any>(null)
const scrollHeight = ref(0)
const accountStore = useAccountStore()
const assistantAgentChatLoading = ref(false)
const stopAssistantAgentChatLoading = ref(false)
const opening_questions = ['什么是LLMOps?', '我想创建一个应用', '能介绍下什么是RAG吗?']
const { suggested_questions, handleGenerateSuggestedQuestions } = useGenerateSuggestedQuestions()
const messages = [
  {
    id: '1221',
    conversation_id: '212121',
    query: '帮我看一下2025年4月的黄金走势',
    answer:
      '\n' +
      '2025年4月黄金走势可能呈现以下特点：\n' +
      '\n' +
      '### 短期趋势：\n' +
      '1. **技术性回调压力**：金价在3月突破3000美元后，部分获利盘可能离场，叠加市场对前期快速上涨的消化需求，4月可能出现短期回调或盘整。\n' +
      '2. **关税政策影响**：美国4月关税政策细节若落地，可能缓解市场对贸易紧张的担忧，短期削弱避险需求，导致金价回调。\n' +
      '\n' +
      '### 中长期支撑因素：\n' +
      '1. **美联储降息预期**：若美国经济数据疲软（如失业率上升、通胀回落），市场对美联储三季度降息的预期将升温，推动金价向3200美元甚至更高目标迈进。\n' +
      '2. **地缘政治风险**：中东局势持续紧张（如巴以冲突、胡塞武装行动）、全球去美元化趋势及央行持续购金（尤其是中国、印度等国）将为金价提供长期支撑。\n' +
      '3. **美元疲软**：美元指数走弱直接利好以美元计价的黄金，若美元延续跌势，金价上行空间将进一步打开。\n' +
      '\n' +
      '### 机构观点：\n' +
      '- **乐观预期**：瑞银、高盛等机构上调目标价至3200美元，麦格理甚至预测三季度金价可能冲击3500美元。\n' +
      '- **谨慎提醒**：法兴银行指出，若贸易紧张局势缓和或美联储降息信号不明，金价下半年涨势可能受限。\n' +
      '\n' +
      '### 总结：\n' +
      '4月金价或先经历短期回调，但中长期在避险需求、宽松货币政策预期及央行购金支撑下仍具备上行空间。投资者需关注美联储政策动向、地缘冲突进展及关税政策细节，建议分批布局，控制仓位以应对短期波动。',
    total_token_count: 2121,
    latency: 2,
    agent_thoughts: [],
    created_at: 0,
  },
]

// 8.页面DOM加载完毕时初始化数据
onMounted(() => {})
</script>

<template>
  <div
    class="w-full h-full min-h-screen bg-gray-100 bg-cover bg-no-repeat bg-center"
    :style="{ backgroundImage: `url(${AssistantAgentBackground})` }"
  >
    <!-- 中间页面信息 -->
    <div class="w-[600px] h-full min-h-screen mx-auto">
      <!-- 历史对话记录 -->
      <div
        v-if="messages.length > 0"
        class="flex flex-col px-6 h-[calc(100%-100px)] min-h-[calc(100vh-100px)]"
      >
        <dynamic-scroller
          ref="scroller"
          :items="messages.slice().reverse()"
          :min-item-size="1"
          @scroll="() => {}"
          class="h-full scrollbar-w-none"
        >
          <template v-slot="{ item, index, active }">
            <dynamic-scroller-item :item="item" :active="active" :data-index="item.id">
              <div class="flex flex-col gap-6 py-6">
                <human-message :query="item.query" :account="accountStore.account" />
                <ai-message
                  :agent_thoughts="item.agent_thoughts"
                  :answer="item.answer"
                  :app="{ name: '辅助Agent' }"
                  :suggested_questions="item.id === message_id ? suggested_questions : []"
                  :loading="item.id === message_id && assistantAgentChatLoading"
                  :latency="item.latency"
                  :total_token_count="item.total_token_count"
                  message_class="bg-white"
                  @select-suggested-question="() => {}"
                />
              </div>
            </dynamic-scroller-item>
          </template>
        </dynamic-scroller>
        <!-- 停止调试会话 -->
        <div
          v-if="task_id && assistantAgentChatLoading"
          class="h-[50px] flex items-center justify-center"
        >
          <a-button
            :loading="stopAssistantAgentChatLoading"
            class="rounded-lg px-2"
            @click="() => {}"
          >
            <template #icon>
              <icon-poweroff />
            </template>
            停止响应
          </a-button>
        </div>
      </div>
      <!-- 对话记录为空时展示的对话开场白 -->
      <div
        v-else
        class="flex flex-col p-6 gap-2 items-center justify-center overflow-scroll scrollbar-w-none h-[calc(100%-100px)] min-h-[calc(100vh-100px)]"
      >
        <div class="mb-9">
          <div class="text-[40px] font-bold text-gray-700 mt-[52px] mb-4">
            Hi，我是 AI 应用构建器
          </div>
          <div class="text-[30px] font-bold text-gray-700 mb-2">
            你的专属
            <span class="text-blue-700">AI 原生应用</span>
            开发平台
          </div>
          <div class="text-base text-gray-700">
            说出你的创意，我可以快速帮你创建专属应用，一键轻松分享给朋友，也可以一键发布到 LLMOps
            平台、微信等多个渠道。
          </div>
        </div>
        <!-- 开场AI对话消息 -->
        <div class="flex gap-2">
          <!-- 左侧图标 -->
          <a-avatar :size="30" shape="circle" class="flex-shrink-0 bg-blue-700">
            <icon-apps />
          </a-avatar>
          <!-- 右侧名称与消息 -->
          <div class="flex flex-col items-start gap-2">
            <!-- 应用名称 -->
            <div class="text-gray-700 font-bold">辅助Agent</div>
            <!-- AI消息 -->
            <div
              class="bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-2xl break-all leading-7"
            >
              <div class="font-bold">你好，欢迎来到LLMOps🎉</div>
              <div class="">
                LLMOps是新一代大模型 AI 应用开发平台。无论你是否有编程基础，都可以快速搭建出各种 AI
                应用，并一键发布到各大社交平台，或者轻松部署到自己的网站。
              </div>
              <ul class="list-disc pl-6">
                <li>
                  随时来
                  <router-link :to="{ name: 'store-apps-list' }" class="text-blue-700"
                    >应用广场
                  </router-link>
                  逛逛，这里内置了许多超有趣的应用。
                </li>
                <li>你也可以直接发送“我想做一个应用”，我可以帮你快速创建应用。</li>
                <li>你也可以向我提问有关课程的问题，我可以快速替你解答。</li>
              </ul>
              <div class="">如果你还有其他LLMOps使用问题，也欢迎随时问我！</div>
            </div>
            <!-- 开场白建议问题 -->
            <div class="flex flex-col gap-2">
              <div
                v-for="(opening_question, idx) in opening_questions"
                :key="idx"
                class="px-4 py-1.5 border rounded-lg text-gray-700 cursor-pointer bg-white hover:bg-gray-50"
                @click="() => {}"
              >
                {{ opening_question }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 对话输入框 -->
      <div class="w-full flex flex-col flex-shrink-0">
        <!-- 顶部输入框 -->
        <div class="px-6 flex items-center gap-4">
          <!-- 清除按钮 -->
          <a-button
            class="flex-shrink-0 !text-gray-700"
            type="text"
            shape="circle"
            @click="() => {}"
          >
            <template #icon>
              <icon-empty :size="16" />
            </template>
          </a-button>
          <!-- 输入框组件 -->
          <div
            class="bg-white h-[50px] flex items-center gap-2 px-4 flex-1 border border-gray-200 rounded-full"
          >
            <input
              v-model="query"
              type="text"
              class="flex-1 outline-0"
              placeholder="发送消息或创建AI应用..."
              @keyup.enter="() => {}"
            />
            <a-button type="text" shape="circle" class="!text-gray-700" @click="() => {}">
              <template #icon>
                <icon-send :size="16" />
              </template>
            </a-button>
          </div>
        </div>
        <!-- 底部提示消息 -->
        <div class="text-center text-gray-500 text-xs py-4">
          内容由AI生成，无法确保真实准确，仅供参考。
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
