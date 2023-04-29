<template>
  <GbDrawer v-model="drawer" :title="title" @confirm="confirmHandle">
    <div>
      <Create v-model="formData.data" :table-constructor="tableConstructor" ref="create" />
    </div>
  </GbDrawer>
</template>

<script lang="ts" setup>
import { ref, defineExpose, reactive, defineEmits } from 'vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import { ICate } from '@/types/category/ICate';
import Create from '@/components/content/create/Create.vue';
import { createCate } from '@/network/category';
import { ElMessage } from 'element-plus';

const emit = defineEmits<{
  (e: 'refresh'): void;
}>();

const drawer = ref(false);
const title = ref('新增分类');
const formData = reactive({
  data: {
    name: ''
  }
});
const showDrawer = (data: ICate) => {
  drawer.value = true;
};
const tableConstructor = reactive([
  [
    {
      type: {
        name: 'input',
        attr: {
          style: 'width:100%'
        }
      },
      hint: '请输入分类名称',
      label: '分类名称',
      prop: 'name',
      required: true,
      trigger: 'blur'
    }
  ]
]);
const create = ref();
const confirmHandle = () => {
  if (create.value && create.value.ruleFormRef) {
    create.value.ruleFormRef.validate(async (e: boolean) => {
      if (e) {
        const result = await createCate(formData.data.name);
        if (result.status === 200) {
          drawer.value = false;
          emit('refresh');
          ElMessage({
            type: 'success',
            message: '新增成功'
          });
          formData.data.name = '';
        }
      }
    });
  }
};
defineExpose({
  showDrawer
});
</script>

<style scoped></style>
