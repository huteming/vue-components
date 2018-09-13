# 快速上手

本节将介绍如何在项目中使用 tommy-ui。

-----------

## 引入所有组件

你可以引入整个 tommy-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的tommy-ui。

### 完整引入

在 main.js 中写入以下内容：
```javascript
import Vue from 'vue'
import TommyUI from 'tommy-ui'
import App from './App.vue'

Vue.use(TommyUI)

new Vue({
  el: '#app',
  components: { App }
})
```
以上代码便完成了 tommy-ui 的引入。

### 按需引入

如果你只希望引入部分组件，比如 Button 和 Cell，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue'
import { Button, Cell } from 'mint-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
/**
 * 或写为
 * Vue.use(Button)
 * Vue.use(Cell)
 */

new Vue({
    el: '#app',
    components: { App }
})
```

各个组件的使用方法请参阅它们各自的文档。
