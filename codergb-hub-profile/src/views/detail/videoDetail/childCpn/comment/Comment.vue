<script setup lang="ts">
import { defineProps, ref } from 'vue';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import useTale from './hook/useTable';
import Notify from '@/views/comment/childCpn/notify/Notify.vue';
import Detail from '@/views/comment/childCpn/detail/Detail.vue';

interface IProps {
  id: string;
  alias: string;
}
const props = defineProps<IProps>();
const gbTable = ref();
const notifyRef = ref();
const detailRef = ref();
const { tableData } = useTale(props.id, props.alias, notifyRef, gbTable, detailRef);
</script>

<template>
  <div class="comment-container">
    <GbTable :table-data="tableData" ref="gbTable" />
    <Notify ref="notifyRef" />
    <Detail ref="detailRef" />
  </div>
</template>

<style scoped lang="less"></style>
