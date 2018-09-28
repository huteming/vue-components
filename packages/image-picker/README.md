> 图片选择器

-------------

## 引入

```javascript
import { ImagePicker } from 'tommy-ui'

Vue.use(ImagePicker)
// Vue.directive(ImagePicker.name, ImagePicker)
```

## 例子

### 单选

```html
<div v-image-picker="handleLoad">点击选择</div>
<img :src="image" alt="" style="max-width: 100%;" />
```

```javascript
export default {
    data () {
        return {
            images: '',
        }
    },

    methods: {
        handleLoad ({ dataURL, image }) {
            this.image = dataURL
            // this.$el.appendChild(image)
        },
    }
}
```

### 多选

```html
<div v-image-picker="{ onload: handleLoadMultiple, multiple: true, max: max }">多选，最多4张</div>
<img v-for="(item, index) in images" :key="index" :src="item" alt="" style="max-width: 100%;" />
```

```javascript
export default {
    data () {
        return {
            images: [],
        }
    },

    computed: {
        max () {
            return 4 - this.images.length
        },
    },

    methods: {
        handleLoadMultiple (images) {
            images = images.map(item => item.dataURL)
            this.images.push(...images)
        },
    },
}
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|--------|------|------|---------|
| multiple | 是否多选 | Boolean | | `false` |
| max | 多选时，最多选择数量。当达到最大数量时，点击动作会"无响应"，可能需要自己配合隐藏按钮。支持动态更新 | Number | | `Infinity` |
| disabled | 禁用。支持动态更新 | Boolean | | `false` |
| onload | 加载完成的回调函数。参数只有一个函数时的默认值 | Function(data) | | |
| onerror | 加载失败的回调函数 | Function(event) | | |
