<script setup lang="ts">
import { defineProps } from 'vue';
import useTable from './hook/useTable';
import GbTable from '@/components/common/gbTable/GbTable.vue';

interface IProps {
  id: string;
}
const props = defineProps<IProps>();
const { tableData } = useTable(props.id);
</script>

<template>
  <div class="thumb-container">
    <GbTable :table-data="tableData" />
  </div>
</template>

<style scoped lang="less"></style>
