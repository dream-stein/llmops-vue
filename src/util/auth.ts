import storage from '@/util/storage.ts'
export default {
  isLogin: (): boolean => {
    // 1. 从localStorage中查找授权凭证信息
    const credential = storage.get('credential')

    // 2. 判断授权凭证上师范存在access_token，并判断token是否过期
    const now = Math.floor(Date.now() / 1000)
    if (
      !credential ||
      !credential.access_token ||
      !credential.expire_at ||
      credential.expire_at < now
    ) {
      // 3. 账号未登录，直接移除localStorage中的数据，涵盖用户数据+授权凭证
      storage.clear()
      return false
    }
    // 4. 满足所有条件，返回true
    return true
  },
}
