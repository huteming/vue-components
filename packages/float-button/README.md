> 浮动动作按钮

-------------

## 例子

```javascript
import { FloatButton } from 'tommy-ui'

Vue.use(FloatButton)
// Vue.component(FloatButton.name, FloatButton)
```

```html
<base-float-button icon="favorite_border"></base-float-button>
```

## API

属性 | 说明 | 类型 | 可选值 | 默认值
-----|-----|------|------|-----------|
| icon | 图标 | String | | |
| text | 文本 | String  | | |
| text-position | 文本位置 | `left`, `right` | `left` |
| mini | 小号按钮 | Boolean | | `false` |
