// api请求接口前缀
// export const apiPrefix: string = 'http://1.15.97.111:8080'
export const apiPrefix: string = 'http://127.0.0.1:8080'

// 业务状态码
export const httpCode = {
  success: 0,
  fail: 1,
  notFound: 2,
  unauthorized: 3,
  forbidden: 4,
  validateError: 5,
}

// 类型字符串与中文映射
export const typeMap = {
  str: '字符串',
  int: '整型',
  float: '浮点型',
  bool: '布尔值',
}
