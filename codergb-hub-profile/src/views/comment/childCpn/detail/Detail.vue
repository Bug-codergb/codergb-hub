<template>
  <GbDialog v-model="isShow" title="评论详情" :is-show-footer="false">
    <template v-if="comment">
      <div class="comment-content">
        <div class="comment">
          <div class="left-container">
            <img :src="comment.user.avatarUrl" />
          </div>
          <div class="right-container">
            <p class="user-name">{{ comment.user.userName }}</p>
            <p class="content">{{ comment.content }}</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="tip-from" v-if="isShowSource">
          <p class="tip">评论来自于</p>
          <el-tag
            :type="
              comment.video != null ? 'success' : comment.moment != null ? 'warning' : 'danger'
            "
          >
            {{ comment.video != null ? '视频' : comment.moment != null ? '动态' : '评论' }}
          </el-tag>
        </div>
        <div class="form">
          <span>
            {{
              comment.video != null
                ? comment.video.name
                : comment.moment != null
                ? comment.moment.title
                : (comment.reply as IComment)?.content
            }}
          </span>
        </div>
        <template v-if="comment.video">
          <div class="img-container" @click="handleVideorouter">
            <img :src="comment.video.picUrl" />
          </div>
        </template>
        <template v-if="comment.moment">
          <div class="img-container">
            <img :src="comment.moment.picUrl" />
          </div>
        </template>
      </div>
    </template>
  </GbDialog>
</template>
<script setup lang="ts">
import { ref, defineExpose, defineProps, withDefaults } from 'vue';
import { useRouter } from 'vue-router';
import GbDialog from '@/components/common/gbDialog/GbDialog.vue';
import { IComment } from '@/types/comment/IComment';
import { VIDEO_DETAIL_PATH } from '@/router/constant';

interface IProps {
  isShowSource: boolean;
}
const prop = withDefaults(defineProps<IProps>(), {
  isShowSource: true
});
const router = useRouter();
const isShow = ref(false);
const comment = ref<IComment | null>();
const showDialog = (row: IComment) => {
  isShow.value = true;
  comment.value = row;
};
const handleVideorouter = () => {
  console.log(comment.value);
  comment.value &&
    comment.value.video &&
    router.push({
      path: VIDEO_DETAIL_PATH + '/' + comment.value.video.id
    });
};
defineExpose({
  showDialog
});
</script>
<style lang="less" setup>
.comment-content {
  .comment {
    display: flex;
    .left-container {
      width: (60/40rem);
      height: (60/40rem);
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .right-container {
      width: 90%;
      margin: 0 0 0 15px;
      .user-name {
        font-size: (18/40rem);
        font-weight: bold;
      }
      .content {
        font-size: (16/40rem);
        width: 100%;
        margin: 5px 0 0 0;
      }
    }
  }
  .tip {
    font-size: (18/40rem);
    font-weight: bold;
    color: #065fd4;
    margin: (12/40rem) 0;
  }
}
.line {
  height: 0.8px;
  background-color: var(--line-color);
  width: 100%;
  margin: 10px 0 0 0;
}
.tip-from {
  display: flex;
  align-items: center;
  width: 100%;
  margin: (15/40rem) 0;
  .tip {
    margin: 0 (15/40rem) 0 0;
  }
}
.form {
  span {
    font-size: (18/40rem);
    color: #47b1ff;
  }
}
.img-container {
  margin: 10px 0 0 0;
  width: (350/40rem);
  img {
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
