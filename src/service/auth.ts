import { post } from '@/util/request.ts'
import { type PasswordLoginResponse } from '@/models/auth.ts'
import type { BaseResponse } from '@/models/base.ts'

// 账号密码登录请求
export const passwordLogin = (email: string, password: string) => {
  return post<PasswordLoginResponse>(`/auth/password-login`, {
    body: { email, password },
  })
}

// 退出登录请求
export const logout = () => {
  return post<BaseResponse<any>>(`/auth/logout`)
}
