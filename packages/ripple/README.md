> 水波纹动画

-------------

## 引入

```javascript
import { Ripple } from 'tommy-ui'

Vue.use(Ripple)
// Vue.directive(Ripple.name, Ripple)
```

## 例子

为 HTML 元素添加 `v-ripple` 指令即可使用动画

```html
<div v-ripple>...</div>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| duration | 动画持续时间(ms) | Number | | 750 |
| color | 水波纹颜色 | String | | `rgba(255, 255, 255, 0.3)` |
