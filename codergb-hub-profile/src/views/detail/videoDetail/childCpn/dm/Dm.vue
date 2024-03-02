<script setup lang="ts">
import { defineProps, ref } from 'vue';
import useTable from './hook/useTable';
import GbTable from '@/components/common/gbTable/GbTable.vue';
interface IProps {
  id: string;
}
const props = defineProps<IProps>();
const gbTable = ref();
const { tableData } = useTable(props.id, gbTable);
</script>

<template>
  <div class="dm-container">
    <GbTable :table-data="tableData" ref="gbTable" />
  </div>
</template>

<style scoped lang="less"></style>
