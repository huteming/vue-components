> 轮播图，可自定义轮播时间间隔、动画时长等。

-------------

## 引入

```javascript
import { TmCarousel, TmCarouselItem } from 'tommy-ui'

Vue.component(TmCarousel.name, TmCarousel)
Vue.component(TmCarouselItem.name, TmCarouselItem)
```

## 例子

```html
<tm-carousel v-model="current" :loop="loop" :play="play" :group="1">
    <tm-carousel-item>
        <div class="swiper swiper-blue">1</div>
    </tm-carousel-item>
</tm-carousel>
```

## Carousel

### API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 当前显示 | Number | | `0` |
| loop | 是否循环 | Boolean | | `false` |
| play | 是否播放, 支持 sync 修饰符 | Boolean | | `false` |
| interval | 自动播放的时间间隔（毫秒） | Number | | `3000` |
| vertical | 垂直方向 | Boolean | | `false` |
| circular | 是否循环播放 | Boolean | | `false` |
| skip | 间断播放时间, 统一方向进入，Number 为产生空白时间 | Boolean, Number | | `false` |
| defaultIndex | 初始显示的轮播图的索引 | Number | | `0` |
| disable-move | 禁止手势 | Boolean | | `false` |
| disable-direction | 禁用滑动方向判断，滑动切换滑块时，事件不会冒泡 | Boolean | | `false` |

### Slot

| name | 描述 |
|------|--------|
| - | 一个或多个 `swipe-item` 组件 |

## CarouselItem

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| name | 唯一标识符 | String | | |

### Slot

| name | 描述 |
|------|--------|
| - | 单个轮播图的内容 |
