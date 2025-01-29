<template>
  <div>
    <div></div>
    <div>
      <el-button type="primary" :icon="Edit">开启新对话</el-button>
    </div>
    <div>
      <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="可以问我任何问题"
          v-model="userPrompt">
      </el-input>
      <div>

      </div>
    </div>
    <div>
      <el-text>内容由AI生成，无法确保真实准确，仅供参考。</el-text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  // props: {
  //   userPrompt: String
  // }
  data() {
    return {
      userPrompt: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
