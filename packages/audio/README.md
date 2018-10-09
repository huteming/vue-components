> 音频。提供便捷操作

------------

## 引入

```javascript
import { Audio } from 'tommy-ui'

Vue.use(Audio)
// Vue.component(Audio.name, Audio)
```

## 例子

```html
<base-audio :url="url" :title="title" :time="time"></base-audio>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| url | 音频地址 | String |  | |
| title | 音频标题 | String |  | |
| time | 音频总时长。ios在播放前，无法获取总时长 | Number |  | |

