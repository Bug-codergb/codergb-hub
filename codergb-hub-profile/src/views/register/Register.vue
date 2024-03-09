<template>
  <div class="login-outer">
    <div class="login">
      <p class="title-label">codergb-hub</p>
      <div class="login-account">
        <span class="label">账号</span>
        <input v-model="account.userName" placeholder="请输入您的用户名" :maxlength="60" />
      </div>
      <div class="login-password">
        <span class="label">密码</span>
        <input
          v-model="account.password"
          type="password"
          placeholder="请输入密码"
          :maxlength="60"
        />
      </div>
      <div class="control-btn">
        <div class="register-btn" @click="loginHandler">
          <el-icon><ArrowLeft /></el-icon>
          <span> 返回登录 </span>
        </div>
        <div class="login-btn" @click="register">注册</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { register as registerReq } from '@/network/login';
import { ArrowLeft } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { HOME_PATH } from '@/router/constant';
const router = useRouter();
const account = reactive({
  userName: '',
  password: ''
});
const register = async () => {
  if (account.userName.trim().length !== 0 && account.password.trim().length !== 0) {
    registerReq(account.userName, account.password).then((res) => {
      if (res.status === 200) {
        router.push({
          path: '/login'
        });
        ElMessage({
          message: '注册成功',
          type: 'success'
        });
      }
    });
  } else {
    ElMessage.closeAll();
    ElMessage({
      message: '用户名或者密码不能为空',
      type: 'warning'
    });
  }
};
const loginHandler = () => {
  router.push({
    path: '/login'
  });
};
</script>

<style scoped lang="less">
.login-outer {
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url('../../assets/img/bgc.gif');
  background-repeat: no-repeat;
  background-size: contain;
  .login {
    position: absolute;
    background-color: #fff;
    left: 75%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    padding: (30/40rem) (50/40rem) (60/40rem) (50/40rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: (8/40rem);
    .title-label {
      padding: (40/40rem) 0;
    }
    .login-account {
      width: 100%;
      border-top: 1px solid #e3e5e7;
      border-left: 1px solid #e3e5e7;
      border-right: 1px solid #e3e5e7;
      display: flex;
      align-items: center;
      padding: (10/40rem) (20/40rem);
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      .label {
        color: #212121;
        font-size: (20/40rem);
        margin: 0 (15/40rem) 0 0;
        white-space: nowrap;
      }
      input {
        padding: (5/40rem);
        width: (340/40rem);
        color: #c4c4c4;
      }
    }
    .login-password {
      width: 100%;
      border: 1px solid #e3e5e7;
      display: flex;
      align-items: center;
      padding: (10/40rem) (20/40rem);
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      .label {
        color: #212121;
        font-size: (20/40rem);
        margin: 0 (15/40rem) 0 0;
        white-space: nowrap;
      }
      input {
        padding: (5/40rem);
        width: (340/40rem);
        color: #c4c4c4;
      }
    }
    .control-btn {
      display: flex;
      align-items: center;
      margin: (50/40rem) 0 0 0;
      justify-content: space-between;
      width: 100%;
      .register-btn {
        border: 1px solid #e3e5e7;
        font-size: (20/40rem);
        padding: (10/40rem) (80/40rem);
        border-radius: (8/40rem);
        cursor: pointer;
        white-space: nowrap;
        display: flex;
        align-items: center;
        .el-icon {
          margin: 0 10px 0 0;
        }
        &:hover {
          color: var(--primary-color);
          border-color: var(--primary-color);
        }
      }
      .login-btn {
        background-color: var(--primary-color);
        color: #ffffff;
        font-size: (20/40rem);
        padding: (10/40rem) (80/40rem);
        border-radius: (8/40rem);
        cursor: pointer;
        white-space: nowrap;
        margin: 0 0 0 20px;
        &:hover {
          background-color: rgba(255, 0, 0, 0.65);
        }
      }
    }
  }
}
</style>
