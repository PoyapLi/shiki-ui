# 开始使用

请确认已经[安装](#/doc/install)本组件库。

在您的代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "shiki-ui";
import "shiki-ui/dist/lib/shiki.css";
```

现在，您可以使用我提供的组件了。

## Vue 单文件组件

代码示例1 Button ：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog, openDialog} from "shiki-ui";
import "shiki-ui/dist/lib/shiki.css";
export default {
  name: 'App',
  components: {Button, Tabs, Switch, Dialog},
}
</script>
```
代码示例2 Switch :

```
<template>
  <div>
    <Switch v-model:value="switchValue" />
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog, openDialog} from "shiki-ui";
import "shiki-ui/dist/lib/shiki.css";
export default {
  name: 'App',
  components: {Button, Tabs, Switch, Dialog},
  data(){
    return{
        switchValue: false,
    }
  },
}
</script>
```

代码示例3 Tabs :
```
<template>
  <div>
    <Tabs v-model:selected="tabSelected">
        <Tab title="tab1">内容1</Tab>
        <Tab title="tab2">内容2</Tab>
    </Tabs>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog, openDialog} from "shiki-ui";
import "shiki-ui/dist/lib/shiki.css";
export default {
  name: 'App',
  components: {Button, Tabs, Switch, Dialog},
  data(){
    return{
        tabSelected: 'tab1',
    }
  },
}
</script>
```

代码示例4 Dialog :
```
<template>
  <div>
    <Button @click="open">按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog, openDialog} from "shiki-ui";
import "shiki-ui/dist/lib/shiki.css";
export default {
  name: 'App',
  components: {Button, Tabs, Switch, Dialog},
  methods:{
    open(){
        openDialog({title:'标题', content:'内容'})
    }
  }
}
</script>
```
