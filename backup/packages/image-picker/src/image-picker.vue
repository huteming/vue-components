<template>
    <section class="t-image-picker">
        <input
            class="t-image-picker-file"
            type="file"
            accept="image/*"
            ref="file"
            :multiple="multiple"
            @change="handleFileChange" />

        <div class="t-image-picker-content">
            <slot :images="images"></slot>

            <div class="t-image-picker-selector"
                @click.capture="handleSelect"
                v-show="!selectorDisabled"
                v-if="$slots.selector">
                <slot name="selector"></slot>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BaseImagePicker',

    props: {
        /**
         * 图片数组
         */
        value: {
            type: Array,
            default () {
                return []
            }
        },
        /**
         * 不仅仅应用于 input 输入框的 multiple
         * 同时应用于 files 数组的改变方式
         */
        multiple: {
            type: Boolean,
            default: false
        },
        /**
         * 图片张数上限
         */
        max: {
            type: Number
        }
    },

    data () {
        return {
            files: this.value
        }
    },

    computed: {
        images () {
            return this.files.map(file => URL.createObjectURL(file))
        },
        selectorDisabled () {
            return this.max && this.files.length >= this.max
        }
    },

    watch: {
        value (val) {
            this.files = val
        },
        files (val) {
            this.$emit('input', val)
            this.$emit('change', val)
        }
    },

    methods: {
        handleSelect () {
            this.$refs.file.click()
        },
        handleFileChange (event) {
            let files = Array.from(event.target.files)

            if (files.length) {
                if (this.multiple) {
                    if (this.max) {
                        files = files.slice(0, this.max)
                    }
                    this.files.push(...files)
                } else {
                    this.files = files
                }
            }

            event.target.value = '' // 为了选中相同图片时，触发 change 事件
        },
        /**
         * 供外部调用
         */
        select () {
            this.$refs.file.click()
        }
    },

    mounted () {
    }
}
</script>
