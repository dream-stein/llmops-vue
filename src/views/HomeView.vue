<template>
  <div>
    <el-container style="height: 100%">
      <!-- 左侧导航栏 -->
      <nav-menu/>
      <!-- 右侧内容 -->
      <el-container>
        <!-- 右侧头部 -->
        <el-header style="height: 50px">
        </el-header>
        <!-- 右侧主内容 -->
        <el-main><router-view :currentUsername="currentUsername"/></el-main>
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
  data () {
    return {
      options: [{'label': 1, 'value': 2}],
      value: '',
      currentUsername: ''
    }
  },
  created: function () {
  },
  methods: {
    changeLocationValue () {
      // let obj = this.options.find((item) => {
      //   return item.value === val
      // })
      // this.currentUsername = obj.label
      this.currentUsername = 'HomePage'
    }
  }
}
</script>

<style scoped>
</style>
