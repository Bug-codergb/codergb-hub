<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="userName">
      <el-input v-model="loginForm.userName" placeholder="请输入用户名">
        <template #prefix>
          <el-icon class="el-input__icon">
            <user />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" show-password autocomplete="new-password">
        <template #prefix>
          <el-icon class="el-input__icon">
            <lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="Back" round size="large" @click="resetForm(loginFormRef)"> 返回登陆 </el-button>
    <el-button :icon="UserFilled" round size="large" type="primary" :loading="loading" @click="login(loginFormRef)">
      注册
    </el-button>
  </div>
</template>


<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { register as registerReq } from '@/network/login';
import { Back, UserFilled, Pointer} from "@element-plus/icons-vue";
import { ElMessage } from 'element-plus';

const router = useRouter();

const loginFormRef = ref();
const loginRules = reactive({
  userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loading = ref(false);
const loginForm = reactive({
  userName: "",
  password: ""
});

// login
const login = formEl => {
  if (!formEl) return;
  formEl.validate(async valid => {
    if (!valid) return;
    loading.value = true;
    try {
      if (loginForm.userName.trim().length !== 0 && loginForm.password.trim().length !== 0) {
        registerReq(loginForm.userName, loginForm.password).then((res) => {
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
    } finally {
      loading.value = false;
    }
  });
};

// resetForm
const resetForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
  router.replace({
    path: '/login'
  });
};

onMounted(() => {
  // 监听 enter 事件（调用登录）
  document.onkeydown = e => {
    if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
      if (loading.value) return;
      login(loginFormRef.value);
    }
  };
});

onBeforeUnmount(() => {
  document.onkeydown = null;
});
</script>

<style scoped lang="less">
@import "../index.less";
</style>
