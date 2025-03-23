import { onMounted, reactive, ref } from 'vue'
import {
  cancelPublish,
  debugChat,
  deleteDebugConversation,
  fallbackHistoryToDraft,
  getApp,
  getDebugConversationMessagesWithPage,
  getDebugConversationSummary,
  getDraftAppConfig,
  getPublishHistoriesWithPage,
  publish,
  stopDebugChat,
  updateDebugConversationSummary,
  updateDraftAppConfig,
} from '@/service/app.ts'
import { Message, Modal } from '@arco-design/web-vue'
import type {
  GetDebugConversationMessagesWithPageResponse,
  UpdateDraftAppConfigRequest,
} from '@/models/app.ts'

export const useGetApp = (app_id: string) => {
  // 1. 定义hooks所属的基础数据
  const loading = ref(false)
  const app = reactive<Record<string, any>>({})

  // 2. 定义加载数据所需的函数
  const loadApp = async (app_id: string) => {
    try {
      loading.value = true
      const resp = await getApp(app_id)
      const data = resp.data

      Object.assign(app, { ...data })
    } finally {
      Object.assign(app, {
        id: '122121',
        debug_conversation_id: '12121',
        name: 'LLM应用产品经理',
        icon: 'https://preview.qiantucdn.com/freepik/512/4940/4940840.png%21qt_h320',
        description: '',
        status: 'draft',
        draft_updated_at: 1742225012,
        updated_at: 1742225012,
        created_at: 1742225012,
      })
      loading.value = false
    }
  }

  // 3. 页面DOM加载完毕时加载一次数据
  onMounted(async () => await loadApp(app_id))

  return { loading, app, loadApp }
}

export const usePublish = () => {
  // 1. 定义hooks所需的数据
  const loading = ref(false)

  // 2. 定义更新发布处理器
  const handlePublish = async (app_id: string) => {
    try {
      loading.value = true
      const resp = await publish(app_id)
      Message.success(resp.message)
    } finally {
      loading.value = false
    }
  }

  return { loading, handlePublish }
}

export const useCancelPublish = () => {
  // 1. 定义hooks所需的数据
  const loading = ref(false)

  // 2. 定义取消发布处理器
  const handleCancelPublish = async (app_id: string, callback?: () => void) => {
    // 2.1 打开弹窗提示
    Modal.warning({
      title: '要取消发布该Agent应用吗?',
      content:
        '取消发布后，WebApp以及发布的社交平台均无法使用该Agent，如需更新WebApp地址，请使用地址重新生成功能',
      hideCancel: false,
      onOk: async () => {
        try {
          // 2.2 点击确定向API接口发起请求
          loading.value = true
          const resp = await cancelPublish(app_id)
          Message.success(resp.message)
        } finally {
          // 2.3 调用callback函数指定回调功能
          loading.value = false
          callback && callback()
        }
      },
    })
  }

  return { loading, handleCancelPublish }
}

export const useGetPublishHistoriesWithPage = () => {
  // 1. 定义hooks所需的数据
  const loading = ref(false)
  const defaultPaginator = {
    current_page: 1,
    page_size: 20,
    total_page: 0,
    total_record: 0,
  }
  const publishHistories = reactive<Array<Record<string, any>>>([])
  const paginator = reactive({ ...defaultPaginator })

  // 2. 定义加载数据函数
  const loadPublishHistories = async (app_id: string, init: boolean = false) => {
    try {
      // 2.1 判断是否为初始化，如果是则先初始化分页器
      if (init) {
        Object.assign(paginator, { ...defaultPaginator })
      } else if (paginator.current_page > paginator.total_page) {
        return
      }

      // 2.2 调用API接口获取数据
      loading.value = true
      const resp = await getPublishHistoriesWithPage(app_id, {
        current_page: paginator.current_page,
        page_size: paginator.page_size,
      })
      const data = resp.data

      // 2.3 更新分页器数据
      paginator.current_page = data.paginator.current_page
      paginator.page_size = data.paginator.page_size
      paginator.total_page = data.paginator.total_page
      paginator.total_record = data.paginator.total_record

      // 2.4 是否存在更多数据
      if (paginator.current_page <= paginator.total_page) {
        paginator.current_page += 1
      }

      // 2.5 检测是追加数据还是覆盖数据
      if (init) {
        publishHistories.splice(0, publishHistories.length, ...data.list)
      } else {
        publishHistories.push(...data.list)
      }
    } finally {
      publishHistories.splice(
        0,
        paginator.total_page,
        ...[
          {
            id: '2121-3211',
            version: 2,
            created_at: 1742225012,
          },
          {
            id: '2121-3221',
            version: 1,
            created_at: 1742225012,
          },
        ],
      )
      loading.value = false
    }
  }
  return { loading, publishHistories, paginator, loadPublishHistories }
}

export const useFallbackHistoryToDraft = () => {
  // 1. 定义hooks所需的数据
  const loading = ref(false)

  // 2. 定义回退处理器
  const handleFallbackHistoryToDraft = async (
    app_id: string,
    app_config_version_id: string,
    callback?: () => void,
  ) => {
    try {
      loading.value = true
      const resp = await fallbackHistoryToDraft(app_id, app_config_version_id)
      Message.success(resp.message)
    } finally {
      loading.value = false
      callback && callback()
    }
  }

  return { loading, handleFallbackHistoryToDraft }
}

