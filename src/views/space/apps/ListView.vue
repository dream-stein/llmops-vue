<script setup lang="ts"></script>

<template>
  <p>这里是AI应用列表</p>
  <router-link to="/home">返回主页</router-link>
  <router-link :to="{
                    name: 'space-apps-detail',
                    params: { app_id: '211221' },
                  }">去应用页</router-link>
</template>

<style scoped></style>
