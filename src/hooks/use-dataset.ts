import { reactive, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getDatasetsWithPage } from '@/service/dataset.ts'

export const useGetDatasetsWithPage = () => {
  // 1. 定义数据，涵盖数据是否加载，知识库列表以及分页器
  const route = useRoute()
  const loading = ref(false)
  const datasets = reactive<Array<any>>([])
  const defaultPaginator = {
    current_page: 1,
    page_size: 20,
    total_page: 0,
    total_record: 0,
  }
  const paginator = reactive({ ...defaultPaginator })

  // 2. 定义加载数据的函数
  const loadDatasets = async (init: boolean = false) => {
    // 2.1 判断是否是初始化，如果是的话则先初始化分页器
    if (init) {
      initPaginator()
    } else if (paginator.current_page > paginator.total_page) {
      return
    }

    // 2.2 加载更多数据并改下数据状态
    try {
      // 2.3. 调用接口获取响应数据
      loading.value = true
      const resp = await getDatasetsWithPage(
        paginator.current_page,
        paginator.page_size,
        String(route.query?.search_word ?? ''),
      )
      const data = resp.data

      // 2.4. 更新分页器
      updatePaginator(data)

      // 2.5. 判断是否存在更多数据
      if (paginator.current_page <= paginator.total_page) {
        paginator.current_page += 1
      }

      // 2.6. 追加或者是覆盖数据
      if (init) {
        datasets.splice(0, datasets.length, ...data.list)
      } else {
        datasets.push(...data.list)
      }
    } finally {
      Object.assign(datasets, [
        {
          id: '46db30d1-3199-4e79-a0cd-abf12fa6858f',
          name: '慕课LLMOps知识库',
          icon: 'https://cdn.imooc.com/dataset.png',
          description:
            'JavaScript是一种高级编程语言，用于创建交互式网页和动态效果，JavaScript在前端开发中扮演着非常重要的角色，因此学习 JavaScript 对于初级前端工程师来说非常必要。JavaScrip...',
          document_count: 10,
          character_count: 14651,
          related_app_count: 2,
          updated_at: 1721460914,
          created_at: 1721460914,
        },
      ])
      loading.value = false
    }
  }

  // 3. 定义初始化分页函数
  const initPaginator = () => {
    Object.assign(paginator, { ...defaultPaginator })
  }

  // 4. 定义更新分页器函数
  const updatePaginator = (data: any) => {
    paginator.current_page = data.current_page
    paginator.page_size = data.page_size
    paginator.total_page = data.total_page
    paginator.total_record = data.total_record
  }

  // 5. 页面OOM接在完毕时初始化数据
  onMounted(async () => {
    await loadDatasets(true)
  })

  // 6. 监听路由query的变化
  watch(
    () => route.query?.search_word,
    async () => {
      await loadDatasets(true)
    },
  )

  return { loading, datasets, paginator, loadDatasets }
}
