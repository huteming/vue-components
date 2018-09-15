> 进度条。

-------------

## 引入

```javascript
import { Progress } from 'tommy-ui'

Vue.component(Progress.name, Progress)
```

## 例子

```html
<base-progress :value="20" :bar-height="3"></base-progress>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 进度条的值（%） | Number | | `0` |
| barHeight | 进度条的线宽（像素） | Number | | `3` |

## Slot
| name | 描述 |
|------|--------|
| start | 进度条左侧 DOM |
| end | 进度条右侧 DOM |
