import { post } from '@/util/request.ts'
import { type DebugAppResponse } from '@/models/app.ts'

export const debugApp = (app_id: string, query: string) => {
  return post<DebugAppResponse>(`/apps/${app_id}/debug`, {
    body: { query },
  })
}
