<template>
  <el-aside width="200px">
    <el-menu default-active="1" class="el-menu-vertical-demo" router>
      <!-- 无子集 -->
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <template v-slot:title>主页</template>
      </el-menu-item>

      <!-- 无子集 -->
      <el-menu-item index="/user">
        <i class="el-icon-menu"></i>
        <template v-slot:title>个人空间</template>
      </el-menu-item>

      <!-- 无子集 -->
      <el-menu-item index="/application">
        <i class="el-icon-menu"></i>
        <template v-slot:title>应用工厂</template>
      </el-menu-item>

      <!-- 无子集 -->
      <el-menu-item index="/plusCenter">
        <i class="el-icon-menu"></i>
        <template v-slot:title>插件广场</template>
      </el-menu-item>

      <!-- 无子集 -->
      <el-menu-item index="/openApi">
        <i class="el-icon-menu"></i>
        <template v-slot:title>开放API</template>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'MenuComponent',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