export const useGetDraftAppConfig = (app_id: string) => {
  // 1. 定义hooks所需数据
  const loading = ref(false)
  const draftAppConfigForm = reactive<Record<string, any>>({})

  // 2. 定义加载数据函数
  const loadDraftAppConfig = async (app_id: string) => {
    try {
      // 2.1 修改loading状态并获取数据
      loading.value = true
      const resp = await getDraftAppConfig(app_id)
      const data = resp.data

      // 2.2 将数据同步到表单中
      Object.assign(draftAppConfigForm, {
        preset_prompt: data.preset_prompt,
        long_term_memory: data.long_term_memory,
        opening_statement: data.opening_statement,
        opening_questions: data.opening_questions,
        suggested_after_answer: data.suggested_after_answer,
        review_config: data.review_config,
        datasets: data.datasets,
        retrieval_config: data.retrieval_config,
        tools: data.tools,
      })
    } finally {
      Object.assign(draftAppConfigForm, {
        preset_prompt:
          '# 角色\n' +
          '你是一位拥有10年经验的产品经理，擅长分析用户需求和市场趋势，能够提供有效的产品解决方案和建议。\n' +
          '\n' +
          '## 技能\n' +
          '### 技能1: 用户需求分析\n' +
          '- 通过提问了解用户的具体需求和痛点。\n' +
          '- 结合市场调研数据，分析用户需求的合理性和可行性。\n' +
          '\n' +
          '### 技能2: 产品策略制定\n' +
          '- 根据用户反馈和市场趋势，制定产品发展策略。\n' +
          '- 提供产品定位、目标用户和竞争分析的建议。 ',
        long_term_memory: {
          enable: true,
        },
        opening_statement:
          '你好，我是PPT创意社的社长🙈，很高兴可以帮到你！我能帮助你根据“主题（xxx）+受众人群”生成整体写作思路和PPT大纲，还可以提供做好的PPT文件哦！ ',
        opening_questions: [
          '你知道什么是LLM吗？',
          '你知道什么是Agent吗？',
          '怎么学习Python呢？你有什么建议呢？',
        ],
        suggested_after_answer: true,
        review_config: {
          enable: true,
          keywords: ['1', '2', '3'],
          inputs_config: { enable: true, preset_response: '我是预设回复' },
          outputs_config: { enable: true },
        },
        datasets: [
          {
            id: '46db30d1-3199-4e79-a0cd-abf12fa6858f',
            name: 'book1',
            icon: 'https://pic.616pic.com/ys_bnew_img/00/21/26/W0Y78oDGoQ.jpg',
            description: 'i am book',
          },
        ],
        retrieval_config: {
          retrieval_strategy: 'full_text',
          k: 5,
          score: 0.09,
        },
        tools: [
          {
            type: 'builtin_tool',
            provider: {
              id: '121',
              name: 'google',
              label: 'google',
              icon: 'https://q2.itc.cn/q_70/images03/20240329/84cca9641e9444e5b3fe9256f095da6b.png',
              description: '我是提供商',
            },
            tool: {
              id: '22121',
              name: 'google搜索',
              label: 'search',
              description: '搜索',
              params: {},
            },
          },
        ],
      })
      loading.value = false
    }
  }

  onMounted(async () => await loadDraftAppConfig(app_id))

  return { loading, draftAppConfigForm, loadDraftAppConfig }
}

export const useUpdateDraftAppConfig = () => {
  // 1. 定义hooks所需数据
  const loading = ref(false)

  // 2. 定义更新草稿配置处理器
  const handleUpdateDraftAppConfig = async (
    app_id: string,
    draft_app_config: UpdateDraftAppConfigRequest,
  ) => {
    try {
      loading.value = true
      const resp = await updateDraftAppConfig(app_id, draft_app_config)
      Message.success(resp.message)
    } finally {
      loading.value = false
    }
  }

  return { loading, handleUpdateDraftAppConfig }
}

export const useGetDebugConversationSummary = () => {
  // 1. 定义hooks所需数据
  const loading = ref(false)
  const debug_conversation_summary = ref('')

  // 2. 定义数据加载函数
  const loadDebugConversationSummary = async (app_id: string) => {
    try {
      // 2.1 调用API获取记忆
      loading.value = true
      const resp = await getDebugConversationSummary(app_id)
      const data = resp.data

      debug_conversation_summary.value = data.summary
    } finally {
      debug_conversation_summary.value = '长记忆mock'
      loading.value = false
    }
  }

  return { loading, debug_conversation_summary, loadDebugConversationSummary }
}

export const useUpdateDebugConversationSummary = () => {
  // 1. 定义hooks所需数据
  const loading = ref(false)

  // 2. 定义更新处理器
  const handleUpdateDebugConversationSummary = async (app_id: string, summary: string) => {
    try {
      loading.value = true
      const resp = await updateDebugConversationSummary(app_id, summary)
      Message.success(resp.message)
    } finally {
      loading.value = false
    }
  }

  return { loading, handleUpdateDebugConversationSummary }
}

