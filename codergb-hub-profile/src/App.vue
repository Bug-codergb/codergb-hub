<template>
  <el-config-provider :locale="locale" :size="assemblySize" :button="buttonConfig">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import { onMounted, reactive, computed, nextTick } from 'vue';

import { useI18n } from 'vue-i18n';
import en from 'element-plus/es/locale/lang/en';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { getBrowserLang } from '@/utils';
import { useGlobalStore } from '@/store/modules/global';

const globalStore = useGlobalStore();

const locale = computed(() => {
  if (globalStore.language == 'zh') return zhCn;
  if (globalStore.language == 'en') return en;
  return getBrowserLang() == 'zh' ? zhCn : en;
});
// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize);

// element button config
const buttonConfig = reactive({ autoInsertSpace: false });
</script>
<style lang="less"></style>
