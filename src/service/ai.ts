import { post, ssePost } from '@/util/request.ts'
import type { BaseResponse } from '@/models/base.ts'

// 优化预设Prompt服务接口
export const optimizePrompt = (
  prompt: string,
  onData: (event_response: Record<string, any>) => void,
) => {
  return ssePost(`/ai/optimize-prompt`, { body: { prompt } }, onData)
}

// 生成建议问题列表接口
export const generateSuggestedQuestions = (message_id: string) => {
  return post<BaseResponse<string[]>>(`/ai/suggested-questions`, { body: message_id })
}
