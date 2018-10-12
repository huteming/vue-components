> 图片格式转换器

-------------

## 例子

ImageConvertor 为构造函数。主要是方便了图片各个格式间的相互转换。返回 Promise

```javascript
import { Constructors } from 'tommy-ui'

const instance = new Constructors.ImageConvertor(values)

instance.getImage()
    .then(elementImage => {})

instance.getCanvas()
    .then(elementCanvas => {})

instance.getFile()
    .then(file => {})

instance.getDataURI()
    .then(dataURI => {})
```

## 构造函数参数

| name | 描述 | 类型 | 默认值 |
|------|--------|-------|-----------|
| values | 需要转化的图片数据 | url, image, canvas, file, dataURI, Array{value, options} | |
| optionsConstructor | 配置 | Object | |

## 实例方法

配置参数应用规则 optionsFn > array.options > optionsConstructor

| name | 描述 | 参数 |
|------|--------|-------|
| getImage | 获取 HTMLImageElement | optionsFn |
| getCanvas | 获取 HTMLCanvasElement | optionsFn |
| getFile | 获取 Blob(File) | optionsFn |
| getDataURI | 获取 dataURI | optionsFn |

### options

| 参数 | 描述 | 类型 | 默认值 |
|------|--------|-------|--------|
| compress | 是否压缩 | Boolean | `false` |
| maxWidth | 最大宽度限制 | Number | `1100` |
| maxHeight | 最大高度限制 | Number | `1100` |
| mimeType | 图像格式。优先保留图片原有类型 | String | `image/png` |
| quality | 图象质量, 0 ~ 1。图像格式是 image/jpeg 或 image/webp 有效 | Number | `1.0` |
