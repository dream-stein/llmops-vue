<template>
  <div class="home-page">
    <div class="home-dialog-history"></div>
    <div class="home-user">
      <el-button type="primary" :icon="Edit">开启新对话</el-button>
      <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="可以问我任何问题"
          v-model="userPrompt">
      </el-input>
      <el-text>内容由AI生成，无法确保真实准确，仅供参考。</el-text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatView',
  // props: {
  //   userPrompt: String
  // }
  data() {
    return {
      userPrompt: '',
      type: 'chat',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  width: 100%;
  background: rgba(245, 245, 245, 1);
  display: grid;
  place-items: center;
}
.home-dialog-history {

}
.home-user {
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
