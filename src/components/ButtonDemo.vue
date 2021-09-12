<template>
  <div>
    button 示例
  </div>
  <h1>示例1</h1>
  <div>
    <Button theme="button">你好</Button>
    <Button theme="dashed">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="superbig">特大</Button>
    <Button size="big">大大</Button>
    <Button>普通</Button>
    <Button size="small">小小</Button>
  </div>
  <div>
    <Button theme="dashed" size="superbig">特大</Button>
    <Button theme="dashed" size="big">大大</Button>
    <Button theme="dashed">普通</Button>
    <Button theme="dashed" size="small">小小</Button>
  </div>
  <div>
    <Button theme="link" size="superbig">特大</Button>
    <Button theme="link" size="big">大大</Button>
    <Button theme="link">普通</Button>
    <Button theme="link" size="small">小小</Button>
  </div>
  <div>
    <Button theme="text" size="superbig">特大</Button>
    <Button theme="text" size="big">大大</Button>
    <Button theme="text">普通</Button>
    <Button theme="text" size="small">小小</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <Button level="main">主要按键</Button>
    <Button>普通按键</Button>
    <Button level="danger">危险按键</Button>
    <Button level="warning">提示</Button>
  </div>
  <div>
    <Button theme="dashed" level="main">主要按键</Button>
    <Button theme="dashed">普通按键</Button>
    <Button theme="dashed" level="danger">危险按键</Button>
    <Button theme="dashed" level="warning">提示</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要按键</Button>
    <Button theme="link">普通按键</Button>
    <Button theme="link" level="danger">危险按键</Button>
    <Button theme="link" level="warning">提示</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要按键</Button>
    <Button theme="text">普通按键</Button>
    <Button theme="text" level="danger">危险按键</Button>
    <Button theme="text" level="warning">提示</Button>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>禁用键</Button>
    <Button theme="dashed" disabled>禁用键</Button>
    <Button theme="link" disabled>禁用链接</Button>
    <Button theme="text" disabled>禁用键</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup(){
    const onClick = ()=>{
      console.log('你好');
    }
    return {onClick}
  }
};

</script>