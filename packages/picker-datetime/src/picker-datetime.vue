<template>
<base-popup v-model="normalizedVisible" position="bottom">
    <div class="t-datetime">
        <div class="t-datetime-toolbar">
            <div class="t-datetime-toolbar__action" @click="handleCancel">{{ cancelText }}</div>
            <div class="t-datetime-toolbar__action" @click="handleConfirm">{{ confirmText }}</div>
        </div>

        <base-picker>
            <template v-if="mode === 'datetime' || mode === 'date'">
                <base-picker-item :options="yearOptions" v-model="yearCurrent"></base-picker-item>
                <base-picker-item :options="monthOptions" v-model="monthCurrent"></base-picker-item>
                <base-picker-item :options="dateOptions" v-model="dateCurrent"></base-picker-item>
            </template>

            <template v-if="mode === 'datetime' || mode === 'time'">
                <base-picker-item :options="hourOptions" v-model="hourCurrent"></base-picker-item>
                <base-picker-item :options="minuteOptions" v-model="minuteCurrent"></base-picker-item>
            </template>
        </base-picker>
    </div>
</base-popup>
</template>

<script>
import BasePopup from '../../popup'
import BasePicker from '../../picker'
import BasePickerItem from '../../picker-item'

const NOW = new Date()
const CURRENT_YEAR = NOW.getFullYear()
const MIN_YEAR = CURRENT_YEAR - 10
const MAX_YEAR = CURRENT_YEAR + 10

