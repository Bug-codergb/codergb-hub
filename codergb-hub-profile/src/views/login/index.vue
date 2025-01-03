<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <img class="login-left-img" src="@/assets/img/login_left.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/logo.svg" alt="" />
          <h2 class="logo-text">{{title}}</h2>
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
const title = import.meta.env.VITE_APP_NAME;
</script>
<style scoped lang="less">
@import "./index";
.flx-center{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

