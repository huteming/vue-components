> 倒计时

-------------

## 引入

```javascript
import { TmClocker } from 'tommy-ui'

Vue.use(TmClocker)
// Vue.component(TmClocker.name, TmClocker)
```

## 例子

```html
<tm-clocker :start-time="start" :end-time="end" @end="handleEnd">
    <template slot-scope="scope">
        <div>{{ scope.whole }}</div>
        <div>{{ scope.days }}</div>
        <div>{{ scope.hours }}</div>
        <div>{{ scope.minutes }}</div>
        <div>{{ scope.seconds }}</div>
    </template>
</tm-clocker>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| startTime | 开始时间 | String, Number, Date | | `now` |
| endTime | 结束时间 | String, Number, Date | | `now` |
| format | 时间格式化模板 | String | | `D 天 H 时 M 分 S` |

## slot 对象参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| whole | 完整时间，根据 format 格式化得到 | String | | |
| days | 剩余天数 | Number | | |
| hours | 剩余小时 | Number | | |
| minutes | 剩余分钟 | Number | | |
| seconds | 剩余秒 | Number | | |

## Events

| name | 说明 | 参数 |
|------|-------|---------|
| end | 倒计时结束 | |
