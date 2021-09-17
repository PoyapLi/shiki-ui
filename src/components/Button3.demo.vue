<demo>
支持 level
</demo>
<template>
  <div>
    <div>
      <Button theme="primary" level="main">基础按钮</Button>
      <Button theme="primary"  level="warning">警告按钮</Button>
      <Button theme="primary"  level="danger">危险按钮</Button>
    </div>
    <br/>
    <div>
      <Button level="main">默认按钮</Button>
      <Button level="warning">警告按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <br/>
    <div>
      <Button theme="dashed" level="main">虚框按钮</Button>
      <Button theme="dashed"  level="warning">虚框警告</Button>
      <Button theme="dashed"  level="danger">虚框危险</Button>
    </div>
    <br/>
    <div>
      <Button theme="link" level="main">基础链接</Button>
      <Button theme="link" level="warning">警告链接</Button>
      <Button theme="link" level="danger">危险链接</Button>
    </div>
    <br/>
    <div>
      <Button theme="text" level="main">基础文本</Button>
      <Button theme="text" level="warning">警告文本</Button>
      <Button theme="text" level="danger">危险文本</Button>
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