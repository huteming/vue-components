# Loadmore

> 下拉刷新

-------------

## 引入

```javascript
import { Loadmore } from 'mint-ui'

Vue.directive(Loadmore.name, Loadmore)
Vue.use(Loadmore)
```

## 例子

```html
<div v-loadmore="">常规dom</div>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| distance | 触发距离（像素） | Number | | `50` |
| distanceMax | 最大滑动距离（像素） | Number | | `70` |
| ratio | move的转换比率，削弱滑动效果，否则可能太灵敏 | Number | | `1.5` |
| callback | 回调函数 | Function(done) | | |
