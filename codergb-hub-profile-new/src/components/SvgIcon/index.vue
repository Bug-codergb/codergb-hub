<template>
  <svg :style="iconStyle" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="js" name="SvgIcon">
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: ""
  },
  prefix: {
    type: String,
    default: "icon"
  },
  iconStyle: {
    type: Object,
    default() {
      return {
        width: "100px",
        height: "100px"
      };
    }
  }
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
