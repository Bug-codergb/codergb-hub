<template>
  <GbDrawer v-model="drawer" :title="title" @confirm="confirmHandle">
    <div>
      <Create v-model="formData.data" :tableConstructor="tableConstructor" ref="create" />
    </div>
  </GbDrawer>
</template>

<script lang="ts" setup>
import { ref, defineExpose, defineEmits, reactive } from 'vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import Create from '@/components/content/create/Create.vue';
import { ICate } from '@/types/category/ICate';
import { createPlaylist } from '@/network/playlist';
import { ElMessage } from 'element-plus';
import { createCol } from '@/network/collection';
import useLoginStore from '@/views/login/store/index';
const userMsg = useLoginStore();
const emit = defineEmits(['refresh']);
const drawer = ref(false);
const title = ref('新增集合');
const create = ref<InstanceType<typeof Create>>();
const showDrawer = (data: ICate) => {
  drawer.value = true;
};
defineExpose({
  showDrawer
});
const formData = reactive({
  data: {
    name: '',
    cover: '',
    desc: ''
  }
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
      hint: '请输入集合名称',
      label: '名称',
      prop: 'name',
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
          type: 'textarea'
        }
      },
      hint: '请输入集合简介',
      label: '简介',
      prop: 'desc',
      required: true,
      trigger: 'blur'
    }
  ],
  [
    {
      type: {
        name: 'avatar',
        attr: {
          style: 'width:100%',
          alias: 'avatar'
        }
      },
      hint: '请选择集合封面',
      label: '集合封面',
      prop: 'cover',
      required: true,
      trigger: 'change'
    }
  ]
]);
const confirmHandle = () => {
  if (create.value && create.value.ruleFormRef) {
    create.value.ruleFormRef.validate(async (e: boolean) => {
      if (e) {
        const result = await createCol(
          formData.data.name,
          formData.data.cover,
          userMsg.userMsg.userId,
          formData.data.desc
        );
        if (result.status === 200) {
          drawer.value = false;
          emit('refresh');
          ElMessage({
            type: 'success',
            message: '集合创建成功'
          });
        }
      }
    });
  }
};
</script>

<style scoped></style>
