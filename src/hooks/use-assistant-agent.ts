import { ref } from 'vue'
import {
  assistantAgentChat,
  deleteAssistantAgentConversation,
  getAssistantAgentMessagesWithPage,
  stopAssistantAgentChat,
} from '@/service/assistant-agent.ts'
import type { GetAssistantAgentMessagesWithPageResponse } from '@/models/assistant-agent.ts'
import { Message } from '@arco-design/web-vue'

export const useAssistantAgentChat = () => {
  // 1.定义自定义hooks所需数据
  const loading = ref(false)

  // 2.定义辅助Agent会话处理器
  const handleAssistantAgentChat = async (
    query: string,
    image_urls: string[] = [],
    onData: (event_response: Record<string, any>) => void,
  ) => {
    try {
      loading.value = true
      await assistantAgentChat(query, image_urls, onData)
    } finally {
      loading.value = false
    }
  }

  return { loading, handleAssistantAgentChat }
}

export const useStopAssistantAgentChat = () => {
  // 1.定义hooks所需数据
  const loading = ref(false)

  // 2.定义停止辅助Agent会话处理器
  const handleStopAssistantAgentChat = async (task_id: string) => {
    try {
      loading.value = true
      await stopAssistantAgentChat(task_id)
    } finally {
      loading.value = false
    }
  }

  return { loading, handleStopAssistantAgentChat }
}

export const useGetAssistantAgentMessagesWithPage = () => {
  // 1.定义hooks所需数据
  const loading = ref(false)
  const messages = ref<GetAssistantAgentMessagesWithPageResponse['data']['list']>([])
  const created_at = ref(0)
  const defaultPaginator = {
    current_page: 1,
    page_size: 5,
    total_page: 0,
    total_record: 0,
  }
  const paginator = ref({ ...defaultPaginator })

  // 2.定义加载数据函数
  const loadAssistantAgentMessages = async (init: boolean = false) => {
    // 2.1 判断是否是初始化，如果是则先初始化分页器
    if (init) {
      paginator.value = { ...defaultPaginator }
      created_at.value = 0
    } else if (paginator.value.current_page > paginator.value.total_page) {
      return
    }

    // 2.2 加载更多数据
    try {
      loading.value = true
      const resp = await getAssistantAgentMessagesWithPage({
        current_page: paginator.value.current_page,
        page_size: paginator.value.page_size,
        created_at: created_at.value,
      })
      const data = resp.data

      // 2.3 更新分页器
      paginator.value = data.paginator

      // 2.4 判断是否存在更多数据
      if (paginator.value.current_page <= paginator.value.total_page) {
        paginator.value.current_page += 1
      }

      // 2.5 追加或者覆盖数据
      if (init) {
        messages.value = data.list
      } else {
        messages.value.push(...data.list)
        created_at.value = data.list[0]?.created_at ?? 0
      }
    } finally {
      // messages.value.push(
      //   ...[
      //     {
      //       id: '1221',
      //       conversation_id: '212121',
      //       query: '帮我看一下2025年4月的黄金走势',
      //       answer:
      //         '2025年4月黄金走势可能呈现以下特点：\n' +
      //         '\n' +
      //         '### 短期趋势：\n' +
      //         '1. **技术性回调压力**：金价在3月突破3000美元后，部分获利盘可能离场，叠加市场对前期快速上涨的消化需求，4月可能出现短期回调或盘整。\n' +
      //         '2. **关税政策影响**：美国4月关税政策细节若落地，可能缓解市场对贸易紧张的担忧，短期削弱避险需求，导致金价回调。\n' +
      //         '\n' +
      //         '### 中长期支撑因素：\n' +
      //         '1. **美联储降息预期**：若美国经济数据疲软（如失业率上升、通胀回落），市场对美联储三季度降息的预期将升温，推动金价向3200美元甚至更高目标迈进。\n' +
      //         '2. **地缘政治风险**：中东局势持续紧张（如巴以冲突、胡塞武装行动）、全球去美元化趋势及央行持续购金（尤其是中国、印度等国）将为金价提供长期支撑。\n' +
      //         '3. **美元疲软**：美元指数走弱直接利好以美元计价的黄金，若美元延续跌势，金价上行空间将进一步打开。\n' +
      //         '\n' +
      //         '### 机构观点：\n' +
      //         '- **乐观预期**：瑞银、高盛等机构上调目标价至3200美元，麦格理甚至预测三季度金价可能冲击3500美元。\n' +
      //         '- **谨慎提醒**：法兴银行指出，若贸易紧张局势缓和或美联储降息信号不明，金价下半年涨势可能受限。\n' +
      //         '\n' +
      //         '### 总结：\n' +
      //         '4月金价或先经历短期回调，但中长期在避险需求、宽松货币政策预期及央行购金支撑下仍具备上行空间。投资者需关注美联储政策动向、地缘冲突进展及关税政策细节，建议分批布局，控制仓位以应对短期波动。',
      //       total_token_count: 2121,
      //       latency: 2,
      //       agent_thoughts: [],
      //       created_at: 0,
      //     },
      //   ],
      // )
      loading.value = false
    }
  }

  return { loading, messages, paginator, loadAssistantAgentMessages }
}

export const useDeleteAssistantAgentConversation = () => {
  // 1.定义hooks所需数据
  const loading = ref(false)

  // 2.定义删除调试会话处理器
  const handleDeleteAssistantAgentConversation = async () => {
    try {
      loading.value = true
      const resp = await deleteAssistantAgentConversation()
      Message.success(resp.message)
    } finally {
      loading.value = false
    }
  }

  return { loading, handleDeleteAssistantAgentConversation }
}
