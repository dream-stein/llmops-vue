<template>
  <div class="chat-container">
    <!-- 左侧对话概要列表 -->
    <div class="chat-sidebar">
      <!-- 新增对话按钮 -->
      <div class="sidebar-header">
        <el-button type="primary" @click="addNewChat" class="new-chat-btn">新增对话</el-button>
      </div>
      <!-- 对话列表 -->
      <el-scrollbar class="chat-list">
        <div
            v-for="(chat, index) in chatList"
            :key="index"
            class="chat-item"
            :class="{ active: activeChatIndex === index }"
            @click="switchChat(index)"
        >
          <div class="chat-info">
            <div class="chat-title">{{ chat.title }}</div>
            <div class="chat-last-message">{{ chat.lastMessage }}</div>
          </div>
          <!-- 操作图标 -->
          <el-dropdown trigger="click" @command="handleCommand(index, $event)">
            <el-icon class="chat-actions-icon"><MoreFilled /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="rename">重命名</el-dropdown-item>
                <el-dropdown-item command="delete">删除</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-scrollbar>
    </div>

    <!-- 右侧聊天窗口 -->
    <div class="chat-main">
      <!-- 聊天记录区域 -->
      <el-scrollbar class="chat-messages">
        <transition-group name="fade" tag="div">
          <div
              v-for="(message, index) in activeChat.messages"
              :key="index"
              class="message"
              :class="{ 'user-message': message.sender === 'user', 'bot-message': message.sender === 'bot' }"
          >
            <!-- GPT 头像 -->
            <el-avatar
                v-if="message.sender === 'bot'"
                :src="message.avatar"
                class="avatar"
            />
            <div class="message-content">
              {{ message.text }}
            </div>
          </div>
        </transition-group>
      </el-scrollbar>

      <!-- 输入框区域 -->
      <div class="chat-input-area">
        <el-input
            v-model="newMessage"
            @keyup.enter="sendMessage"
            placeholder="输入消息..."
            class="chat-input"
        />
        <div class="chat-options">
          <el-checkbox v-model="deepThinking">深度思考</el-checkbox>
          <el-checkbox v-model="webSearch">联网搜索</el-checkbox>
          <el-button type="primary" @click="uploadFile" class="upload-btn">附件上传</el-button>
          <el-select v-model="selectedModel" placeholder="选择模型" class="model-select">
            <el-option
                v-for="model in modelOptions"
                :key="model.value"
                :label="model.label"
                :value="model.value"
            />
          </el-select>
          <el-button type="primary" @click="sendMessage" class="send-btn">发送</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MoreFilled } from '@element-plus/icons-vue'; // 引入图标

export default {
  name: 'ChatView',
  components: {
    MoreFilled, // 注册图标组件
  },
  data() {
    return {
      activeChatIndex: 0,
      chatList: [
        {
          title: '服务咨询',
          lastMessage: '你好！我是DeepSeek助手...',
          messages: [
            {
              sender: 'bot',
              text: '你好！我是DeepSeek助手，有什么可以帮你的吗？',
              avatar: 'https://img0.baidu.com/it/u=2625868801,1267503555&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            },
          ],
        },
      ],
      newMessage: '',
      deepThinking: false,
      webSearch: false,
      selectedModel: '', // 当前选择的模型
      modelOptions: [ // 模型选项
        { label: 'GPT-3.5', value: 'gpt-3.5' },
        { label: 'GPT-4', value: 'gpt-4' },
        { label: 'DeepSeek-V3', value: 'deepseek-v3' },
      ],
    };
  },
  computed: {
    activeChat() {
      return this.chatList[this.activeChatIndex];
    },
  },
  methods: {
    // 切换对话
    switchChat(index) {
      this.activeChatIndex = index;
    },
    // 新增对话
    addNewChat() {
      const newChat = {
        title: `新对话 ${this.chatList.length + 1}`,
        lastMessage: '开始新的对话...',
        messages: [
          {
            sender: 'bot',
            text: '你好！我是DeepSeek助手，有什么可以帮你的吗？',
            avatar: 'https://img0.baidu.com/it/u=2625868801,1267503555&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          },
        ],
      };
      this.chatList.push(newChat);
      this.activeChatIndex = this.chatList.length - 1;
    },
    // 发送消息
    sendMessage() {
      if (this.newMessage.trim() === '') return;

      // 添加用户消息
      this.activeChat.messages.push({ sender: 'user', text: this.newMessage });
      this.activeChat.lastMessage = this.newMessage; // 更新最后一条消息
      this.newMessage = '';

      // 模拟 GPT 回复
      setTimeout(() => {
        this.activeChat.messages.push({
          sender: 'bot',
          text: '这是模拟的回复。',
          avatar: 'https://img0.baidu.com/it/u=2625868801,1267503555&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        });
        this.activeChat.lastMessage = '这是模拟的回复。'; // 更新最后一条消息
      }, 1000);
    },
    // 上传文件
    uploadFile() {
      // 这里可以添加文件上传的逻辑
      console.log('上传文件');
    },
    // 处理操作菜单命令
    handleCommand(index, command) {
      if (command === 'delete') {
        this.deleteChat(index);
      } else if (command === 'rename') {
        this.renameChatTitle(index);
      }
    },
    // 删除对话
    deleteChat(index) {
      this.$confirm('确定要删除该对话吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.chatList.splice(index, 1);
        if (this.activeChatIndex === index) {
          this.activeChatIndex = Math.max(0, index - 1);
        }
        this.$message.success('删除成功');
      }).catch(() => {});
    },
    // 重命名对话标题
    renameChatTitle(index) {
      this.$prompt('请输入新的对话标题', '重命名', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: this.chatList[index].title,
      }).then(({ value }) => {
        this.chatList[index].title = value;
        this.$message.success('重命名成功');
      }).catch(() => {});
    },
  },
};
</script>

<style scoped>
/* 容器布局 */
.chat-container {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
}

/* 左侧对话列表 */
.chat-sidebar {
  width: 20%;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.new-chat-btn {
  width: 100%;
}

.chat-list {
  flex: 1;
  overflow-y: auto;
}

.chat-item {
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chat-item:hover {
  background-color: #f0f0f0;
}

.chat-item.active {
  background-color: #e3f2fd;
}

.chat-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.chat-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.chat-last-message {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

/* 操作图标 */
.chat-actions-icon {
  cursor: pointer;
  font-size: 16px;
  color: #666;
}

.chat-actions-icon:hover {
  color: #333;
}

/* 右侧聊天窗口 */
.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 80%;
}

.chat-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}

.message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
}

.message-content {
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
}

.user-message {
  justify-content: flex-end;
}

.user-message .message-content {
  background-color: #007bff;
  color: #fff;
}

.bot-message {
  justify-content: flex-start;
}

.bot-message .message-content {
  background-color: #e0e0e0;
  color: #333;
}

.avatar {
  margin-right: 8px;
}

/* 输入框区域 */
.chat-input-area {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
}

.chat-input {
  flex: 1;
  margin-bottom: 8px;
}

.chat-options {
  display: flex;
  align-items: center;
  gap: 8px;
}

.upload-btn,
.send-btn {
  margin-left: auto;
}

/* 模型选择器样式 */
.model-select {
  width: 120px;
}

/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>