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
import { image } from 'packages/tool'

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

            if (files.length) {
                let promise = null

                if (this.multiple) {
                    if (this.max) {
                        files = files.slice(0, this.max)
                    }
                    promise = image.preview(files)
                } else {
                    promise = image.preview(files[0])
                }

                promise
                    .then(this.onload)
                    .catch(this.onerror)
            }

            event.target.value = '' // fix 选中相同图片时，不触发 change 事件
        },
        select () {
            if (this.normalizedDisabled) return

            this.$el.click()
        },
    },
}
</script>
