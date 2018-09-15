> 开关。

----------

## 引入

```javascript
import { Switch } from 'tommy-ui'

Vue.component(Switch.name, Switch)
```

## 例子

```html
<base-switch v-model="value"></base-switch>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 绑定值 | Boolean | | false |
| disabled | 禁用 | Boolean | | false |

## Event
| name | 返回值 |
| ---- | ----- |
| change | checked: Boolean |

## Slot

| name | 描述 |
|------|--------|
| - | 显示内容 |