<template>
  <GbDrawer v-model="drawer" :title="title" @confirm="confirmHandle">
    <div>
      <Create v-model="formData.data" :tableConstructor="tableConstructor" ref="create" />
    </div>
  </GbDrawer>
</template>
<script setup lang="ts">
import { ref, defineExpose, defineEmits, reactive } from 'vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import Create from '@/components/content/create/Create.vue';
import { ElMessage } from 'element-plus';
import { register } from '@/network/login';
import { ICate } from '@/types/category/ICate';
const emit = defineEmits(['refresh']);
const drawer = ref(false);
const title = ref('新增集合');
const create = ref<InstanceType<typeof Create>>();

const formData = reactive({
  data: {
    userName: '',
    password: '',
    cover: ''
  }
});
const showDrawer = (data: ICate | null) => {
  drawer.value = true;
  if (!data) {
    formData.data.userName = '';
    formData.data.password = '';
    formData.data.cover = '';
  }
};
defineExpose({
  showDrawer
});
const tableConstructor = reactive([
  [
    {
      type: {
        name: 'input',
        attr: {
          style: 'width:100%'
        }
      },
      hint: '请输入用户名',
      label: '名称',
      prop: 'userName',
      required: true,
      trigger: 'blur'
    }
  ],
  [
    {
      type: {
        name: 'input',
        attr: {
          style: 'width:100%',
          rows: '2',
          type: 'password'
        }
      },
      hint: '请输入密码',
      label: '密码',
      prop: 'password',
      required: true,
      trigger: 'blur'
    }
  ]
  // [
  //   {
  //     type: {
  //       name: 'avatar',
  //       attr: {
  //         style: 'width:100%',
  //         alias: 'avatar'
  //       }
  //     },
  //     hint: '请选择用户头像',
  //     label: '封面',
  //     prop: 'cover',
  //     required: true,
  //     trigger: 'change'
  //   }
  // ]
]);
const confirmHandle = () => {
  if (create.value && create.value.ruleFormRef) {
    create.value.ruleFormRef.validate(async (e: boolean) => {
      if (e) {
        console.log(formData);
        const result = await register(formData.data.userName, formData.data.password);
        if (result.status === 200) {
          drawer.value = false;
          emit('refresh');
          ElMessage({
            type: 'success',
            message: '用户添加成功'
          });
        }
      }
    });
  }
};
</script>

<style scoped lang="less"></style>
