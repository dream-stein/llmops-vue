import { reactive, ref } from 'vue'
import { getApiTool } from '@/service/api-tools.ts'
import { getBuiltinTool, getBuiltinTools } from '@/service/builtin-tool.ts'

export const useGetApiTool = () => {
  // 1. 定义hooks所需数据
  const loading = ref(false)
  const api_tool = reactive<Record<string, any>>({})

  // 2. 定义加载数据
  const loadApiTool = async (provider_id: string, tool_name: string) => {
    try {
      loading.value = true
      const resp = await getApiTool(provider_id, tool_name)
      const data = resp.data

      Object.assign(api_tool, data)
    } finally {
      loading.value = false
    }
  }

  return { loading, api_tool, loadApiTool }
}

export const useGetBuiltinTool = () => {
  // 1. 定义hooks所需数据
  const loading = ref(false)
  const builtin_tool = reactive<Record<string, any>>({})

  // 2. 定义加载函数
  const loadBuiltinTool = async (provider_name: string, tool_name: string) => {
    try {
      loading.value = true
      const resp = await getBuiltinTool(provider_name, tool_name)
      const data = resp.data

      Object.assign(builtin_tool, data)
    } finally {
      Object.assign(builtin_tool, {
        name: 'tool',
        label: 'tool',
        description: '一个用于执行Google SERP搜索并提取片段和网页的工具。输入应该是一个搜索查询。',
        icon: 'https://q2.itc.cn/q_70/images03/20240329/84cca9641e9444e5b3fe9256f095da6b.png',
        provider: {
          name: 'tool_name',
          label: 'tool_name',
          category: 'tool',
          background: 'saa',
          description:
            '一个用于执行Google SERP搜索并提取片段和网页的工具。输入应该是一个搜索查询。',
        },
        params: [
          {
            name: 'tool_name',
            label: 'tool_name',
            type: 'string',
            required: true,
            min: 1,
            max: 10,
            options: [],
          },
        ],
        inputs: [
          {
            type: 'str',
            name: 'name',
            required: true,
            default: 'tool_name',
          },
        ],
      })
      loading.value = false
    }
  }

  return { loading, builtin_tool, loadBuiltinTool }
}
