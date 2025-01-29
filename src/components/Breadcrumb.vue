<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="v in lists" :key="v.path">
        <router-link :to="v.path">{{v.meta.title}}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'MyTest',
  data () {
    return {
      lists: []
    }
  },
  watch: {
    $route (to) {
      this.lists = to.matched
    }
  },
  methods: {},
  mounted () {
    this.lists = this.$route.matched
  }
}
</script>

<style scoped>

</style>
