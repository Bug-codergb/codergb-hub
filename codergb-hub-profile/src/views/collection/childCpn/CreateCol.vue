<template>
  <GbDrawer v-model="drawer" :title="title">
    <div>2222</div>
  </GbDrawer>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from 'vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import { ICate } from '@/types/category/ICate';
const drawer = ref(false);
const title = ref('编辑集合');
const showDrawer = (data: ICate) => {
  drawer.value = true;
};
defineExpose({
  showDrawer
});
</script>

<style scoped></style>