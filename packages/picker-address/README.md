> 地址选择器

-------------

## 引入

```javascript
import { PickerAddress } from 'tommy-ui'

Vue.use(PickerAddress)
// Vue.component(PickerAddress.name, PickerAddress)
```

## 例子

```html
<base-picker-address
    :visible.sync="visible"
    v-model="address"
    :value-text.sync="addressText"
    @change="handleChange">
</base-picker-address>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| visible | 显示选择器, 支持 sync 修饰符 | Boolean | | `false` |
| value | 绑定值。值为版本数据对应code，非中文地址 | Array | | |
| value-text | 绑定值对应中文地址，该值不会应用与组件内部，仅仅是提供便捷方式获取文案。支持 sync 修饰符 | Array | | |

## Events
| name | 说明 | 回调参数 |
|------|-------|---------|
| change | 点击确认按钮时的回调函数 | value, valueText |
