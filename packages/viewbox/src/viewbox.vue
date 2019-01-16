<template>
<section class="t-viewbox" :style="styleWrapper" :class="classes">
    <div class="t-viewbox-container" :style="styleBox">
        <div class="t-viewbox-header" ref="header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>

        <div class="t-viewbox-content" ref="content" @scroll="$emit('scroll', $event)">
            <slot></slot>
        </div>

        <div class="t-viewbox-footer" ref="footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>

        <!-- 这个节点存在的原因是: -webkit-overflow-scrolling 中，绝对定位可能出现异常 -->
        <slot name="fixed"></slot>
    </div>
</section>
</template>

<script>
export default {
    name: 'BaseViewbox',

    props: {
        /**
         * 适配页面方式
         */
        fit: {
            type: String,
            default: 'fill',
            validator (val) {
                return ['fill', 'contain'].indexOf(val) > -1
            }
        },
        /**
         * 内容水平位置
         */
        justify: {
            type: String,
            default: 'center',
            validator (val) {
                return ['start', 'center', 'end'].indexOf(val) > -1
            }
        },
        /**
         * 垂直方向位置
         */
        align: {
            type: String,
            default: 'center',
            validator (val) {
                return ['start', 'center', 'end'].indexOf(val) > -1
            }
        },
        loadmore: {}
    },

    data () {
        return {
            htmlFontSize: '',

            design: {
                width: 750,
                height: 1206
            },

            isResized: false
        }
    },

    computed: {
        styleWrapper () {
            const { clientWidth, clientHeight } = document.documentElement

            return {
                width: `${clientWidth}px`,
                height: `${clientHeight}px`
            }
        },
        classes () {
            return [`flex-justify-${this.justify}`, `flex-align-${this.align}`]
        },
        styleBox () {
            const { clientWidth, clientHeight } = document.documentElement
            const { width, height } = this.design

            switch (this.fit) {
            case 'contain':
                return {
                    width: `${width / 100}rem`,
                    height: `${height / 100}rem`
                }
            default:
                return {
                    width: `${clientWidth}px`,
                    height: `${clientHeight}px`
                }
            }
        }
    },

    methods: {
        /**
         * 对外接口，滚动到指定位置
         */
        scrollTo (top) {
            this.$refs.content.scrollTop = top
        },
        /**
         * 对外接口，获取滚动距离
         * 注意: 在滚动过程中，这个滚动距离可能并不准确，特别是在快速滑动过程中
         */
        getScrollTop () {
            return this.$refs.content.scrollTop
        },
        /**
         * 对外接口，获取滚动区域dom
         */
        getScrollBody () {
            return this.$refs.content
        },
        /**
         * 下拉加载
         */
        handleLoadmore (done) {
            if (typeof this.onloadmore === 'function') {
                this.onloadmore(done)
            }
        },
        /**
         * 保存html字体大小
         */
        saveFontSize () {
            this.htmlFontSize = document.documentElement.style.fontSize
        },
        /**
         * 动态设置html字体大小
         */
        resizeFontSize () {
            const { clientWidth, clientHeight } = document.documentElement
            const { width, height } = this.design

            const realWidth = (clientWidth / clientHeight > width / height) ? (width / height * clientHeight) : clientWidth

            document.documentElement.style.fontSize = `${realWidth / width * 100}px`
        },
        /**
         * 还原html字体大小
         */
        restoreFontSize () {
            document.documentElement.style.fontSize = this.htmlFontSize
        },
        enter () {
            if (!this.isResized) {
                this.saveFontSize()
                this.resizeFontSize()

                this.isResized = true
            }
        },
        leave () {
            if (this.isResized) {
                this.restoreFontSize()

                this.isResized = false
            }
        }
    },

    mounted () {
        this.enter()
    },

    activated () {
        this.enter()
    },

    deactivated () {
        this.leave()
    },

    beforeDestroy () {
        this.leave()
    }
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
