> 无限滚动指令。

-------------

## 引入

```javascript
import { InfiniteScroll } from 'tommy-ui'

Vue.directive(InfiniteScroll.name, InfiniteScroll)
Vue.use(InfiniteScroll)
```

## 例子

为 HTML 元素添加 `v-infinite-scroll` 指令即可使用无限滚动。滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值（通过 `infinite-scroll-distance` 设置）时，绑定到 `v-infinite-scroll` 指令的方法就会被触发。

```html
<ul v-infinite-scroll="loadMore" data-infinite-scroll-disabled="loading">
    <li v-for="item in list">{{ item }}</li>
</ul>
```

```javascript
loadMore (done) {
    setTimeout(() => {
        let last = this.list[this.list.length - 1]

        for (let i = 1; i <= 10; i++) {
            this.list.push(last + i)
        }

        done()
    }, 2500)
}
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| callback | 触发的回调函数 | Function(done) | | |
| distance | 触发加载方法的滚动距离阈值（像素）） | Number | | `50` |
| immediate | 若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。 | Boolean | | `true` |
| infinite-scroll-disabled | 若为真，则无限滚动不会被触发 | Boolean | | `false` |
| infinite-scroll-listen-event | 一个 event，被执行时会立即检查是否需要执行加载方法。 | Function | | |
