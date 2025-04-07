import { ref } from 'vue'
import type { GetLanguageModelsResponse } from '@/models/language-model.ts'
import { getLanguageModel, getLanguageModels } from '@/service/language-model.ts'

export const useGetLanguageModels = () => {
  // 1.定义自定义hooks所需数据
  const loading = ref(false)
  const language_models = ref<GetLanguageModelsResponse['data']>([])

  // 2.定义加载数据函数
  const loadLanguageModels = async () => {
    try {
      loading.value = true
      const resp = await getLanguageModels()
      language_models.value = resp.data
    } finally {
      language_models.value = [
        {
          name: 'openApi',
          position: 1,
          label: 'openApi',
          icon: 'https://img1.baidu.com/it/u=1682812017,3182056438&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          description: '1221',
          background: '2121',
          support_model_types: [],
          models: [
            {
              model_name: '4o',
              label: '4o',
              icon: 'https://img1.baidu.com/it/u=1682812017,3182056438&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              model_type: '21211',
              features: [],
              context_windows: 12,
              max_output_tokens: 13,
              attributes: [],
              metadata: [],
              parameters: [],
            },
          ],
        },
      ]
      loading.value = false
    }
  }

  return { loading, language_models, loadLanguageModels }
}

export const useGetLanguageModel = () => {
  // 1.定义自定义hooks所需数据
  const loading = ref(false)
  const language_model = ref<Record<string, any>>({})

  // 2.定义加载数据函数
  const loadLanguageModel = async (provider_name: string, model_name: string) => {
    try {
      loading.value = true
      const resp = await getLanguageModel(provider_name, model_name)

      language_model.value = resp.data
    } finally {
      language_model.value = {
        parameters: [
          {
            name: '温度',
            label: '温度',
            type: 'float',
            help: '温度',
            required: true,
            default: 1.0,
            min: 0.0,
            max: 10.0,
            precision: 1,
            options: [],
          },
          {
            name: 'Top P',
            label: 'Top P',
            type: 'float',
            help: 'Top P',
            required: true,
            default: 0.48,
            min: 0.0,
            max: 1.0,
            precision: 1,
            options: [],
          },
          {
            name: '存在惩罚',
            label: '存在惩罚',
            type: 'float',
            help: '存在惩罚',
            required: true,
            default: 0.1,
            min: 0.0,
            max: 1.0,
            precision: 1,
            options: [],
          },
        ],
      }
      loading.value = false
    }
  }

  return { loading, language_model, loadLanguageModel }
}
