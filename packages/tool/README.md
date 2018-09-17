> 辅助方法

-------------

## 例子

```javascript
import { utils } from 'tommy-ui'
const { loadImages } = utils

loadImages(image1, image2)
    .then(([image1, image2]) => {})
    .catch(err => {})
```

## API

| name | 描述 | 参数 |
|------|--------|-------|
| loadImages | 同时加载多张图片 | images |
