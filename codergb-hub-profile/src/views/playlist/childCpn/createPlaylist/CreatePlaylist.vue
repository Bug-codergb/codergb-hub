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

const emit = defineEmits(['refresh']);
const drawer = ref(false);
const title = ref('新增播放列表');
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
    description: '',
    isPublic: 1
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
        const result = await createPlaylist(
          formData.data.name,
          formData.data.description,
          formData.data.isPublic
        );
        if (result.status === 200) {
          drawer.value = false;
          emit('refresh');
          ElMessage({
            type: 'success',
            message: '播放列表创建成功'
          });
        }
      }
    });
  }
};
</script>

<style scoped></style>
