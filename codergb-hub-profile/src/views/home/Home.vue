<template>
  <div class="home">
    <el-container class="home-inner">
      <el-header class="codergb-header">
        <TopBar />
      </el-header>
      <el-container class="g-container">
        <el-aside width="200px" class="codergb-aside">
          <NavBar />
        </el-aside>
        <el-container>
          <el-main class="codergb-main">
            <RouterView v-slot="{ Component, route }">
              <transition appear name="fade-transform" mode="out-in">
                <component :is="Component" />
              </transition>
            </RouterView>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted } from 'vue';
import TopBar from '../../components/topBar/TopBar.vue';
import NavBar from '@/components/navBar/NavBar.vue';

import localCache from '@/utils/cache';
import useLoginStore from '@/views/login/store';
import useChannelStore from '@/store/modules/channel';

import watermark from 'watermark-dom';
const loginInit = useLoginStore();
const channelInit = useChannelStore();
loginInit.userMsg = localCache.getCache('userMsg');
channelInit.channel = localCache.getCache('channel');
onMounted(() => {
  //watermark.load({ watermark_txt: '测试水印' });
});
</script>

<style scoped lang="less">
.home {
  background-color: #fff;
  width: 100%;
  height: 100%;
}
.home-inner {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.g-container {
  width: 100%;
  height: calc(100% - 60px);
}
.codergb-header {
  border-bottom: 1px solid var(--line-color);
}
.codergb-aside {
  border-right: 1px solid var(--line-color);
  background-color: #0c2135;
}
.codergb-main {
  height: 100%;
  width: 100%;

  background-color: #fff;
  padding: 15px;
}
</style>
<style lang="less">
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
}
.fade-transform-enter-from {
  opacity: 0;
  transition: all 0.2s;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transition: all 0.2s;
  transform: translateX(30px);
}
</style>
