# Button

> 按钮，提供几种基础样式和尺寸，可自定义图标。

------------

## 引入

```javascript
import { Button } from 'tommy-ui'

Vue.component(Button.name, Button)
```

## 例子

```html
<base-button type="default">default</base-button>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| type | 按钮显示样式 | String | `default`<br>`primary`<br>`danger` | `default` |
| size | 尺寸 | String | `small`<br>`normal` | `normal` |
| plain | 幽灵按钮 | Boolean | | `false` |
| disabled | 禁用状态 | Boolean | | `false` |
| loading | 加载中 | Boolean | | `false` |
| inline | 显示为行内元素 | Boolean | | `false` |
| icon | 图标 | String |  | |

## Slot

| name | 描述 |
|------|--------|
| - | 显示的文本内容|
| icon | 自定义显示的图标|

