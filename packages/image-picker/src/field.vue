<template>
<input
    class="t-image-picker"
    type="file"
    accept="image/*"
    ref="file"
    :multiple="multiple"
    @change="handleFileChange" />
</template>

<script>
import { constructors } from 'packages/utils'

export default {
    props: {
        multiple: Boolean,
        onload: Function,
        onerror: Function,
    },

    data () {
        return {
            max: Infinity,
            disabled: false,
        }
    },

    computed: {
        normalizedDisabled () {
            return (this.multiple && this.max <= 0) || this.disabled
        },
    },

    methods: {
        handleFileChange (event) {
            let files = Array.from(event.target.files)

            if (!files.length) return

            if (this.multiple) {
                if (this.max) {
                    files = files.slice(0, this.max)
                }
            } else {
                files = files[0]
            }

            const instance = new constructors.ImageConvertor(files, { compress: true })

            instance.getDataURI()
                .then(this.onload)
                .catch(this.onerror)

            event.target.value = '' // fix 选中相同图片时，不触发 change 事件
        },
        select () {
            if (this.normalizedDisabled) return

            this.$el.click()
        },
    },
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
