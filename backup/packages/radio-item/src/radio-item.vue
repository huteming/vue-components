<template>
    <label class="t-radio" :style="styles" :class="disabled ? 'is-disabled' : ''">
        <input class="t-radio-input" type="radio"
            :disabled="disabled || display || $parent.display"
            :value="checked"
            v-model="model"
            @change="handleChange" />

        <div class="t-radio-label">
            <slot></slot>
        </div>

        <div class="t-radio-icon" :style="styleIcon">
            <template v-if="radioType === 'simple'">
                <span v-show="isSelected">✔︎︎</span>
            </template>

            <template v-if="radioType === 'circle'">
                <div class="t-radio-icon__circle" :style="styleCircle"></div>
                <div class="t-radio-icon__circle__solid" :style="styleCircleSolid" v-show="isSelected"></div>
            </template>
        </div>
    </label>
</template>

<script>
export default {
    name: 'BaseRadioItem',

    props: {
        value: {},
        checked: {},
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 仅展示，禁用单选功能
         */
        display: {
            type: Boolean,
            default: false
        },

        /**
         * 选择框样式
         * 可选值: simple, circle
         */
        radioType: {
            type: String,
            default: 'simple'
        },
        /**
         * 选择框位置
         * 可选值: left, right
         */
        radioPosition: {
            type: String,
            default: 'right'
        },
        /**
         * 主题色
         * 主要影响的是: 选择框颜色样式
         */
        themeColor: {
            type: String,
            default: '#26a2ff'
        }
    },

    data () {
        return {
        }
    },

    computed: {
        isGroup () {
            return this.$parent.$options.name === 'BaseRadio'
        },
        isSelected () {
            return this.model === this.checked
        },
        model: {
            get () {
                return this.isGroup ? this.$parent.value : this.value
            },
            set (val) {
                if (this.isGroup) {
                    this.$parent.$emit('input', val)
                } else {
                    this.$emit('input', val)
                }
            }
        },
        styles () {
            return {
                'justify-content': this.radioPosition === 'right' ? 'space-between' : 'flex-start'
            }
        },
        styleIcon () {
            return {
                color: this.disabled ? '' : this.themeColor,
                order: this.radioPosition === 'right' ? 2 : 0,
                'margin-right': this.radioPosition === 'right' ? '' : '12px'
            }
        },
        styleCircle () {
            return {
                'border-color': this.themeColor
            }
        },
        styleCircleSolid () {
            return {
                background: this.themeColor
            }
        }
    },

    methods: {
        handleChange () {
            this.$nextTick(() => {
                this.$emit('change', this.model)

                if (this.isGroup) {
                    this.$parent.$emit('change', this.model)
                }
            })
        }
    }
}
</script>
