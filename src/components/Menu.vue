<template>
  <el-aside width="200px">
    <el-menu default-active="1" class="el-menu-vertical-demo" router>
      <!-- 无子集 -->
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </el-menu-item>

      <!-- 无子集 -->
      <el-menu-item index="/user">
        <i class="el-icon-menu"></i>
        <span slot="title">个人空间</span>
      </el-menu-item>

      <!-- 无子集 -->
      <el-menu-item index="/application">
        <i class="el-icon-menu"></i>
        <span slot="title">应用工厂</span>
      </el-menu-item>

      <!-- 无子集 -->
      <el-menu-item index="/plusCenter">
        <i class="el-icon-menu"></i>
        <span slot="title">插件广场</span>
      </el-menu-item>

      <!-- 无子集 -->
      <el-menu-item index="/openApi">
        <i class="el-icon-menu"></i>
        <span slot="title">开放API</span>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
