import { get, post } from '@/util/request'
import { type ProviderResponse, type AuthorizeResponse } from '@/models/oauth.ts'

// 获取指定第三方授权服务的重定向地址
export const provider = (provider_name: string) => {
  return get<ProviderResponse>(`/oauth/${provider_name}`)
}

// 指定第三方是哦全服务认证地址
export const authorize = (provider_name: string, code: string) => {
  return post<AuthorizeResponse>(`/oauth/authorize/${provider_name}`, {
    body: { code },
  })
}
