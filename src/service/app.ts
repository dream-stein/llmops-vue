import { post } from '@/util/request.ts'
import { type DebugAppResponse } from '@/models/app.ts'

export const debugApp = (tenantId: number, prompt: string) => {
  return post<DebugAppResponse>(`/assistant/chat`, {
    body: {
      tenantId: tenantId,
      dialogId: 1,
      modelType: 2,
      prompt: prompt,
      isOnline: false,
    },
  })
}
