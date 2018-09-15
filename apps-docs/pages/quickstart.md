> 本节将介绍如何在项目中使用 tommy-ui。

-----------

## 引入所有组件

你可以引入整个 tommy-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 tommy-ui。

### 完整引入

在 main.js 中写入以下内容：

```javascript
import TommyUI from 'tommy-ui'
import 'tommy-ui/dist/tommy-ui.css'

Vue.use(TommyUI)
```

以上代码便完成了 tommy-ui 的引入。

### 按需引入

如果你只希望引入部分组件，比如 Button 和 Cell，可以写入以下内容：

```javascript
import { Button, Cell } from 'tommy-ui'

Vue.use(Button)
// Vue.component(Button.name, Button)

Vue.use(Cell)
// Vue.component(Cell.name, Cell)
```

各个组件的使用方法请参阅它们各自的文档。
