import { upload } from '@/util/request.ts'
import { type UploadImageResponse } from '@/models/upload-file.ts'

// 上传图片服务
export const uploadImage = (image: File) => {
  // 1. 构建表单并添加图片数据
  const formData = new FormData()
  formData.append('file', image)

  // 2. 调用upload服务实现图片上传
  return upload<UploadImageResponse>(`/upload-files/image`, {
    data: formData,
  })
}
