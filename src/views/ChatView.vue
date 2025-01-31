<template>
  <div class="home-page">
    <div class="home-dialog-history">
      <el-button type="primary" style="margin-top: 10px">开启新对话</el-button>
      <el-table
          ref="singleTableRef"
          highlight-current-row
          :data="chatDialog"
          :show-header="false"
          @current-change="handleCurrentChange">
        <el-table-column prop="title"/>
      </el-table>
    </div>
    <div class="home-user">
      <div class="chat-history" v-for="history in chatHistory" :key="history.id">
        <div v-if="history.role === 'user'">{{ history.chat }}</div>
        <div v-if="history.role === 'ai'">{{ history.chat }}</div>
      </div>
      <el-button type="primary" :icon="Edit">开启新对话</el-button>
      <div class="user-input-big">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="可以问我任何问题"
            class="input-style"
            v-model="userPrompt">
        </el-input>
        <div>
          <el-checkbox-group v-model="functionGroup" size="large">
            <el-checkbox-button v-for="functionName in functionNameList" :key="functionName" :label="functionName">
              {{ functionName }}
            </el-checkbox-button>
          </el-checkbox-group>
          <el-button type="primary" :icon="Link"/>
          <el-button type="primary" :icon="Top"/>
        </div>
      </div>
      <el-text style="color: aliceblue">内容由AI生成，无法确保真实准确，仅供参考。</el-text>
    </div>
  </div>
</template>

<script>
import {Edit, Link, Top} from "@element-plus/icons-vue";
// import {ref} from "vue";
// import {ElTable} from "element-plus";
// const singleTableRef = ref<InstanceType<typeof ElTable>>()

export default {
  name: 'ChatView',
  computed: {
    Top() {
      return Top
    },
    Link() {
      return Link
    },
    Edit() {
      return Edit
    }
  },
  data() {
    return {
      userPrompt: '',
      chatHistory: [
        {id: 1, role: 'user', chat: '你好'},
        {id: 2, role: 'ai', chat: '你好，我是kimi'},
      ],
      chatDialog: [
        {id: 1, title: '对话1'},
        {id: 2, title: '对话2'},
        {id: 3, title: '对话3'}
      ],
      functionNameList: ['深度思考', '联网搜索'],
      functionGroup: []
    }
  },
  methods() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  width: 100%;
  background: rgba(245, 245, 245, 1);
  place-items: center;
  display: flex;
}

.home-dialog-history {
  width: 15%;
  height: 100%;
  background: black;
}

.home-user {
  opacity: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 85%;
  background: dimgrey;
}

.input-style {
  //width: 60%;
}

.el-table__row > td {
  border: none;
}

.el-table::before {
  height: 0;
}

.chat-history {
  height: 80%;
}

.user-input-big {
  background: antiquewhite;
  width: 60%;
  border-radius: 20px 20px 20px 20px;
  padding: 20px;
}
</style>
