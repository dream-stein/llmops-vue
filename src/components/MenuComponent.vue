<template>
  <el-menu
      default-active="$router.path"
      class="llm-menu"
      :collapse="isCollapse"
      router>
    <!-- 无子集 -->
    <el-menu-item index="/chat">
      <el-icon><HomeFilled/></el-icon>
      <template v-slot:title>主页</template>
    </el-menu-item>

    <!-- 无子集 -->
    <el-menu-item index="/user">
      <el-icon><UserFilled/></el-icon>
      <template v-slot:title>个人空间</template>
    </el-menu-item>

    <!-- 无子集 -->
    <el-menu-item index="/application">
      <el-icon><Grid/></el-icon>
      <template v-slot:title>应用工厂</template>
    </el-menu-item>

    <!-- 无子集 -->
    <el-menu-item index="/plusCenter">
      <el-icon><Tools/></el-icon>
      <template v-slot:title>插件广场</template>
    </el-menu-item>

    <!-- 无子集 -->
    <el-menu-item index="/openApi">
      <el-icon><Link/></el-icon>
      <template v-slot:title>开放API</template>
    </el-menu-item>

  </el-menu>
</template>

<script>
import {Grid, HomeFilled, Tools, UserFilled} from "@element-plus/icons-vue";

export default {
  name: 'MenuComponent',
  components: {Tools, Grid, UserFilled, HomeFilled},
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {}
}
</script>

<style scoped>
.llm-menu {
  height: 100%;
}
</style>
