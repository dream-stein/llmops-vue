import { onMounted, reactive, ref } from 'vue'
import {
  cancelPublish,
  fallbackHistoryToDraft,
  getApp,
  getDebugConversationSummary,
  getDraftAppConfig,
  getPublishHistoriesWithPage,
  publish,
  updateDebugConversationSummary,
  updateDraftAppConfig,
} from '@/service/app.ts'
import { Message, Modal } from '@arco-design/web-vue'
import type { UpdateDraftAppConfigRequest } from '@/models/app.ts'
import { optimizePrompt } from '@/service/ai.ts'

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
        name: 'LLMOps',
        icon: 'https://img2.baidu.com/it/u=4067866627,2025998864&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
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

export const useOptimizePrompt = () => {
  // 1. 定义hooks所需数据
  const loading = ref(false)
  const optimize_prompt = ref('')

  // 2. 定义优化prompt处理器
  const handleOptimizePrompt = async (prompt: string) => {
    try {
      // 2.1 发起优化prompt请求，并将optimize_prompt设置为空
      loading.value = true
      optimize_prompt.value = ''
      await optimizePrompt(prompt, (event_response) => {
        // 2.2 提取数据并更新optimize_prompt
        const data = event_response.data
        optimize_prompt.value += data?.optimize_prompt
      })
    } finally {
      loading.value = false
    }
  }

  return { loading, optimize_prompt, handleOptimizePrompt }
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
