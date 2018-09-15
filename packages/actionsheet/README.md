> 操作表，从屏幕下方移入。

-------------

## 引入

```javascript
import { Actionsheet } from 'tommy-ui'

Vue.use(Actionsheet)
```

## 例子

```javascript
this.$actionsheet(options)
this.$actionsheet(menus)

Actionsheet(options)
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| title | 标题 | String | | |
| menus | 菜单项数组 | {Array} Object<br>~{String} label<br>~{} value | | |
| cancelText | 取消按钮的文本。若设为空字符串，则不显示取消按钮 | String | | `取消` |
| closeOnClickModal | 是否可以通过点击 modal 层来关闭 `actionsheet` | Boolean | | `true` |
