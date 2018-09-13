# Radio

> 单选框列表

-------------

## 引入

```javascript
import { Radio, RadioItem } from 'tommy-ui'

Vue.component(Radio.name, Radio)
Vue.component(RadioItem.name, RadioItem)
```

## 例子

```html
<base-radio>
    <base-radio-item></base-radio-item>
</base-raido>
```

## Radio

### API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|---------|---------|--------|-----|
| title | 列表上方显示标题 | String | | |
| value | 当前值 | | | |

## RadioItem

### API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| checked | 选中返回值 | | | |
| disabled | 禁用选项 | Boolean | | `false` |
