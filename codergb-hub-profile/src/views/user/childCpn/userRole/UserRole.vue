<script setup lang="ts" name="UserRole">
import { ref, defineExpose, defineEmits, reactive, nextTick } from 'vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import { ElMessage } from 'element-plus';
import { getAllRole, setUserRole } from '@/network/role';
import { IResponseType } from '@/types/responseType';
import { IRole } from '@/types/role';
import { IPage } from '@/types/IPage';
import { IUserMsg } from '@/types/user/IUserMsg';
const isShow = ref(false);
const roleList = ref<IRole[]>([]);
const user = ref<IUserMsg | null>(null);
const showDrawer = (data: IUserMsg) => {
  isShow.value = true;
  user.value = data;
  getAllRole<IResponseType<IPage<IRole[]>>>().then((res) => {
    roleList.value = res.data.list;
  });
  if (data && data.role && data.role.length !== 0) {
    selectRole.value = data.role.map((item) => item.id);
  }
};
const selectRole = ref<IRole[]>([]);
const handleConfirm = async () => {
  if (selectRole.value.length === 0) {
    ElMessage.closeAll();
    ElMessage.warning('请选择角色');
    return;
  }
  const res = await setUserRole({
    userId: user.value!.userId,
    roleList: selectRole.value
  });
  if (res.status === 200) {
    ElMessage.success('用户角色设置成功');
    isShow.value = false;
  }
};
defineExpose({
  showDrawer
});
</script>

<template>
  <GbDrawer v-model="isShow" title="设置用户角色" width="45%" @confirm="handleConfirm">
    <el-transfer
      v-model="selectRole"
      :titles="['Source', 'Target']"
      :data="roleList"
      :props="{ label: 'name', key: 'id', disabled: 'disabled' }"
    />
  </GbDrawer>
</template>

<style scoped lang="less"></style>
