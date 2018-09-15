> 日期时间选择器，支持自定义类型。

-------------

## 引入

```javascript
import { PickerDatetime } from 'tommy-ui'

Vue.component(PickerDatetime.name, PickerDatetime)
```

## 例子

`v-model` 属性为组件的绑定值。

`type` 属性表示 `datetime-picker` 组件的类型，它有三个可能的值：
*  `datetime`: 日期时间选择器，可选择年、月、日、时、分，`value` 值为一个 `Date` 对象
*  `date`: 日期选择器，可选择年、月、日，`value` 值为一个 `Date` 对象
*  `time`: 时间选择器，可选择时、分，`value` 值为一个格式为 `HH:mm` 的字符串

`datetime-picker` 提供了两个供外部调用的方法：`open` 和 `close`，分别用于打开和关闭选择器。

```html
<base-picker-datetime>
</base-picker-datetime>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| visible | 显示 datetime, 支持 sync 修饰符 | Boolean | | `false` |
| value | 绑定值 | Date | | `new Date()` |
| mode | 模式 | String | `datetime`<br>`date`<br>`time` | `datetime` |
| confirm-text | 确认按钮文案 | String | | `确定` |
| cancel-text | 取消按钮文案 | String | | `取消` |
| min-date | 限制最小时间 | Date | | `new Date(year - 10, 1, 1, 0, 0, 0)` |
| max-date | 限制最大时间 | Date | | `new Date(year + 10, 1, 1, 0, 0, 0)` |

## Events
| name | 说明 | 回调参数 |
|------|-------|---------|
| change | 点击确认按钮时的回调函数 | 目前的选择值 |
