# Range

> 滑块，支持自定义步长、区间等。

-------------

## 引入

```javascript
import { Range } from 'tommy-ui'

Vue.component(Range.name, Range)
```

## 例子

```html
<base-range v-model="value"></base-range>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 滑块的值 | Number | | `0` |
| min | 最小值 | Number | | `0` |
| max | 最大值 | Number | | `100` |
| step | 步长 | Number | | `1` |
| disabled | 是否禁用 | Boolean | | `false` |
| bar-height | 滑槽的线宽（像素） | Number | | `1` |
| show-value | 是否在线两侧显示最大最小值 | Boolean | | `false` |

## Slot
| name | 描述 |
|------|--------|
| start | 滑块左侧 DOM |
| end | 滑块右侧 DOM |
