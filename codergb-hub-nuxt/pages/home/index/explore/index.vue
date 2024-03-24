<template>
  <div>
    探索{{ counter }}
    <button @click="add">加1</button>
    <button @click="sub">减1</button>
  </div>
</template>
<script setup>
const counter = useState("counter", () => 12)
const add = () => {
  counter.value+=1
}
const sub = () => {
  counter.value-=1
}
</script>