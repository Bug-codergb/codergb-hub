<template>
  <GbDrawer v-model="drawer" :title="title" @confirm="confirmHandle">
    <div>
      <Create v-model="formData.data" :table-constructor="tableConstructor" ref="create" />
    </div>
  </GbDrawer>
</template>

<script lang="ts" setup>
import { ref, defineExpose, defineEmits, reactive } from 'vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import { ICate } from '@/types/category/ICate';
import { ElMessage } from 'element-plus';
import { createTag } from '@/network/tag';
import Create from '@/components/content/create/Create.vue';
const drawer = ref(false);
const title = ref('新增标签');

const emit = defineEmits<{
  (e: 'refresh'): void;
}>();
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
      hint: '请输入标签名称',
      label: '标签名称',
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
        const result = await createTag(formData.data.name);
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
