import { get } from '@/util/request'
import { type GetCategoriesResponse, type GetBuiltinToolsResponse } from '@/models/builtin-tool.ts'

// 获取内置分类列表信息
export const getCategories = () => {
  return get<GetCategoriesResponse>('/builtin-tools/categories')
}

// 获取所有内置工具提供者列表
export const getBuiltinTools = () => {
  return get<GetBuiltinToolsResponse>('/builtin-tools')
}
