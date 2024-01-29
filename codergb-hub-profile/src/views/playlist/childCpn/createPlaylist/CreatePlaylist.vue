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
import { createPlaylist, updatePlaylist } from '@/network/playlist';
import { ElMessage } from 'element-plus';
import { IPlaylist } from '@/types/playlist/IPlaylist';

const emit = defineEmits(['refresh']);
const drawer = ref(false);
const title = ref('新增播放列表');
const create = ref<InstanceType<typeof Create>>();

const isUpdate = ref(false);
const showDrawer = (data: IPlaylist) => {
  drawer.value = true;
  isUpdate.value = Boolean(data);
  if (isUpdate.value) {
    formData.data.description = data.description;
    formData.data.name = data.name;
    formData.data.isPublic = data.isPublic;
    formData.data.userId = data.user.userId;
    formData.data.id = data.id;
  } else {
    formData.data.userId = '';
    formData.data.name = '';
    formData.data.description = '';
    formData.data.id = '';
    formData.data.isPublic = 1;
  }
};
defineExpose({
  showDrawer
});
const formData = reactive({
  data: {
    name: '',
    description: '',
    isPublic: 1,
    userId: '',
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
      hint: '请输入播放列表名称',
      label: '名称',
      prop: 'name',
      required: true,
      trigger: 'blur'
    }
  ],
  [
    {
      type: {
        name: 'select',
        attr: {
          style: 'width:100%'
        }
      },
      hint: '请输入播放列表状态',
      label: '状态',
      prop: 'isPublic',
      required: true,
      trigger: 'change',
      options: [
        {
          label: '私有',
          value: 0
        },
        {
          label: '公开',
          value: 1
        }
      ]
    },
    {
      type: {
        name: 'input',
        attr: {
          style: 'width:100%',
          rows: '2',
          type: 'textarea'
        }
      },
      hint: '请输入播放列表简介',
      label: '名称',
      prop: 'description',
      required: true,
      trigger: 'blur'
    }
  ]
]);
const confirmHandle = () => {
  console.log(formData);
  console.log(create.value.ruleFormRef);
  if (create.value && create.value.ruleFormRef) {
    create.value.ruleFormRef.validate(async (e: boolean) => {
      if (e) {
        const result = isUpdate.value
          ? await updatePlaylist(
              formData.data.id,
              formData.data.name,
              formData.data.isPublic,
              formData.data.description,
              formData.data.userId
            )
          : await createPlaylist(
              formData.data.name,
              formData.data.description,
              formData.data.isPublic
            );
        if (result.status === 200) {
          drawer.value = false;
          emit('refresh');
          ElMessage({
            type: 'success',
            message: `播放列表${isUpdate.value ? '更新' : '创建'}成功`
          });
        }
      }
    });
  }
};
</script>

<style scoped></style>
