<template>
  <GbDrawer v-model="drawer" :title="title" @confirm="confirmHandle">
    <el-form :model="formData.data" label-position="top" :rules="rules" ref="create">
      <el-form-item v-if="!isUpdate">
        <el-alert title="新建用户会同步创建频道" type="success" />
      </el-form-item>
      <el-form-item label="用户名" prop="userName">
        <el-input
          v-model="formData.data.userName"
          :maxlength="100"
          clearable
          placeholder="请输入人用户名"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="formData.data.password"
          type="password"
          maxlength="100"
          placeholder="请输入密码"
          clearable
        />
      </el-form-item>
      <el-form-item label="是否为探索" prop="isExplore">
        <el-radio-group v-model="formData.data.isExplore">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="存储历史记录" prop="history">
        <el-radio-group v-model="formData.data.history">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <div class="img-container">
          <template v-if="isPrev">
            <img :src="imgURL" />
          </template>
          <template v-if="!isPrev">
            <el-icon class="upload-icon"><Picture class="upload-icon" /></el-icon>
            <input type="file" @change="(e) => fileChange(e, 'PROP')" />
          </template>
          <template v-if="isPrev">
            <div class="mask" @click="deleteCover">
              <el-icon><Delete /></el-icon>
            </div>
          </template>
        </div>
      </el-form-item>
    </el-form>

    <GbUpload
      v-model="isShowUpload"
      :file="file"
      :aspectRatio="aspectRatio"
      :realWidth="realWidth"
      :itemWidth="itemWidth"
      :scale="scale"
      @confirm="confirmImgHandle"
      :upload-req="userUploadAvatar"
      :user-id="formData.data.userId"
      alias="avatar"
    />
  </GbDrawer>
</template>
<script setup lang="ts">
import { ref, defineExpose, defineEmits, reactive, nextTick } from 'vue';
import { getUuid } from '../../../../utils/index';
import { createUser, updateUser, userUploadAvatar } from '@/network/user';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import { ElMessage } from 'element-plus';

import GbUpload from '@/components/common/gbUpload/GbUpload.vue';
const emit = defineEmits(['refresh']);
const drawer = ref(false);
const title = ref('新增用户');
const create = ref();
const rules = {
  userName: [{ required: true, message: '用户名称不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
  avatar: [{ required: true, message: '用户头像不能为空', trigger: 'change' }]
};
const formData = reactive({
  data: {
    userId: '',
    userName: '',
    password: '',
    isExplore: 0,
    history: 1,
    avatar: null,
    fileInfo: {
      mimetype: '',
      destination: '',
      filename: '',
      originalname: '',
      size: 0,
      avatarUrl: ''
    }
  }
});
const isShowUpload = ref(false);
const file = ref();
const aspectRatio = ref(1);
const realWidth = ref(200);
const scale = ref(1);
const itemWidth = ref(100);
const isPrev = ref(false);
const imgURL = ref('');
const deleteCover = () => {
  isPrev.value = false;
  file.value = null;
  formData.data.avatar = null;
};
const fileChange = (e: Event, prop: string) => {
  const tar = e.target as HTMLInputElement;
  if (tar.files && tar.files[0]) {
    if (!tar.files[0].type.includes('image')) {
      ElMessage.closeAll();
      ElMessage({
        message: '请选择图片文件',
        type: 'warning'
      });
      return;
    }
    isShowUpload.value = true;
    nextTick(() => {
      file.value = tar.files![0];
      formData.data.avatar = file.value;
    });
  }
};
const isUpdate = ref(false);
const showDrawer = (data: any) => {
  drawer.value = true;
  isUpdate.value = Boolean(data);
  //  如果是新增
  if (!isUpdate.value) {
    title.value = '新增用户';
    formData.data.userId = getUuid();
    formData.data.userName = '';
    formData.data.password = '';

    formData.data.isExplore = 0;
    formData.data.history = 1;
    isShowUpload.value = false;
    file.value = null;
    isPrev.value = false;
    imgURL.value = '';
  } else {
    title.value = '更新用户';
    formData.data.userId = data.userId;
    formData.data.userName = data.userName;
    formData.data.password = '123';
    formData.data.history = data.history;
    formData.data.isExplore = data.isExplore;
    formData.data.avatar = data.avatarUrl;
    isShowUpload.value = false;
    isPrev.value = true;
    imgURL.value = data.avatarUrl;

    formData.data.fileInfo.avatarUrl = data.avatarUrl;
    formData.data.fileInfo.destination = data.dest;
    formData.data.fileInfo.filename = data.filename;
    formData.data.fileInfo.size = data.size;
    formData.data.fileInfo.originalname = data.originalname;
    formData.data.fileInfo.mimetype = data.mimetype;
  }
};
defineExpose({
  showDrawer
});
const confirmImgHandle = (e: { file: File; id: string; res: any }) => {
  isPrev.value = true;
  imgURL.value = URL.createObjectURL(e.file);
  formData.data.fileInfo = e.res;
};
const confirmHandle = () => {
  if (create.value) {
    create.value.validate(async (e: boolean) => {
      if (e) {
        let params = {
          userId: formData.data.userId,
          userName: formData.data.userName,
          password: formData.data.password,
          isExplore: formData.data.isExplore,
          history: formData.data.history,
          ...formData.data.fileInfo
        };

        const result = isUpdate.value ? await updateUser(params) : await createUser(params);
        if (result.status === 200) {
          drawer.value = false;
          emit('refresh');
          ElMessage({
            type: 'success',
            message: `用户${isUpdate.value ? '更新' : '添加'}成功`
          });
        }
      }
    });
  }
};
</script>

<style scoped lang="less">
.img-container {
  width: 100%;
  background-color: var(--img-bgc);
  height: (150/40rem);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .upload-icon {
    font-size: (50/40rem);
    color: var(--primary-color);
  }
  img {
    height: 100%;
    object-fit: contain;
  }
  video {
    height: 100%;
  }
  & > input {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.2s;
    .el-icon {
      color: #fff;
      font-size: (50/40rem);
    }
  }
}
.img-container:hover {
  .mask {
    opacity: 1;
  }
}
</style>
