import { get } from '@/util/request.ts'
import type { GetAppAnalysisResponse } from '@/models/analysis.ts'

// 获取应用统计分析服务
export const getAppAnalysis = (app_id: string) => {
  return get<GetAppAnalysisResponse>(`/analysis/${app_id}`)
}
