<template>
  <div>
    <el-container style="height: 100%">
      <!-- 左侧导航栏 -->
      <nav-menu/>
      <!-- 右侧内容 -->
      <el-container>
        <!-- 右侧头部 -->
        <el-header style="height: 50px">
          <breadcrumb/>
          <div style="text-align: right">
            <span>当前操作用户：{{ currentUsername }}</span>
            <el-select v-model="value" filterable placeholder="请选择" @change="changeLocationValue">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-header>
        <!-- 右侧主内容 -->
        <el-main><router-view :currentUsername="currentUsername"/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenuComponent from '../components/MenuComponent.vue'
import breadcrumb from '../components/Breadcrumb.vue'
export default {
  components: {
    navMenu: NavMenuComponent,
    breadcrumb
  },
  name: 'HomeView',
  data () {
    return {
      options: [],
      value: '',
      currentUsername: ''
    }
  },
  created: function () {
    // let userData = []
    // axios.get('/api/user/queryAll').then(res => {
    //   if (res.data) {
    //     userData = res.data.data
    //     for (let i = 0; i < userData.length; i++) {
    //       this.options.push({'value': 'value' + (i + 1), 'label': userData[i].username})
    //     }
    //   }
    // }).catch(err => console.log(err))
  },
  methods: {
    changeLocationValue (val) {
      let obj = this.options.find((item) => {
        return item.value === val
      })
      this.currentUsername = obj.label
    }
  }
}
</script>

<style scoped>
</style>
