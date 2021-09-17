<demo>
支持 size
</demo>
<template>
  <div>
    <div>
      <Button theme="primary" size="big">基础大号</Button>
      <Button theme="primary" >基础中号</Button>
      <Button theme="primary" size="small">基础小号</Button>
    </div>
    <br/>
    <div>
      <Button size="big">默认大号</Button>
      <Button>默认中号</Button>
      <Button size="small">默认小号</Button>
    </div>
    <br/>
    <div>
      <Button theme="dashed" size="big">虚框大号</Button>
      <Button theme="dashed" >虚框中号</Button>
      <Button theme="dashed" size="small">虚框小号</Button>
    </div>
    <br/>
    <div>
      <Button theme="link" size="big">链接大号</Button>
      <Button theme="link">链接中号</Button>
      <Button size="small" theme="link">链接小号</Button>
    </div>
    <br/>
    <div>
      <Button size="big" theme="text">文本大号</Button>
      <Button theme="text">文本中号</Button>
      <Button size="small" theme="text">文本小号</Button>
    </div>
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