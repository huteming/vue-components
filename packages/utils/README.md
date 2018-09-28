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

image.compress(dataURL, options)
    .then(({ file, width, height }) => {})
    .catch(err => {})
```

## image

| name | 描述 | 参数 |
|------|--------|-------|
| load | 加载图片，支持多张图片 | String / Array(String) |
| preview | 预览图片，支持多张图片 | File / Array(File) |
| compress | 压缩图片，支持多张图片 | dataURL / File / Array<>, optionsCompress |

### optionsCompress

| 参数 | 描述 | 类型 | 默认值 |
|------|--------|-------|--------|
| maxWidth | 最大宽度限制 | Number | `1100` |
| maxHeight | 最大高度限制 | Number | `1100` |
| mimeType | 图像格式。优先保留图片原有类型 | String | `image/png` |
| quality | 图象质量, 0 ~ 1。图像格式是 image/jpeg 或 image/webp 有效 | Number | `1.0` |
| force | 强制使用 memeType 转换图像格式 | Boolean | `false` |
