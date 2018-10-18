> 辅助方法

-------------

## 例子

storage 支持参数为 对象 / 数组 格式

```javascript
import { Utils, Constructors } from 'tommy-ui'
const { storage, tool } = Utils
const { Validator } = Constructors

storage.getLocal(key)
storage.setLocal(key, value)
storage.removeLocal(key)

storage.getSession(key)
storage.setSession(key, value)
storage.removeSession(key)

tool.type()

const validator = new Validator()
validator.add('123', 'maxlength:1', '最大长度')
const message = validator.execute()
```
