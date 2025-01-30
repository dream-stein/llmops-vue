<template>
  <div>
    <el-container style="height: 100%">
      <nav-menu/>
      <el-container>
        <router-view></router-view>
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
    return {}
  },
  created: function () {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
