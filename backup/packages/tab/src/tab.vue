<template>
    <div class="tab-wrapper">
        <div class="tab__header">
            <div class="line" :style="styleLine"></div>

            <div class="title" :class="item.name === activeName ? 'active' : ''"
                v-for="item in tabsInfo"
                :key="item.name"
                @click="handleTabClick(item.name)" ref="tabs">
                {{ item.label }}
            </div>
        </div>

        <div class="tab__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseTab',

    props: {
        /**
         * 选中的 tab-item，对应 name 属性
         */
        value: String
    },

    data () {
        return {
            items: [],
            activeName: this.value,
            styleLine: {}
        }
    },

    computed: {
        tabsInfo () {
            return this.items.map(item => {
                return {
                    label: item.label,
                    name: item.tabName
                }
            })
        }
    },

    watch: {
        value (val) {
            this.activeName = val
        },
        activeName (val) {
            this.$emit('input', val)
            this.setCurrent(val)
        },
        items (val) {
            this.$nextTick(() => {
                if (!this.activeName) {
                    this.activeName = this.tabsInfo[0].name
                } else {
                    this.setCurrent(this.activeName)
                }
            })
        }
    },

    methods: {
        handleTabClick (tabName) {
            this.activeName = tabName
            this.$emit('tab-click', tabName)
        },
        /**
         * 设置选中
         */
        setCurrent (activeName) {
            const activeIndex = this.tabsInfo.findIndex(item => item.name === activeName)
            if (activeIndex === -1) {
                return
            }
            this.setStyleLine(activeIndex)
            this.setCurrentItem(activeIndex)
        },
        /**
         * 选中，设置横线样式
         */
        setStyleLine (activeIndex) {
            let prevTranslateX = 0
            let prevWidth = 0

            const tabsStyleLine = this.items.map((item, index) => {
                const $el = this.$refs.tabs[index]
                const width = (index === 0 || index === this.items.length - 1) ? $el.clientWidth - 15 : $el.clientWidth - 30
                const translateX = prevTranslateX + prevWidth + ((index === 0) ? 0 : 30)
                prevTranslateX = translateX
                prevWidth = width

                return {
                    width: `${width}px`,
                    transform: `translateX(${translateX}px)`
                }
            })

            this.styleLine = tabsStyleLine[activeIndex]
        },
        /**
         * 选中tab
         */
        setCurrentItem (activeIndex) {
            this.items.forEach((item, index) => {
                item.translateItem(index, activeIndex)
            })
        },
        /**
         * 更新子元素相关信息
         */
        updateItems () {
            const items = []
            this.$children.forEach((item, index) => {
                item.setTabName(index)
                if (item.$options.name === 'BaseTabItem') {
                    items.push(item)
                }
            })
            this.items = items
        }
    },

    mounted () {
    }
}
</script>
