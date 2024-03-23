<template>
  <div class="nav-bar">
    <ul class="list">
      <li v-for="(item,index) in navList" 
      :class="{active:index===currentIndex}"
      :key="item.title" @click="navClick(item,index)">{{ item.title }}</li>
    </ul>
  </div>
</template>
<script setup>
const router = useRouter();
const currentIndex = ref(0)
const navList = [
  {
    title: "首页",
    path:"/home/recommend"
  },
  {
    title: "探索",
    path:"/home/explore"
  },
  {
    title: "分类",
    path:"/home/cate"
  },
  {
    title: "订阅内容",
    path:"/home/subscriptions"
  },
  {
    title: "媒体库",
    path:"/home/library"
  },
  {
    title: "历史记录",
    path:"/home/history"
  },
  {
    title: "您的视频",
    path:"/home/profile"
  },
  {
    title: "稍后观看",
    path:"/home/later"
  },
  {
    title: "顶过的视频",
    path:"/home/thumb"
  }
]
const navClick = (item,index) => {
  console.log(item, index);
  currentIndex.value = index;
  router.push({
    path:item.path
  })
}
</script>
<style scoped lang="less">
  .nav-bar{
    border-right: 1px solid pink;
    .list{
      &>li{
        padding: 10px 20px;
        cursor: pointer;
        &.active{
          color: #ea3323;
        }
      }
    }
  }
</style>