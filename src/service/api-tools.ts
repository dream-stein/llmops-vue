import { get, post } from '@/util/request'
import {
  type GetApiToolProvidersWithPageResponse,
  type CreateApiToolProviderRequest,
  type UpdateApiToolProviderRequest,
  type GetApiToolProviderResponse,
} from '@/models/api-tool.ts'
import type { BaseResponse } from '@/models/base.ts'
import { provide } from 'vue'

// 获取自定义API列表分页数据
export const getApiToolProvidersWithPage = (
  current_page: number = 1,
  page_size: number = 20,
  search_word: string = '',
) => {
  return get<GetApiToolProvidersWithPageResponse>('/api-tools', {
    params: { current_page, page_size, search_word },
  })
}

// 校验OpenAPI Schema数据
export const validateOpenAPISchema = (openapi_schema: string) => {
  return post<BaseResponse<any>>('/api-tools/validate-openapi-schema', {
    body: openapi_schema,
  })
}

// 创建自定义API工具提供者
export const createApiToolProvider = (req: CreateApiToolProviderRequest) => {
  return post<BaseResponse<any>>('api-tools', { body: req })
}

// 删除自定义API工具提供者
export const deleteApiToolProvider = (provider_id: string) => {
  return post<BaseResponse<any>>(`api-tools/${provider_id}/delete`)
}

// 更新自定义API工具提供者
export const updateApiToolsProvider = (provider_id: string, req: UpdateApiToolProviderRequest) => {
  return post<BaseResponse<any>>(`api-tools/${provider_id}`, { body: req })
}

// 查看自定义API工具提供者
export const getApiToolProvider = (provider_id: string) => {
  return get<GetApiToolProviderResponse>(`api-tools/${provider_id}`)
}
