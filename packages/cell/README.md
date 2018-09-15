> 单元格，可用作展示列表信息、链接或者表单等。

----------

## 引入

```javascript
import { Cell } from 'tommy-ui'

Vue.component(Cell.name, Cell)
```

## 例子

```html
<base-cell title="标题文字" value="说明文字"></base-cell>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
|   icon  |  图标   | String    | | |
| title | 标题 | String | | |
| subtitle | 副标题 | String | | |
| value | 内容 | | | |
| to    | 跳转参数, vue-router（优先） 或者 location.assign 方式跳转 | String | | |
| is-link | 链接，会显示箭头图标。搭配 to 属性使用 | Boolean | | `false` |

## Slot
| name | 描述 |
|------|--------|
| - | 自定义显示内容 |
| title | 自定义标题 |
| icon | 自定义图标 |
