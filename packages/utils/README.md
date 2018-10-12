> 辅助方法

-------------

## 例子

storage 支持参数为 对象 / 数组 格式

```javascript
import { Utils } from 'tommy-ui'
const { storage, tool } = Utils

storage.getLocal(key)
storage.setLocal(key, value)
storage.removeLocal(key)

storage.getSession(key)
storage.setSession(key, value)
storage.removeSession(key)

tool.type()
```
