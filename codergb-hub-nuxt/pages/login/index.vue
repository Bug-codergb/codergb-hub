<template>
  <div class="login-container">
    <div class="login-inner">
      <div class="item">
        <span>用户名:</span>
        <input v-model="account.userName"/>
      </div>
      <div class="item">
        <span>密码:</span>
        <input v-model="account.password"/>
      </div>
      <div class="operation">
        <button>注册</button>
        <button @click="handleLogin">登录</button>
      </div>
    </div>  
  </div>
</template>
<script setup>
const router = useRouter();
const account = reactive({
  userName: '',
  password:''
})
const handleLogin = async () => {
  const res = await useFetch("/api/login", {
    method: 'post',
    body: {
      userName: account.userName,
      password:account.password
    }  
  });

  cache.setCache("userMsg",res.data.value.data);
  if (res.data.value.status === 200) {
    router.push({
      path:"/home"
    })
  }
}
</script>