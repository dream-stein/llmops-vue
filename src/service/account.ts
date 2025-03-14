import { get, post } from '@/util/request.ts'
import type { GetCurrentUserResponse } from '@/models/account.ts'
import type { BaseResponse } from '@/models/base.ts'

// 获取当前登录账号信息
export const getCurrentUser = () => {
  return get<GetCurrentUserResponse>(`/account`)
}

// 修改当前登录账号密码
export const updatePassword = (password: string) => {
  return post<BaseResponse<any>>(`/account/password`, {
    body: { password },
  })
}

// 修改当前登录账号名称
export const updateName = (name: string) => {
  return post<BaseResponse<any>>(`/account/name`, {
    body: { name },
  })
}

// 修改当前登录账号头像
export const updateAvatar = (avatar: string) => {
  return post<BaseResponse<any>>(`/account/avatar`, {
    body: { avatar },
  })
}
