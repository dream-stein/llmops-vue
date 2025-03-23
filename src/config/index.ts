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
export const typeMap: { [key: string]: string } = {
  str: '字符串',
  int: '整型',
  float: '浮点型',
  bool: '布尔值',
}

// 智能体事件类型
export const QueueEvent = {
  longTermMemory: 'long_term_memory',
  agentThousand: 'agent_thought',
  agentMessage: 'agent_message',
  agentAction: 'agent_action',
  datasetRetrieval: 'dataset_retrieval',
  agentEnd: 'agent_end',
  stop: 'stop',
  error: 'error',
  timeout: 'timeout',
  ping: 'ping',
}
