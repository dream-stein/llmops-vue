import { reactive, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  getDatasetsWithPage,
  deleteDataset,
  updateDataset,
  createDataset,
  getDataset,
  getDocumentsWithPage,
  deleteDocument,
  updateDocumentEnabled,
} from '@/service/dataset.ts'
import { type Form, Message, Modal } from '@arco-design/web-vue'

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

export const useDeleteDataset = () => {
  const handleDelete = (dataset_id: string, callback?: () => void) => {
    Modal.warning({
      title: '要删除知识库吗?',
      content:
        '删除知识库后，关联该知识库的应用将无法再使用该知识库，所有的提示配置和文档都将被永久删除',
      hideCancel: false,
      onOk: async () => {
        try {
          // 1.点击确定后向API接口发起请求
          const resp = await deleteDataset(dataset_id)
          Message.success(resp.message)
        } finally {
          // 2.调用callback函数指定回调功能
          callback && callback()
        }
      },
    })
  }

  return { handleDelete }
}

export const useCreateOrUpdateDataset = () => {
  // 1.定义新增和更新需要使用的数据
  const loading = ref(false)
  const defaultForm = {
    fileList: [] as Array<any>,
    icon: '',
    name: '',
    description: '',
  }
  const form = reactive({ ...defaultForm })
  const formRef = ref<InstanceType<typeof Form>>()
  const showUpdateModal = ref(false)

  // 2.定义更新showUpdateModal函数
  const updateShowUpdateModal = (new_value: boolean, callback?: () => void) => {
    showUpdateModal.value = new_value
    callback && callback()
  }

  // 3.定义表单提交函数
  const saveDataset = async (dataset_id?: string) => {
    try {
      loading.value = true
      if (dataset_id !== undefined && dataset_id !== '') {
        const resp = await updateDataset(dataset_id, {
          icon: form.icon,
          name: form.name,
          description: form.description,
        })
        Message.success(resp.message)
      } else {
        const resp = await createDataset({
          icon: form.icon,
          name: form.name,
          description: form.description,
        })
        Message.success(resp.message)
      }
    } finally {
      loading.value = false
    }
  }

  return { loading, form, formRef, saveDataset, showUpdateModal, updateShowUpdateModal }
}

export const useGetDataset = (dataset_id: string) => {
  // 1.定义获取知识库详情的数据
  const loading = ref(false)
  const dataset = reactive<any>({})

  // 2.定义加载数据函数
  const loadDataset = async (dataset_id: string) => {
    try {
      loading.value = true
      const resp = await getDataset(dataset_id)
      const data = resp.data
      Object.assign(dataset, { ...data })
    } finally {
      Object.assign(dataset, {
        id: '46db30d1-3199-4e79-a0cd-abf12fa6858f',
        name: '慕课LLMOps知识库',
        icon: 'https://cdn.imooc.com/dataset.png',
        description: '',
        document_count: 10,
        character_count: 14651,
        hit_count: 10,
        related_app_count: 2,
        updated_at: 1721460914,
        created_at: 1721460914,
      })
      loading.value = false
    }
  }

  // 3.在页面挂在完毕时加载一次数据
  onMounted(() => loadDataset(dataset_id))
  return { loading, dataset, loadDataset }
}

export const useGetDocumentsWithPage = (dataset_id: string) => {
  // 1. 定义获取文档列表的数据结构
  const route = useRoute()
  const loading = ref(false)
  const documents = reactive<Array<any>>([])
  const defaultPaginator = {
    current_page: 1,
    page_size: 20,
    total_page: 0,
    total_record: 0,
  }
  const paginator = reactive({ ...defaultPaginator })

  // 2. 加载文档列表数据
  const loadDocuments = async (init: boolean = false) => {
    // 2.2 判断是否是初始化与分页器的逻辑
    if (!init && paginator.current_page > paginator.total_page) return

    try {
      loading.value = true
      const resp = await getDocumentsWithPage(dataset_id, {
        current_page: (route.query?.current_page || 1) as number,
        page_size: (route.query?.page_size || 20) as number,
        search_word: (route.query?.search_word || '') as string,
      })
      const data = resp.data

      // 2.3 更新分页器
      updatePaginator(data)

      // 2.4 对于表格式+分页器实现的分页，可以直接填充数据进行替换
      documents.splice(0, documents.length, ...data.list)
    } finally {
      documents.push(
        ...[
          {
            id: 'bde70d64-cbcc-47e7-a0f5-b51200b87c7c',
            name: 'LLMOps项目提示词',
            character_count: 4700,
            hit_count: 0,
            position: 21,
            enabled: true,
            disabled_at: 0,
            status: 'completed',
            error: '',
            updated_at: 1726949586,
            created_at: 1726949586,
          },
          {
            id: 'bde70d64-cbcc-47e7-a0f5-b51200b87c7c',
            name: 'embedding提示',
            character_count: 2310,
            hit_count: 0,
            position: 11,
            enabled: false,
            disabled_at: 0,
            status: 'error',
            error: '',
            updated_at: 1726949586,
            created_at: 1726949586,
          },
        ],
      )
      Object.assign(paginator, {
        current_page: 1,
        page_size: 20,
        total_page: 1,
        total_record: 2,
      })
      loading.value = false
    }
  }

  // 3. 定义更新分页器函数
  const initPaginator = () => {
    Object.assign(paginator, { ...defaultPaginator })
  }

  // 4. 定义更新分页器函数
  const updatePaginator = (data: any) => {
    paginator.current_page = data.paginator.current_page
    paginator.page_size = data.paginator.page_size
    paginator.total_page = data.paginator.total_page
    paginator.total_record = data.paginator.total_record
  }

  // 5. 页面DOM加载完成时初始化数据
  onMounted(async () => {
    await loadDocuments(true)
  })

  // 6. 监听路由query的变化
  watch(
    () => route.query,
    async (newQuery, oldQuery) => {
      if (newQuery.search_word !== oldQuery.search_word) {
        initPaginator()
        await loadDocuments(true)
      } else if (newQuery.current_page !== oldQuery.current_page) {
        await loadDocuments()
      }
    },
  )
  return { loading, documents, paginator, loadDocuments }
}

export const useDeleteDocument = () => {
  const handleDelete = (dataset_id: string, document_id: string, callback?: () => void) => {
    Modal.warning({
      title: '要删除该文档吗?',
      content:
        '删除文档后，数据库/向量数据库将无法检索到该文档，如需暂时关闭该文档的检索，可以选择禁言功能',
      hideCancel: false,
      onOk: async () => {
        try {
          // 1.点击确定后向API接口发起请求
          const resp = await deleteDocument(dataset_id, document_id)
          Message.success(resp.message)
        } finally {
          // 2.调用callback函数指定回调功能
          callback && callback()
        }
      },
    })
  }
  return { handleDelete }
}

export const useUpdateDocumentEnabled = () => {
  const handleUpdate = async (
    dataset_id: string,
    document_id: string,
    enabled: boolean,
    callback?: () => void,
  ) => {
    try {
      const resp = await updateDocumentEnabled(dataset_id, document_id, enabled)
      Message.success(resp.message)
    } finally {
      // 2. 调用callback函数指定回调功能
      callback && callback()
    }
  }
  return { handleUpdate }
}
