<template>
  <!-- 分页组件 -->
  <el-pagination
    :background="true"
    :current-page="pageable.pageNum"
    :page-size="pageable.pageSize"
    :page-sizes="[10, 25, 50, 100]"
    :total="pageable.total"
    :size="globalStore?.assemblySize ?? 'default'"
    layout="total, sizes, prev, pager, next, jumper"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  ></el-pagination>
</template>

<script setup lang="js" name="Pagination">
import { useGlobalStore } from "@/stores/modules/global";
const globalStore = useGlobalStore();

defineProps({
  pageable: {
    type: Object,
    default() {
      return {};
    }
  },
  handleSizeChange: {
    type: Function,
    default() {
      return () => {};
    }
  },
  handleCurrentChange: {
    type: Function,
    default() {
      return () => {};
    }
  }
});
</script>
