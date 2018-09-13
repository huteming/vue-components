# Flex

> Flex 是 CSS flex 布局的一个封装。

-------------

## 例子

```javascript
import { Flex, FlexItem } from 'tommy-ui'

Vue.component(Flex.name, Flex)
Vue.component(FlexItem.name, FlexItem)
```

```html
<base-flex>
    <base-flex-item>内容</base-flex-item>
</base-flex>
```

## API

### Flex

属性 | 说明 | 类型 | 默认值
-----|-----|------|------
| direction    | 项目定位方向，值可以为 `row`,`row-reverse`,`column`,`column-reverse`    | String | `row` |
| wrap         | 子元素的换行方式，可选 `nowrap`, `wrap`, `wrap-reverse` | String  | `nowrap` |
| justify      | 子元素在主轴上的对齐方式，可选 `start`, `end`, `center`, `between`, `around` | String | `start` |
| align        | 子元素在交叉轴上的对齐方式，可选 `start`, `center`, `end`, `baseline`, `stretch` | String   | `center` |
| alignContent | 有多根轴线时的对齐方式，可选 `start`, `center`, `end`, `between`, `around`, `stretch`    | String  | `stretch` |
| gutter | 子元素水平方向的间距 | String | `0px` |

### Flex.Item

|属性 | 说明 | 类型 | 默认值 |
|----|----|----|----|
| order | 项目的排列顺序 | Number | `0` |
| grow | 项目的放大比例 | Number | `1` |
| shrink | 项目的缩小比例 | Number | `1` |
| basis | 分配多余空间之前，项目占据的主轴空间 | String | `auto` |
| align | 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性, 可选 `auto`, `start`, `center`, `end`, `baseline`, `stretch` | String | `auto` |
