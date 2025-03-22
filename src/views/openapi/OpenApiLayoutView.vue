<script setup lang="ts"></script>

<template>
  <!-- 调整边距+隐藏 -->
  <div class="px-6 flex flex-col overflow-hidden h-full">
    <div class="pt-6 sticky top-0 z-20 bg-gray-50">
      <!-- 顶层标题+创建按钮 -->
      <div class="flex items-center justify-between mb-6">
        <!-- 左侧标题 -->
        <div class="flex items-center gap-2">
          <a-avatar :size="32" class="bg-blue-700">
            <icon-user />
          </a-avatar>
          <div class="flex items-center gap-2 text-lg font-medium text-gray-900">
            开放API
            <div class="text-xs text-gray-500">利用开放 API 快速与企业现有业务对接</div>
          </div>
        </div>
      </div>
      <!-- 导航按钮+搜索框 -->
      <div class="flex items-center justify-between mb-6">
        <!-- 左侧导航 -->
        <div class="flex items-center gap-2">
          <router-link
            to="/openapi"
            class="rounded-lg text-gray-700 px-3 h-8 leading-8 hover:bg-gray-200 transition-all"
            active-class="bg-gray-100"
          >
            快速开始
          </router-link>
          <router-link
            to="openapi/api-keys"
            class="rounded-lg text-gray-700 px-3 h-8 leading-8 hover:bg-gray-200 transition-all"
            active-class="bg-gray-100"
            >秘钥</router-link
          >
        </div>
      </div>
    </div>
    <!-- 中间内容 -->
    <router-view />
  </div>
</template>

<style scoped></style>
