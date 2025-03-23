import { ref } from 'vue'
import { defineStore } from 'pinia'
import storage from '@/util/storage.ts'

// 1. 定义账号初始化数据
const initAccount = {
  id: '2121',
  name: 'Emcikem',
  email: '',
  avatar:
    'https://img1.baidu.com/it/u=2902946204,3080487950&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
  last_login_ip: '',
  last_login_at: 0,
  created_at: 0,
}

export const useAccountStore = defineStore('account', () => {
  const account = ref(storage.get('account', initAccount))

  const update = (params: any) => {
    account.value = params
    storage.set('account', params)
  }

  const clear = () => {
    account.value = initAccount
    storage.remove('account')
  }

  return { account, update, clear }
})
