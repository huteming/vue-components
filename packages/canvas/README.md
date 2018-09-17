> 封装 canvas 方法，便于画图导出图片

-------------

## 例子

Canvas 为原型对象。主要是解决了 canvas 在不同分辨率中显示可能模糊的问题。

```javascript
import { utils } from 'tommy-ui'
const { Canvas } = utils

const instance = new Canvas(480, 854)

instance.use(({ context, canvas, ratio, width, height }) => {
    instance.drawText('我在静好书院读书', 24, 93)
})
```

## API

| name | 描述 | 参数 |
|------|--------|-------|
| use | 执行callback前后分别执行 save, restore 方法 | Callback |
| callback | canvas画图方法 | Object{<br>context<br>canvas<br>ratio<br>width<br>height<br>} |
| done | 导出图片 | |

## 辅助方法

| name | 描述 | 参数 |
|------|--------|-------|
| drawArc | 圆形 | x, y, r, optionsArc |
| drawRect | 矩形 | x, y, width, height, optionsRect |
| drawText | 文本 | text, x, y, optionsText |
| drawLine | 直线 | startX, startY, endX, endY, optionsLine |
| drawImage | image, x, y, width, height |

### optionsArc

| 参数 | 描述 | 默认值 |
|-------|----------|---------|
| startDegrees | 开始角度 | `0` |
| endDegrees | 结束角度 | `360` |
| direction | 方向。false: 顺时针, true: 逆时针 | `false` |
| lineWidth | 画笔宽度 | `1` |
| color | 画笔颜色 | `#000` |
| type | 画笔类型, fill, stroke | `fill` |

### optionsRect

| 参数 | 描述 | 默认值 |
|-------|----------|---------|
| r | 圆角半径 | `0` |
| lineWidth | 画笔宽度 | `1` |
| color | 画笔颜色 | `#000` |
| type | 画笔类型, fill, stroke | `fill` |

### optionsText

| 参数 | 描述 | 默认值 |
|-------|----------|---------|
| prefix | 前缀 | |
| suffix | 后缀 | |
| fix | 过长省略时添加字符串 | `.... ` |
| maxWidth | 最长宽度，会在末尾加上 fix 字符串，一般搭配前缀 后缀使用 | `0` |
| style | 字体的风格 normal, italic, oblique | `normal` |
| variant | 字体变体 normal, small-caps | `normal` |
| weight | 字体的粗细 bold bolder lighter 100 200 300 400 500 600 700 800 900 | `normal` |
| size | 字号 | `12` |
| lineHeight | 行高 | `1` |
| align | 对齐方式 start, end, center, left, right | `start` |
| baseline | 文本基线, alphabetic, top, hanging, middle, ideographic, bottom | `top` |
| baseline | 文本基线, alphabetic, top, hanging, middle, ideographic, bottom | `top` |
| lineWidth | 画笔宽度 | `1` |
| color | 画笔颜色 | `#000` |
| type | 画笔类型, fill, stroke | `fill` |

### optionsLine

| 参数 | 描述 | 默认值 |
|-------|----------|---------|
| lineWidth | 画笔宽度 | 1 |
| color | 画笔颜色 | #000 |
