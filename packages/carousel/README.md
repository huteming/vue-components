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
| disabled-touch | 禁止手势 | Boolean | | `false` |

### Slot

| name | 描述 |
|------|--------|
| - | 一个或多个 `carousel-item` 组件 |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------|----------|-------------|
| change | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |

## CarouselItem

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| name | 唯一标识符 | String | | |

### Slot

| name | 描述 |
|------|--------|
| - | 单个轮播图的内容 |
