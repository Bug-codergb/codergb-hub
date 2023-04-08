<template>
  <GbDialog
    v-model="isShow"
    title="通知内容"
    @cancel-handle="cancelHandle"
    @confirm-handle="confirmHandle"
  >
    <el-form :model="formData" ref="formRef">
      <el-form-item
        prop="content"
        label=""
        :rules="{ required: true, trigger: 'blur', message: '请输入通知内容' }"
      >
        <el-input
          v-model="formData.content"
          type="textarea"
          :autosize="{ minRows: 5, maxRows: 6 }"
        />
      </el-form-item>
    </el-form>
  </GbDialog>
</template>
<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue';
import GbDialog from '@/components/common/gbDialog/GbDialog.vue';
import useLoginStore from '@/views/login/store';
import { notify } from '@/network/notify';
import { IComment } from '@/types/comment/IComment';
const isShow = ref(false);
const formData = reactive({
  content: '',
  userId: ''
});
const formRef = ref();
const cancelHandle = () => {};
const login = useLoginStore();
let successHandle = () => {};
const confirmHandle = () => {
  formRef.value.validate(async (e: boolean) => {
    if (e) {
      const result = await notify(formData.content, formData.userId, login.userMsg.userId);
      if (result.status === 200) {
        successHandle();
      }
    }
  });
};
const showDialog = (row: IComment, fn: () => void) => {
  isShow.value = true;
  formData.userId = row.user.userId;
  successHandle = fn;
};
defineExpose({
  showDialog
});
</script>