export const useDeleteDebugConversation = () => {
  // 1. 定义hooks所需数据
  const loading = ref(false)

  // 2. 定义删除调试会话处理器
  const handleDeleteDebugConversation = async (app_id: string) => {
    try {
      loading.value = true
      const resp = await deleteDebugConversation(app_id)
      Message.success(resp.message)
    } finally {
      loading.value = false
    }
  }

  return { loading, handleDeleteDebugConversation }
}

export const useGetDebugConversationMessagesWithPage = () => {
  // 1.定义hooks所需数据
  const loading = ref(false)
  const messages = ref<GetDebugConversationMessagesWithPageResponse['data']['list']>([])
  const created_at = ref(0)
  const defaultPaginator = {
    current_page: 1,
    page_size: 5,
    total_page: 0,
    total_record: 0,
  }
  const paginator = ref({ ...defaultPaginator })

  // 2.定义加载数据函数
  const loadDebugConversationMessages = async (app_id: string, init: boolean = false) => {
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
      const resp = await getDebugConversationMessagesWithPage(app_id, {
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
      messages.value.push(
        ...[
          {
            id: '12121',
            conversation_id: '211',
            query: '你好',
            answer:
              '# 角色\n' +
              '你是一位拥有10年经验的产品经理，擅长分析用户需求和市场趋势，能够提供有效的产品解决方案和建议。\n' +
              '\n' +
              '## 技能\n' +
              '### 技能1: 用户需求分析\n' +
              '- 通过提问了解用户的具体需求和痛点。\n' +
              '- 结合市场调研数据，分析用户需求的合理性和可行性。\n' +
              '\n' +
              '### 技能2: 产品策略制定\n' +
              '- 根据用户反馈和市场趋势，制定产品发展策略。\n' +
              '- 提供产品定位、目标用户和竞争分析的建议。 ',
            total_token_count: 12,
            latency: 21,
            agent_thoughts: [
              {
                id: '1',
                position: 1,
                event: 'long_term_memory_recall',
                thought: '21121',
                observation: '2211212',
                tool: '2121',
                latency: 0.1,
                created_at: 1742712792,
              },
              {
                id: '2',
                position: 2,
                event: 'agent_message',
                thought: '智能体的思考过程',
                observation: '233211212',
                tool: '2121',
                latency: 0.1,
                created_at: 1742712792,
              },
            ] as any,
            created_at: 1742712792,
          },
          {
            id: '121221',
            conversation_id: '2131',
            query: '为什么不好',
            answer:
              '好的，用户在使用Vue时遇到了“Duplicate identifier blockApiShell”的错误。我需要先理解这个错误的原因，然后给出解决方案。首先，这个错误通常与TypeScript相关，意味着某个标识符被重复声明了。\n' +
              '\n' +
              '用户提到的blockApiShell可能是一个变量、接口或类型，在代码中被多次定义。可能的情况有两种：一是用户在自己的代码中多次声明了同一个名称，二是引入的依赖中有重复的导出，比如第三方库或Vue本身可能有冲突的声明。\n' +
              '\n' +
              '接下来，我需要分步骤思考解决方案：\n' +
              '\n' +
              '1. **检查代码中的重复声明**：用户应该在自己的项目中搜索blockApiShell，查看是否有多个地方定义了这个变量或类型。例如，可能在两个不同的文件中都声明了同名的接口或变量，导致冲突。\n' +
              '\n' +
              '2. **检查依赖冲突**：如果用户的项目依赖了某个第三方库，或者更新了Vue的版本，可能存在两个不同的库导出了相同的名称。例如，可能同时安装了不同版本的库，或者Vue和其他库有冲突的类型定义。\n' +
              '\n' +
              '3. **使用命名空间或别名**：如果重复的声明来自无法修改的第三方库，可以考虑使用import别名来重命名其中一个引用，避免冲突。',
            total_token_count: 12,
            latency: 21,
            agent_thoughts: [],
            created_at: 1742712792,
          },
        ],
      )
      loading.value = false
    }
  }

  return { loading, messages, paginator, loadDebugConversationMessages }
}

export const useDebugChat = () => {
  // 1. 定义hooks所需数据
  const loading = ref(false)

  // 2. 定义调试会话处理器
  const handleDebugChat = async (
    app_id: string,
    query: string,
    onData: (event_response: Record<string, any>) => void,
  ) => {
    try {
      loading.value = true
      await debugChat(app_id, query, onData)
    } finally {
      loading.value = false
    }
  }

  return { loading, handleDebugChat }
}

export const useStopDebugChat = () => {
  // 1. 定义hooks所需数据
  const loading = ref(false)

  // 2. 定义停止调试会话处理器
  const handleStopDebugChat = async (app_id: string, task_id: string) => {
    try {
      loading.value = true
      await stopDebugChat(app_id, task_id)
    } finally {
      loading.value = false
    }
  }

  return { loading, handleStopDebugChat }
}
