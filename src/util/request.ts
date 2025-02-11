// 1.接口超时，100s
// 2.不需要写api前缀，只写后面的
// 3.经常实验get和post，封装这两个数据
// 4.每次都要response.json()，需要封装
import { apiPrefix } from '@/config'

// 1.超时时间100s
const TIME_OUT = 100000

console.log(apiPrefix)

// 2. 基础的配置
const baseFetchOptions = {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  redirect: 'follow',
}

// fetch参数类型
type FetchOptionType = Omit<RequestInit, 'body'> & {
  params?: Record<string, any>
  body?: BodyInit | Record<string, any> | null
}

// 2.封装基础的fetch请求
const baseFetch = <T>(url: string, fetchOptions: FetchOptionType): Promise<T> => {
  // 将所有的配置信息核爆起来
  const options: typeof baseFetchOptions & FetchOptionType = Object.assign(
    {},
    baseFetchOptions,
    fetchOptions,
  )

  // 组装url
  let urlWithPrefix = `${apiPrefix}${url.startsWith('/') ? url : `/${url}`}`

  // 结构出对应的请求方法，params，body参数
  const { method, params, body } = options

  // 如果请求是get，并且传递了params
  if (method === 'GET' && params) {
    const paramsArray: string[] = []
    Object.keys(params).forEach((key) => {
      // key=value
      paramsArray.push(`${key}=${encodeURIComponent(params[key])}`)
    })
    if (urlWithPrefix.search(/\?/) === -1) {
      urlWithPrefix += `?${paramsArray.join('&')}`
    } else {
      urlWithPrefix += `&${paramsArray.join('&')}`
    }

    delete options.params
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  return Promise.race([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('接口已超时')
      }, TIME_OUT)
    }),
    // 发起一个正常请求
    new Promise((resolve, reject) => {
      globalThis
        .fetch(urlWithPrefix, options as RequestInit)
        .then((res) => {
          resolve(res.json())
        })
        .catch((err) => {
          reject(err)
        })
    }),
  ]) as Promise<T>
}
