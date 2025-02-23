<script setup lang="ts"></script>

<template>
  <a-layout has-sider>
    <!-- 侧边栏 -->
    <a-layout-sider :width="240" class="min-h-screen bg-gray-50 p-2 shadow-none">
      <div class="bg-white h-full rounded-lg px-2 pv-4 flex flex-col justify-between">
        <!-- 上面部分 -->
        <div>
          <!-- 顶部log -->
          <router-link
            to="/home"
            class="block h-9 w-[110px] mb-5 bg-gray-200 hover:bg-gray-300 transition-all rounded-lg"
          />
          <!-- 创建AI应用按钮 -->
          <a-button type="primary" long class="rounded-lg mb-4">
            <template #icon>
              <icon-plus />
            </template>
            创建AI应用
          </a-button>
          <!-- 侧边栏导航 -->
          <div class="flex flex-col gap-2">
            <router-link to="/home" class=""> 主页 </router-link>
          </div>
        </div>
        <!-- 下半部分 -->
      </div>
    </a-layout-sider>
    <!--右侧内容-->
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<style scoped></style>
