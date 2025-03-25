import { ref } from 'vue'
import type {
  GetBuiltinAppCategoriesResponse,
  GetBuiltinAppsResponse,
} from '@/models/builtin-app.ts'
import {
  addBuiltinAppToSpace,
  getBuiltinAppCategories,
  getBuiltinApps,
} from '@/service/builtin-app.ts'
import { useRouter } from 'vue-router'
import { Message } from '@arco-design/web-vue'

export const useGetBuiltinAppCategories = () => {
  // 1.定义hooks所需数据
  const loading = ref(false)
  const categories = ref<GetBuiltinAppCategoriesResponse['data']>([])

  // 2.定义加载数据函数
  const loadBuiltinAppCategories = async () => {
    try {
      loading.value = true
      const resp = await getBuiltinAppCategories()
      categories.value = resp.data
    } finally {
      categories.value = [
        { category: '助手', name: '助手' },
        { category: '人力资源', name: '人力资源' },
        { category: '写作', name: '写作' },
        { category: '电商营销', name: '电商营销' },
      ]
      loading.value = false
    }
  }

  return { loading, categories, loadBuiltinAppCategories }
}

export const useGetBuiltinApps = () => {
  // 1.定义hooks所需数据
  const loading = ref(false)
  const apps = ref<GetBuiltinAppsResponse['data']>([])

  // 2.定义加载数据函数
  const loadBuiltinApps = async () => {
    try {
      loading.value = true
      const resp = await getBuiltinApps()
      apps.value = resp.data
    } finally {
      apps.value = [
        {
          id: '111',
          category: '助手',
          name: 'AI编程助手',
          icon: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0316%2Fb8184b8ej00saf80g002ad000ew00ejp.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
          description:
            '采用最智能的大模型，自动化AI编程。精通Java、C、C++、Python、Rust、Go等编程语言有很深的造诣，能够回答各种复杂的与编程相关的问题。\n' +
            '\n',
          model_config: {
            provider: '阿里',
            model: '通义千问Max',
          },
          created_at: 1742704861,
        },
        {
          id: '1121',
          category: '助手',
          name: '高考专业指南',
          icon: 'https://qcloud.dpfile.com/pc/IODTkKqebElWSB32im5VWnflb3F7TmseOBk5XC11oIz78ALYHNsplNTvZhwiAL68.jpg',
          description:
            '亲爱的考生，让我们通过十道有趣的问题，探索你的兴趣和潜力，找出最适合你的专业。我会告诉你这些专业的优秀高校在哪里，以及你未来的就业前景。让我来陪你走过这个重要的选择，打开你未来的新篇章吧！\n' +
            '\n',
          model_config: {
            provider: 'OpenAI',
            model: 'gpt-4o',
          },
          created_at: 1742704861,
        },
        {
          id: '11213',
          category: '写作',
          name: '小红书文案输出大师',
          icon: 'https://www.yimiaotui.com/d/image/20230427/98ed757ec1b322e69fb9e5afcfb275c2.jpg',
          description: '专注于小红书爆款创造！',
          model_config: {
            provider: '月之暗面',
            model: 'Moonshot（128K）',
          },
          created_at: 1742704861,
        },
      ]
      loading.value = false
    }
  }

  return { loading, apps, loadBuiltinApps }
}

export const useAddBuiltinAppToSpace = () => {
  // 1.定义hooks所需数据
  const router = useRouter()
  const loading = ref(false)

  // 2.定义处理器函数
  const handleAddBuiltinAppToSpace = async (builtin_app_id: string) => {
    try {
      loading.value = true
      const resp = await addBuiltinAppToSpace(builtin_app_id)
      Message.success('将Agent模板添加到工作区成功')
      await router.push({
        name: 'space-apps-detail',
        params: { app_id: resp.data.id },
      })
    } finally {
      loading.value = false
    }
  }

  return { loading, handleAddBuiltinAppToSpace }
}
