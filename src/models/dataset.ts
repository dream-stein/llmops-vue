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

// 获取制定的知识库文档列表分页请求结构
export type GetDocumentsWithPageRequest = {
  current_page: number
  page_size: number
  search_word: string
}

// 获取指定知识库文档分页列表相应结构
export type GetDocumentsWithPageResponse = BasePaginatorResponse<{
  id: string
  name: string
  character_count: number
  hit_count: number
  position: number
  enabled: boolean
  disabled_at: number
  status: string
  error: string
  updated_at: number
  created_at: number
}>

// 获取指定文档详情响应结构
export type GetDocumentResponse = BaseResponse<{
  id: string
  dataset_id: string
  name: string
  segment_count: number
  character_count: number
  hit_count: number
  position: number
  enabled: boolean
  disabled_at: number
  status: string
  error: string
  updated_at: number
  created_at: number
}>

// 知识库召回测试请求结构
export type HitRequest = {
  retrieval_strategy: string
  k: number
  query: string
  score: number
}

// 知识库召回测试响应结构
export type HitResponse = BaseResponse<
  Array<{
    id: string
    document: {
      name: string
      extension: string
      mime_type: string
    }
    dataset_id: string
    score: number
    position: number
    keywords: string[]
    character_count: number
    token_count: number
    hit_count: number
    enabled: boolean
    disabled_at: number
    status: string
    error: string
    updated_at: number
    created_at: number
  }>
>

// 知识库最新查询列表
export type GetDatasetQueriesResponse = BaseResponse<
  Array<{
    id: string
    query: string
    source: string
    dataset_id: string
    created_at: number
  }>
>
