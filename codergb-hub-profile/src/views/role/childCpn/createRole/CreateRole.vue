<template>
  <GbDrawer v-model="drawer" :title="title" @confirm="confirmHandle">
    <el-form :model="formData" :rules="rules" ref="formRef">
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="formData.name" :maxlength="50" clearable placeholder="请输入角色名称" />
      </el-form-item>
    </el-form>
  </GbDrawer>
</template>
<script setup lang="ts">
import { ref, defineProps, defineExpose, defineEmits, reactive } from 'vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import { ElMessage } from 'element-plus';
import { createRole, updateRole } from '@/network/role';

const emit = defineEmits<{
  (e: 'refresh'): void;
}>();
const drawer = ref(false);
const title = ref('新增角色');
const formRef = ref();
const rules = reactive({
  name: [{ required: true, message: '角色名称不能为空', trigger: 'blur' }]
});
const formData = reactive({
  name: '',
  id: ''
});

const isUpdate = ref(false);
const showDrawer = (data: any) => {
  isUpdate.value = Boolean(data);
  drawer.value = true;
  if (isUpdate.value) {
    formData.name = data.name;
    formData.id = data.id;
  } else {
    formData.name = '';
    formData.id = undefined;
  }
};
const confirmHandle = () => {
  formRef.value &&
    formRef.value.validate(async (e: boolean) => {
      if (e) {
        const result = isUpdate.value ? await updateRole(formData.id,formData.name):await createRole(formData.name);
        if (result.status === 200) {
          ElMessage({
            message: `角色${isUpdate.value ? '更新':'创建'}成功`,
            type: 'success'
          });
          emit('refresh');
          drawer.value = false;
        }
      }
    });
};
defineExpose({
  showDrawer
});
</script>

<style scoped lang="less"></style>
