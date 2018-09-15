> 顶部导航栏，支持显示按钮、自定义文字和固定在顶部。

-------------

## 引入

```javascript
import { Navbar } from 'mint-ui'

Vue.component(Navbar.name, Navbar)
```

## 例子

```html
<base-navbar title="标题">
    <div slot="left">左边内容</div>

    <div slot="right">右边内容</div>
</base-navbar>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| mode | 模式 | String | `dark`, `light` | `dark` |
| title | 标题 | String | |  |

## Slot

| name | 描述 |
|------|--------|
| left | 左边显示元素 |
| right | 右边显示元素 |