export default {
    name: 'BasePickerDatetime',

    props: {
        visible: {
            type: Boolean,
            default: false
        },
        value: {
            type: Date,
            default () {
                return NOW
            }
        },
        /**
         * 组件的类型, 可选值 datetime, date, time
         */
        mode: {
            type: String,
            default: 'datetime',
            validator (val) {
                return ['datetime', 'date', 'time'].indexOf(val) > -1
            }
        },
        // 确定按钮文本
        confirmText: {
            type: String,
            default: '确定'
        },
        // 取消按钮文本
        cancelText: {
            type: String,
            default: '取消'
        },
        // 日期的最小可选值
        minDate: {
            type: Date,
            default () {
                return new Date(MIN_YEAR, 1, 1, 0, 0, 0)
            }
        },
        // 日期的最大可选值
        maxDate: {
            type: Date,
            default () {
                return new Date(MAX_YEAR, 1, 1, 23, 59, 59)
            }
        }
    },

    data () {
        return {
            yearCurrent: '',
            monthCurrent: '',
            dateCurrent: '',
            hourCurrent: '',
            minuteCurrent: '',

            normalizedVisible: this.visible
        }
    },

    computed: {
        /**
         * @argument yearCurrent
         * @argument monthCurrent
         * @argument dateCurrent
         * @argument hourCurrent
         * @argument minuteCurrent
         */
        current: {
            get () {
                const { yearCurrent, monthCurrent, dateCurrent, hourCurrent, minuteCurrent } = this

                return new Date(yearCurrent, monthCurrent, dateCurrent, hourCurrent, minuteCurrent)
            },
            set (val) {
                this.yearCurrent = val.getFullYear()
                this.monthCurrent = val.getMonth()
                this.dateCurrent = val.getDate()
                this.hourCurrent = val.getHours()
                this.minuteCurrent = val.getMinutes()
            }
        },
        /**
         * @argument normalizedMin
         * @argument normalizedMax
         */
        yearOptions () {
            const [minYear] = this.normalizedMin
            const [maxYear] = this.normalizedMax

            return Array.from({ length: maxYear - minYear + 1 }, (value, index) => ({ label: minYear + index, value: minYear + index }))
        },
        /**
         * @argument normalizedMin
         * @argument normalizedMax
         * @argument yearCurrent
         */
        monthOptions () {
            const [minYear, minMonth] = this.normalizedMin
            const [maxYear, maxMonth] = this.normalizedMax

            const min = this.yearCurrent === minYear ? minMonth : 0
            const max = this.yearCurrent === maxYear ? maxMonth : 11

            return Array.from({ length: max - min + 1 }, (value, index) => ({ label: min + index + 1, value: min + index }))
        },
        /**
         * @argument normalizedMin
         * @argument normalizedMax
         * @argument yearCurrent
         * @argument monthCurrent
         */
        dateOptions () {
            const [minYear, minMonth, minDate] = this.normalizedMin
            const [maxYear, maxMonth, maxDate] = this.normalizedMax

            const min = (this.yearCurrent === minYear && this.monthCurrent === minMonth) ? minDate : 1
            const max = (this.yearCurrent === maxYear && this.monthCurrent === maxMonth) ? maxDate : this.getLastDateOfMonth(this.yearCurrent, this.monthCurrent)

            return Array.from({ length: max - min + 1 }, (value, index) => ({ label: min + index, value: min + index }))
        },
        /**
         * @argument normalizedMin
         * @argument normalizedMax
         * @argument yearCurrent
         * @argument monthCurrent
         * @argument dateCurrent
         */
        hourOptions () {
            const [minYear, minMonth, minDate, minHour] = this.normalizedMin
            const [maxYear, maxMonth, maxDate, maxHour] = this.normalizedMax

            const min = (this.yearCurrent === minYear && this.monthCurrent === minMonth && this.dateCurrent === minDate) ? minHour : 0
            const max = (this.yearCurrent === maxYear && this.monthCurrent === maxMonth && this.dateCurrent === maxDate) ? maxHour : 23

            return Array.from({ length: max - min + 1 }, (value, index) => ({ label: min + index, value: min + index }))
        },
        /**
         * @argument normalizedMin
         * @argument normalizedMax
         * @argument yearCurrent
         * @argument monthCurrent
         * @argument dateCurrent
         * @argument hourCurrent
         */
        minuteOptions () {
            const [minYear, minMonth, minDate, minHour, minMinute] = this.normalizedMin
            const [maxYear, maxMonth, maxDate, maxHour, maxMinute] = this.normalizedMax

            const min = (this.yearCurrent === minYear && this.monthCurrent === minMonth && this.dateCurrent === minDate && this.hourCurrent === minHour) ? minMinute : 0
            const max = (this.yearCurrent === maxYear && this.monthCurrent === maxMonth && this.dateCurrent === maxDate && this.hourCurrent === maxHour) ? maxMinute : 59

            return Array.from({ length: max - min + 1 }, (value, index) => ({ label: min + index, value: min + index }))
        },
        /**
         * @argument minDate
         */
        normalizedMin () {
            const year = this.minDate.getFullYear()
            const month = this.minDate.getMonth()
            const date = this.minDate.getDate()
            const hours = this.minDate.getHours()
            const minutes = this.minDate.getMinutes()

            return [year, month, date, hours, minutes]
        },
        /**
         * @argument maxDate
         */
        normalizedMax () {
            const year = this.maxDate.getFullYear()
            const month = this.maxDate.getMonth()
            const date = this.maxDate.getDate()
            const hours = this.maxDate.getHours()
            const minutes = this.maxDate.getMinutes()

            return [year, month, date, hours, minutes]
        }
    },

    watch: {
        visible (val) {
            this.normalizedVisible = val
        },
        normalizedVisible (val) {
            this.$emit('update:visible', val)

            if (val) {
                this.current = this.value
            }
        }
    },

    methods: {
        handleConfirm () {
            this.$emit('input', this.current)
            this.normalizedVisible = false

            this.$nextTick(() => {
                this.$emit('change', this.current)
            })
        },
        handleCancel () {
            this.normalizedVisible = false
        },
        // 获取当月最后一天日期
        getLastDateOfMonth (year, month) {
            return new Date(year, month + 1, 0).getDate()
        }
    },

    created () {
    },

    components: {
        BasePopup,
        BasePicker,
        BasePickerItem
    }
}
</script>
