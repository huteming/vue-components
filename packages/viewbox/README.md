> 页面容器

-------------

## 引入

```javascript
import { Viewbox } from 'tommy-ui'

Vue.component(Viewbox.name, Viewbox)
```

## 例子

```html
<base-viewbox>
    <div slot="header">固定顶部</div>

    <div slot="footer">固定底部</div>

    <div slot="fixed">绝对定位内容</div>

    <div>页面内容</div>
</base-viewbox>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| fit | 适配页面方式 | String | `fill`, `contain` | `fill` |
| justify | 内容水平位置 | | String | `start`, `center`, `end` | '取消' |
| align | 垂直方向位置 | String | `start`, `center`, `end` | true |

## slot

| name | 描述 |
|------| ---- |
| - | 页面内容 |
| header | 固定顶部内容 |
| footer | 固定底部内容 |
| fixed | 绝对定位内容 |
