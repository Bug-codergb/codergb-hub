<script setup lang="ts">
import { ref, reactive, defineEmits } from 'vue';
import { ElMessage } from 'element-plus';
import { updateDm } from '@/network/dm';
const isShow = ref(false);
const emit = defineEmits<{
  (e: 'refresh'): void;
}>();
const rules = reactive({
  content: [{ required: true, message: '弹幕内容不能为空', trigger: 'blur' }]
});
const formData = reactive({
  content: ''
});
const detail = ref<any>({});
const showDialog = (data: any) => {
  detail.value = data;
  isShow.value = true;
  formData.content = data.text;
};
const formRef = ref();
const cancelHandler = () => {
  isShow.value = true;
};
const confirmHandler = () => {
  formRef.value &&
    formRef.value.validate(async (e: boolean) => {
      if (e) {
        const result = await updateDm(detail.value.id, formData.content);
        if (result.status === 200) {
          emit('refresh');
          isShow.value = false;
          ElMessage({
            type: 'success',
            message: '更新成功'
          });
        }
      }
    });
};
defineExpose({
  showDialog
});
</script>

<template>
  <div class="edit-dm">
    <el-dialog v-model="isShow" title="编辑弹幕" width="500">
      <el-form :model="formData" :rules="rules" label-position="top" ref="formRef">
        <el-form-item label="弹幕内容" prop="content">
          <el-input v-model="formData.content" type="textarea" placeholder="请输入弹幕内容" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="cancelHandler()">取消</el-button>
          <el-button type="primary" @click="confirmHandler()"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="less"></style>
