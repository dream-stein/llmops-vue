import { type BasePaginatorResponse, type BaseResponse } from '@/models/base.ts'

// 获取知识库分页列表接口响应结构
export type GetDatasetsWithPageResponse = BasePaginatorResponse<{
  id: string
  name: string
  icon: string
  description: string
  document_count: number
  character_count: number
  related_app_count: number
  updated_at: number
  created_at: number
}>

// 新增知识库请求结构
export type CreateDatasetRequest = {
  name: string
  icon: string
  description: string
}

// 更新实时库请求结构
export type UpdateDatasetRequest = {
  name: string
  icon: string
  description: string
}

// 获取知识库详情响应结构
export type GetDatasetResponse = BaseResponse<{
  id: string
  icon: string
  name: string
  description: string
  document_count: number
  hit_count: number
  related_app_count: number
  character_count: number
  updated_at: number
  created_at: number
}>
