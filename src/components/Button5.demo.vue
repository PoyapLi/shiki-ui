<demo>
支持显示加载中
</demo>
<template>
  <div>
    <Button theme="primary" loading>加载中</Button>
    <Button loading>加载中</Button>
    <Button theme="dashed" loading>加载中</Button>
    <Button theme="link" loading>链接加载中</Button>
    <Button theme="text" loading>文本加载中</Button>
    <br/>
    <Button theme="primary" >加载完毕</Button>
    <Button>加载完毕</Button>
    <Button theme="dashed" >加载完毕</Button>
    <Button theme="link" >链接加载完毕</Button>
    <Button theme="text" >文本加载完毕</Button>

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