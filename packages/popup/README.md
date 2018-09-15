> 弹出框，可自定义内容。

-------------

## 引入

```javascript
import { Popup } from 'tommy-ui'

Vue.component(Popup.name, Popup)
```

## 例子

`position` 属性指定了 `popup` 的位置。比如，`position` 为 'bottom' 时，`popup` 会从屏幕下方移入，并最终固定在屏幕下方。移入/移出的动效会根据 `position` 的不同而自动改变，无需手动配置。

将 `v-model` 绑定到一个本地变量，通过操作这个变量即可控制 `popup` 的显示与隐藏。

```html
<base-popup v-model="visible" position="bottom">
    ...
</base-popup>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 控制 Popup 的显示与隐藏 | Boolean |  | false |
| before-close | 关闭前的回调，会暂停 Popup 的关闭, done 用于关闭 popup | Function | (done) |  |
| position | Popup 的位置 | String | `middle`<br>`top`<br>`bottom`<br>`left`<br>`right` | `middle` |
| close-on-click-modal | 是否可以通过点击 modal 层来关闭 Popup | Boolean | | true |

## Event

| name | 描述 | 回调参数 |
|------|--------|-------|
| open | Popup 打开的回调 | - |
| close | Popup 关闭的回调 | - |
| closed | Popup 关闭动画结束时的回调 | - |

## Slot

| name | 描述 |
|------|--------|
| - | 弹出框的内容 |
