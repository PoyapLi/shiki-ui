<demo>
常规使用
</demo>
<template>
  <div>
    <Button theme="primary">基础</Button>
    <Button>默认</Button>
    <Button theme="dashed">虚框</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>

  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>