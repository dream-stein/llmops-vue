<template>
  <div class="home">
    <el-container style="height: 100%">
      <!-- 顶部栏 -->
      <el-header style="height: 5%; background: #007bff; display: flex; align-items: center; justify-content: space-between;">
        <!-- 左边：文字 "llmops" -->
        <span style="font-size: 18px; font-weight: bold; color: white;">llmops</span>

        <!-- 右边：用户头像和邮箱 -->
        <div style="display: flex; align-items: center;">
          <el-avatar :size="36" :src="user.avatar" style="margin-right: 10px;"></el-avatar>
          <span style="color: white;">{{ user.email }}</span>
        </div>
      </el-header>

      <!-- 主体区域 -->
      <el-container style="height: 95%">
        <!-- 侧边栏 -->
        <el-aside class="llm-aside">
          <nav-menu style="width: 100%; height: 100%"/>
        </el-aside>

        <!-- 主内容区域 -->
        <el-main class="llm-main">
          <router-view style="width: 100%; height: 100%" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenuComponent from '../components/MenuComponent.vue'

export default {
  components: {
    navMenu: NavMenuComponent,
  },
  name: 'HomeView',
  data() {
    return {
      user: {
        avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', // 用户头像 URL
        email: 'user@example.com' // 用户邮箱
      }
    }
  },
  created: function () {
  },
  methods: {}
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.llm-aside {
  width: 4%
}
.llm-main {
  width: 96%
}
</style>