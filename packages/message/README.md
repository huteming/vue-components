> 弹出式提示框，有多种交互形式。

-------------

## 引入

```javascript
import { Message } from 'tommy-ui'

Vue.use(Message)
```

## 例子

以标题与内容字符串为参数进行调用

```javascript
this.$message(options)
this.$message(message, options)
this.$message(message, title, options)

this.$message.alert(options)
this.$message.confirm(options)
this.$message.prompt(options)

Message(options)
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| title | 提示框的标题 | String | | |
| message | 提示框的内容 | String | | |
| confirmButtonText | 确认按钮的文本 | String | | `确定` |
| confirmButtonHighlight | 是否将确认按钮的文本加粗显示 | Boolean | | `false` |
| showCancelButton | 是否显示取消按钮 | Boolean | | `false` |
| cancelButtonText | 取消按钮的文本 | String | | `取消` |
| cancelButtonHighlight | 是否将取消按钮的文本加粗显示 | Boolean | | `false` |
| showInput | 是否显示一个输入框 | Boolean | | `false` |
| inputType | 输入框的类型 | String | | `text` |
| inputValue | 输入框的值 | String | | |
| inputPlaceholder | 输入框的占位符 | String | | `请输入` |
| beforeClose | 关闭前的回调，会暂停 message 的关闭。done 用于关闭 message | Function(done) | | |
| closeOnClickModal | 是否在点击遮罩时关闭提示框(alert 为 false) | Boolean | | `true` |
