<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <img class="login-left-img" src="@/assets/img/bgc.gif" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/logo.svg" alt="" />
          <h2 class="logo-text">Admin-System</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>
<script setup>
import LoginForm from "./components/LoginForm.vue";

import { useRouter } from "vue-router";

const router = useRouter();
const login = async () => {

};
</script>
<style scoped lang="less">
@import "./index.less";
.flx-center{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

