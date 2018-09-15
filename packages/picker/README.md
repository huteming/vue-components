> 选择器，支持多 slot 联动。

-------------

## 引入

```javascript
import { Picker, PickerItem } from 'tommy-ui'

Vue.component(Picker.name, Picker)
Vue.component(PickerItem.name, PickerItem)
```

## 例子

```html
<base-picker>
    <base-picker-item :options="options"></base-picker-item>
</base-picker>
```

## Picker

### Slot

| name | 描述 |
|------|--------|
| - | 内容 |

## PickerItem

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|--------|------|-------|--------|
| options | 选择项, `label`, `value` 组成的对象数组 | Array |  |  |
| value | 选中返回值 | Any | | |
