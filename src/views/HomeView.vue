<template>
  <div class="home">
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
.home {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
