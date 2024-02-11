<template>
  <div class="setting">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>用户信息</span>
          <div>
            <el-button class="button" type="danger" text @click="logOff">注销账号</el-button>
            <el-button class="button" type="primary" text>编辑</el-button>
          </div>
        </div>
      </template>
      <el-row>
        <el-col :span="4">
          <div class="img-container">
            <el-avatar :src="loginMsg.userMsg.avatarUrl" :size="100" />
          </div>
        </el-col>
        <el-col :span="20">
          <el-row>
            <el-col :span="12">
              <span class="label">用户名</span>
              <span class="value">{{ loginMsg.userMsg.userName }}</span>
            </el-col>
            <el-col :span="12">
              <span class="label">密码</span>
              <span class="value">*****</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <span class="label">加入时间</span>
              <span class="value">{{
                moment(channel.channel.createTime).format('yyyy-MM-DD HH:mm')
              }}</span>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <span class="label">存储历史记录</span>
              <span class="value">{{ loginMsg.userMsg.history === 1 ? '是' : '否' }}</span>
            </el-col>
            <el-col :span="12">
              <span class="label">是否为探索</span>
              <span class="value">{{ loginMsg.userMsg.isExplore === 1 ? '是' : '否' }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="label">频道</span>
              <span class="value channel">{{ channel.channel.name }}</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus';
import moment from 'moment';
import useLoginStore from '@/views/login/store';
import useChannelStore from '@/store/modules/channel';
const loginMsg = useLoginStore();
const channel = useChannelStore();

const logOff = () => {
  ElMessageBox.confirm('确定要注销此账号么?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed'
      });
    })
    .catch(() => {});
};
</script>
<style scoped lang="less">
.setting {
  font-size: (24/40rem);
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-row {
    margin: 0 0 10px 0;
  }
  .label {
    &::after {
      content: ':';
      margin: 0 5px;
    }
  }
  .channel {
    cursor: pointer;
    color: #47b1ff;
  }
}
</style>
