> 分隔线

-------------

## 引入

```javascript
import { Divider } from 'tommy-ui'

Vue.use(Divider)
// Vue.component(Divider.name, Divider)
```

## 例子

```html
<base-divider loading></base-divider>
<base-divider>text</base-divider>
<base-divider></base-divider>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| loading | 加载状态 | Boolean | | `false` |
| text | 展示文案 | String | | |

## Slot

| 参数 | 说明 |
|------|-------|
| | 展示文案 |
