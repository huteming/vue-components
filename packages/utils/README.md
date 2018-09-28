> 辅助方法

-------------

## 例子

```javascript
import { Utils } from 'tommy-ui'
const { image } = Utils

image.load([image1, image2])
    .then(([image1, image2]) => {})
    .catch(err => {})

image.preview([files])
    .then(([dataURL]) => {})
    .catch(err => {})
```

## image

| name | 描述 | 参数 |
|------|--------|-------|
| load | 加载图片，支持多张图片 | images<String, Array> |
| preview | 预览图片，支持多张图片 | files<Object, Array> |
