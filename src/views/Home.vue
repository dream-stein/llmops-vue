<template>
  <div>
    <el-container style="height: 100%">
      <nav-menu/>
      <!--右侧头部-->
      <el-container></el-container>
      <!--右侧主内容-->
      <el-main><router-view :currentUsername="currentUsername"/></el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  components: {
  },
  name: 'Home',
  data() {
    return {
      currentUsername: ''
    }
  },
}
</script>