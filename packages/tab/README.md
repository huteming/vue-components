> 用于让用户在不同的视图中进行切换

----------

## 引入

```javascript
import { Tab, TabPane, TabContainer } from 'tommy-ui'

Vue.use(Tab)
Vue.use(TabPane)
Vue.use(TabContainer)
```

## 例子

`Tab` 提供根组件。`TabPane` 提供标题容器。`TabContainer` 提供内容容器。 若在 `TabContainer` 上提供 `title` 或者 `icon` 属性时，将根据其 `name` 属性自动注册 `TabPane`。
如果已存在自定义的相同 `name` 的 `TabPane` 时，以自定义为准。

#### 提示：内容显示的先后排序以 `TabContainer` 的先后顺序为准

### 完整示例

```html
<base-tab v-model="active">
    <!-- container -->
    <base-tab-container name="home">
        home
    </base-tab-container>

    <base-tab-container name="more">
        more
    </base-tab-container>

    <base-tab-container name="me">
        me
    </base-tab-container>

    <!-- pane -->
    <base-tab-pane name="me">
        <base-icon icon="success"></base-icon>
        我
    </base-tab-pane>

    <base-tab-pane name="more">
        <base-icon icon="success"></base-icon>
        更多
    </base-tab-pane>

    <base-tab-pane name="home">
        <base-icon icon="success"></base-icon>
        主页
    </base-tab-pane>
</base-tab>
```

### 快捷方式

```html
<base-tab v-model="active">
    <base-tab-container icon="success" title="主页" name="home">
        home
    </base-tab-container>

    <base-tab-container icon="success" title="更多" name="more">
        more
    </base-tab-container>

    <base-tab-container icon="success" title="我" name="me">
        me
    </base-tab-container>

    <base-tab-container title="其他" name="other">
        other
    </base-tab-container>
</base-tab>
```

## Tab

### API

`TabPane` 和 `TabContainer` 的 `name` 属性共同组成一个选项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 绑定值。对应 tabPane 和 TabContainer 的 name 属性 | String | | |

### Event

| 事件 | 说明 | 参数 |
|------|-------|---------|
| change | 切换的回调函数 | name |

## TabContainer

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| *name | 唯一标识符 | String | | |
| icon | 标题图标 | String | | |
| title | 标题文案 | String | | |

## TabPane

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| *name | 唯一标识符 | String | | |