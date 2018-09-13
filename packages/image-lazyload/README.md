# Lazy load

> 图片懒加载指令。

-------------

## 引入

```javascript
import { ImageLazyload } from 'tommy-ui'

Vue.directive(ImageLazyload.name, ImageLazyload)
Vue.use(ImageLazyload)
```

## 例子

```html
<ul>
    <li v-for="item in list">
        <img v-image-lazyload :data-src="item" />
    </li>
</ul>
```

```html
<ul v-image-lazyload="{ selector: '.image' }">
    <li v-for="item in list">
        <img class="image" />
    </li>
</ul>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|--------|------|------|---------|
| selector | 为空时，观察指令所在dom本身 | String | | |
| distance | 加载图片时与视口的距离（像素） | Number | | `30` |
| onload | 加载完成的回调函数 | Function(target) | | |
| onerror | 加载失败的回调函数 | Function(target) | | |
