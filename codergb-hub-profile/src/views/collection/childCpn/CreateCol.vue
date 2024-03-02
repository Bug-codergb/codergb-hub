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
import { createCol, updateCol } from '@/network/collection';
import useLoginStore from '@/views/login/store/index';
import { ICollection } from '@/types/collection/ICollection';
const userMsg = useLoginStore();
const emit = defineEmits(['refresh']);
const drawer = ref(false);
const title = ref('新增集合');
const create = ref<InstanceType<typeof Create>>();

const isUpdate = ref(false);
const showDrawer = (data: ICollection | null) => {
  drawer.value = true;
  if (!data) {
    isUpdate.value = false;
    formData.data.name = '';
    formData.data.cover = '';
    formData.data.desc = '';
    formData.data.imgURL = '';
    title.value = '新增集合';
  } else {
    formData.data.name = data.name;
    formData.data.desc = data.description;
    isUpdate.value = true;
    formData.data.imgURL = data.picUrl;
    formData.data.cover = data.imgId ?? '';
    formData.data.id = data.id;
    title.value = '编辑集合';
  }
  console.log(data);
};
defineExpose({
  showDrawer
});
const formData = reactive({
  data: {
    name: '',
    cover: '',
    desc: '',
    imgURL: '',
    imgId: '',
    id: ''
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
      label: '封面',
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
        const result = isUpdate.value
          ? await updateCol(
              formData.data.id,
              formData.data.name,
              formData.data.cover,
              userMsg.userMsg.userId,
              formData.data.desc
            )
          : await createCol(
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
            message: `集合${isUpdate.value ? '更新' : '创建'}成功`
          });
        }
      }
    });
  }
};
</script>

<style scoped></style>
