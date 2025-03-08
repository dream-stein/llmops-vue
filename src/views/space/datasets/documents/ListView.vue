<script setup lang="ts">
import moment from 'moment'

const documents = [
  {
    id: 'bde70d64-cbcc-47e7-a0f5-b51200b87c7c',
    name: 'LLMOps项目提示词',
    character_count: 4700,
    hit_count: 0,
    position: 21,
    enabled: true,
    disabled_at: 0,
    status: 'completed',
    error: '',
    updated_at: 1726949586,
    created_at: 1726949586,
  },
  {
    id: 'bde70d64-cbcc-47e7-a0f5-b51200b87c7c',
    name: 'embedding提示',
    character_count: 2310,
    hit_count: 0,
    position: 11,
    enabled: false,
    disabled_at: 0,
    status: 'completed',
    error: '',
    updated_at: 1726949586,
    created_at: 1726949586,
  },
]
</script>

<template>
  <div class="p-6">
    <!-- 顶部知识库详情 -->
    <div class="flex items-center w-full gap-2 mb-6">
      <!-- 左侧回退按钮 -->
      <router-link :to="{ name: 'space-datasets-list' }">
        <a-button size="mini" type="text" class="!text-gray-700">
          <template #icon>
            <icon-left />
          </template>
        </a-button>
      </router-link>
      <!-- 右侧知识库信息 -->
      <div class="flex items-center gap-3">
        <!-- 知识库的图标 -->
        <a-avatar
          :size="40"
          shape="square"
          class="rounded-lg"
          image-url="https://img2.baidu.com/it/u=789499896,2504436698&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        />
        <!-- 知识库信息 -->
        <div class="flex flex-col justify-between h-[40px]">
          <div class="text-gray-700">知识库 / LLMOps项目资料库</div>
          <div class="flex items-center gap-2">
            <a-tag size="small" class="rounded h-[18px] leading-[18px] bg-gray-200 text-gray-500"
              >10 文档</a-tag
            >
            <a-tag size="small" class="rounded h-[18px] leading-[18px] bg-gray-200 text-gray-500"
              >154 命中</a-tag
            >
            <a-tag size="small" class="rounded h-[18px] leading-[18px] bg-gray-200 text-gray-500"
              >14 关联应用</a-tag
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 中间检索以及召回测试 -->
    <div class="flex items-center justify-between mb-6">
      <!-- 左侧搜素框 -->
      <a-input-search
        placeholder="请输入关键词搜素文档"
        class="w-[240px] bg-white rounded-lg border-gray-200"
      />
      <!-- 右侧按钮 -->
      <a-space :size="12">
        <a-button class="rounded-lg">召回测试</a-button>
        <a-button type="primary" class="rounded-lg">添加文件</a-button>
      </a-space>
    </div>
    <!-- 底部表格 -->
    <div class="">
      <!-- 表格内容 -->
      <a-table
        hoverable
        :pagination="{
          total: 50,
          current: 1,
          defaultCurrent: 1,
          pageSize: 20,
          defaultPageSize: 10,
        }"
        :data="documents"
        :bordered="{ wrapper: false }"
      >
        <template #columns>
          <a-table-column
            title="#"
            data-index="position"
            align="center"
            :width="80"
            header-cell-class="rounded-tl-lg !bg-gray-200 text-gray-700"
            cell-class="bg-transparent text-gray-700"
          />
          <a-table-column
            title="文档名"
            data-index="name"
            :width="400"
            header-cell-class="!bg-gray-200 text-gray-700"
            cell-class="bg-transparent text-gray-700"
          >
            <template #cell="{ record }">
              <div class="line-clamp-1">
                {{ record.name }}
              </div>
            </template>
          </a-table-column>
          <a-table-column
            title="字符数"
            data-index="character_count"
            header-cell-class="!bg-gray-200 text-gray-700"
            cell-class="bg-transparent text-gray-700"
          >
            <template #cell="{ record }">
              {{ (record.character_count / 1000).toFixed(1) }}k
            </template>
          </a-table-column>
          <a-table-column
            title="召回次数"
            data-index="hit_count"
            header-cell-class="!bg-gray-200 text-gray-700"
            cell-class="bg-transparent text-gray-700"
          />
          <a-table-column
            title="上传时间"
            data-index="created_at"
            header-cell-class="!bg-gray-200 text-gray-700"
            cell-class="bg-transparent text-gray-700"
          >
            <template #cell="{ record }">
              {{ moment(record.created_at * 1000).format('YYYY-MM-DD HH:mm:ss') }}
            </template>
          </a-table-column>
          <a-table-column
            title="状态"
            data-index="enabled"
            header-cell-class="!bg-gray-200 text-gray-700"
            cell-class="bg-transparent text-gray-700"
          >
            <template #cell="{ record }">
              <a-space>
                <div
                  v-if="record.enabled"
                  class="w-2 h-2 bg-green-500 rounded-sm border border-green-700"
                ></div>
                <div v-else class="w-2 h-2 bg-gray-500 rounded-sm border border-gray-700"></div>
                <div v-if="record.enabled" class="text-gray-700">可用</div>
                <div v-else class="text-gray-700">已禁用</div>
              </a-space>
            </template>
          </a-table-column>
          <a-table-column
            title="操作"
            data-index="operator"
            header-cell-class="rounded-tr-lg !bg-gray-200 text-gray-700"
            cell-class="bg-transparent text-gray-700 !h-[40px]"
            :width="100"
          >
            <template #cell="{ record }">
              <a-space :size="0">
                <template #split>
                  <a-divider direction="vertical" />
                </template>
                <a-switch size="small" type="round" default-checked />
                <a-dropdown position="br">
                  <a-button type="text" size="small" class="!text-gray-700">
                    <template #icon>
                      <icon-more />
                    </template>
                  </a-button>
                  <template #content>
                    <a-doption>重命名</a-doption>
                    <a-doption class="!text-red-700">删除</a-doption>
                  </template>
                </a-dropdown>
              </a-space>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </div>
  </div>
</template>

<style scoped></style>
