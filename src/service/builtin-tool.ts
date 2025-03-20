import { get } from '@/util/request'
import {
  type GetBuiltinToolResponse,
  type GetBuiltinToolsResponse,
  type GetCategoriesResponse,
} from '@/models/builtin-tool.ts'

// 获取内置分类列表信息
export const getCategories = () => {
  return get<GetCategoriesResponse>('/builtin-tools/categories')
}

// 获取所有内置工具提供者列表
export const getBuiltinTools = () => {
  return get<GetBuiltinToolsResponse>('/builtin-tools')
}

// 获取内置工具详情
export const getBuiltinTool = (provider_name: string, tool_name: string) => {
  return get<GetBuiltinToolResponse>(`/builtin-tools/${provider_name}/tools/${tool_name}`)
}
