# Checkbox

> 复选框列表

-------------

## 引入

```javascript
import { Checkbox, CheckboxItem } from 'tommy-ui'

Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxItem.name, CheckboxItem)
```

## 例子

```html
<base-checkbox v-model="value">
    <base-checkbox-item :checked="value"></base-checkbox-item>
</base-checkbox>

<mt-checklist
  title="复选框列表"
  v-model="value"
  :options="['选项A', '选项B', '选项C']">
</mt-checklist>
```

## Checkbox

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
|title | 标题，显示在列表上方 | string | | |
|value | 绑定值 | Array | | |
|max| 最多可选个数，超过后其他未选择的选项变成禁用状态 | Number | | `0` |

## CheckboxItem

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
|checked | 选中返回值 | Any | | |
| disabled | 禁用状态 | Boolean | | `false` |

### Slot

| name | 说明 |
|-------|----------|
| - | 列表左侧显示内容 |
