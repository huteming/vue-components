> 对话框

-------------

## 引入

```javascript
import { Dialog } from 'tommy-ui'

Vue.use(Dialog)
// Vue.component(Dialog.name, Dialog)
```

## 例子

```html
<base-dialog v-model="visibleDialog">
    ...
</base-dialog>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 显示状态 | Boolean | | `false` |
| close-position | 关闭 X 显示位置 | String | `out-right`, `out-left`, `in-right`, `in-left`, `bottom` | |
| close-on-click-modal | 点击折腾是否关闭 | Boolean | | `true` |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done) | | |

## Slot

| 参数 | 说明 |
|------|-------|
| | Dialog 的内容 |
| footer | Dialog 按钮操作区的内容 |

## Events

| name | 说明 |
|------|-------|
| open | Dialog 打开的回调 |
| close | Dialog 关闭的回调 |
| closed | Dialog 关闭动画结束时的回调 |
