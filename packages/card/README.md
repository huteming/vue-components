> 用于组织信息和操作，通常也作为详细信息的入口。

------------

## 引入

```javascript
import { Card } from 'tommy-ui'

Vue.use(Card)
// Vue.component(Card.name, Card)
```

## 例子

```html
<base-card>
    <base-flex justify="between" slot="header">
        <base-flex-item>卡片名称</base-flex-item>
        <base-flex-item :grow="0">操作按钮</base-flex-item>
    </base-flex>

    <div>
        <img src="path/image" alt="" width="100%" style="display: block;" />
    </div>

    <div v-for="o in 4" :key="o" class="text item" slot="footer">
        {{ '列表内容 ' + o }}
    </div>
</base-card>
```

## Slot

| name | 描述 |
|------|--------|
| - | 中心内容 |
| header | 顶部内容 |
| footer | 尾部内容 |

