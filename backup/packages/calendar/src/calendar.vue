<template>
<section class="t-calendar">
    <div class="t-calendar-header">
        <div class="t-calendar-date">{{ currentYear }} 年 {{ currentMonth + 1 }} 月</div>

        <ul class="t-calendar-week">
            <li class="week" v-for="(item, index) in weeks" :key="index" v-text="item"></li>
        </ul>
    </div>

    <div class="t-calendar-container"
        :style="styleContainer"
        ref="container"
        @touchstart="handleTouchstart"
        @touchmove="handleTouchmove"
        @touchend="handleTouchend"
        @transitionend="handleTransitionend">
        <div :class="`t-calendar-${type}`" v-for="(dates, type) in calendars" :key="type">
            <calendar-date v-for="item in dates" :key="item._date" :single="item">
                <template slot-scope="scope">
                    <slot v-bind="scope">{{ scope.description }}</slot>
                </template>
            </calendar-date>
        </div>
    </div>
</section>
</template>

<script>
import CalendarDate from './calendar-date.vue'

const now = new Date()
const todayYear = now.getFullYear()
const todayMonth = now.getMonth()
const todayDate = now.getDate()

export default {
    name: 'BaseCalendar',

    props: {
        /**
         * @param {String} date 2018-06-08
         * @param {String} description 描述文字，展示在日期下面
         * @param {String} sign 标记样式, primary
         */
        events: {
            type: Array,
            default () {
                return []
            }
        }
    },

    data () {
        return {
            weeks: ['日', '一', '二', '三', '四', '五', '六'],

            currentValue: now,

            startX: 0,
            startY: 0,
            moveX: 0,
            moving: false,
            direction: '' // '', vertical, across
        }
    },

    computed: {
        /**
         * 日历循环数组
         * @param {Any} events 传入的 events 对象数组展开
         * @param {Boolean} hasEvent 可以用来判断是否有外部事件
         * @param {String} _day 日期
         * @param {Boolean} _isCurrentMonth
         * @param {Boolean} _isToday
         */
        calendars () {
            const prev = this.getCalendar(this.currentYear, this.currentMonth - 1)
            const current = this.getCalendar(this.currentYear, this.currentMonth)
            const next = this.getCalendar(this.currentYear, this.currentMonth + 1)

            return { prev, current, next }
        },
        currentYear () {
            return this.currentValue.getFullYear()
        },
        currentMonth: {
            get () {
                return this.currentValue.getMonth()
            },
            set (val) {
                this.currentValue = new Date(this.currentYear, val)
            }
        },
        currentDate () {
            return this.currentValue.getDate()
        },
        styleContainer () {
            return {
                transform: `translateX(${this.moveX}px)`,
                transition: this.moving ? '' : `all .3s`
            }
        }
    },

    watch: {
    },

    methods: {
        handleClick (item) {
            this.$emit('click', item)
        },
        handleTouchstart (event) {
            const finger = event.changedTouches[0]

            this.startX = finger.pageX
            this.startY = finger.pageY
        },
        handleTouchmove (event) {
            const finger = event.changedTouches[0]
            const moveX = finger.pageX - this.startX
            const moveY = finger.pageY - this.startY

            if (!this.direction) {
                // 滑动幅度太小，不处理
                if (Math.abs(moveX) < 4 && Math.abs(moveY) < 4) {
                    return
                }

                this.direction = Math.abs(moveX) / Math.abs(moveY) > 1 ? 'across' : 'vertical'
            }

            if (this.direction === 'vertical') {
                return
            }
            event.preventDefault()

            this.moveX = moveX
            this.moving = true
        },
        handleTouchend (event) {
            const isVertical = this.direction === 'vertical'
            this.direction = ''

            if (isVertical) {
                return
            }

            const singleWidth = this.$refs.container.offsetWidth

            if (this.moveX < -70) {
                this.moveX = -singleWidth
            } else if (this.moveX > 70) {
                this.moveX = singleWidth
            } else {
                this.moveX = 0
            }
            this.moving = false
        },
        /**
         * 重新计算前后日历
         * 这里利用虚拟dom，虽然改变数据，但是保持显示结果完全一致，界面并不会产生"抖动"
         */
        handleTransitionend () {
            if (this.moveX > 0) {
                this.currentMonth--
            } else if (this.moveX) {
                this.currentMonth++
            }

            this.moveX = 0
            this.moving = true
        },
        getCalendar (year, month) {
            const startLackDates = this.getStartLackDates(year, month)
            const centerDates = this.getCenterDates(year, month)
            const endLackDates = this.getEndLackDates(year, month, startLackDates.length + centerDates.length)

            return [].concat(startLackDates, centerDates, endLackDates)
        },
        /**
         * 补齐前面的日期
         * 当已周日为显示第一位时, 第一天为周几（0 ~ 6）, 正好意味着日历前面需要添加几个数据
         */
        getStartLackDates (year, month) {
            const events = []
            const firstDayOfMonth = new Date(year, month, 1).getDay()
            const prevMonthLastDate = new Date(year, month, 0).getDate()

            for (let i = 0; i < firstDayOfMonth; i++) {
                const event = this.getEvents(year, month - 1, prevMonthLastDate - i, false)
                events.unshift(event)
            }

            return events
        },
        /**
         * 中间的日期
         */
        getCenterDates (year, month) {
            const events = []
            const lastDateOfMonth = new Date(year, month + 1, 0).getDate()

            for (let i = 1; i <= lastDateOfMonth; i++) {
                const event = this.getEvents(year, month, i, true)
                events.push(event)
            }

            return events
        },
        /**
         * 补齐后面的日期
         * 每个日历必须填满42格，否则可能存在少一行的情况
         */
        getEndLackDates (year, month, currentLength) {
            const events = []
            const needDates = 42 - currentLength

            for (let i = 1; i <= needDates; i++) {
                const event = this.getEvents(year, month + 1, i, false)
                events.push(event)
            }

            return events
        },
        /**
         * 获取日历显示对象
         */
        getEvents (year, month, date, isCurrentMonth) {
            const event = this.events.find(item => {
                const target = new Date(item.date)
                return target.getFullYear() === year && target.getMonth() === month && target.getDate() === date
            }) || { hasEvent: false }

            const _date = `${year}-${month + 1}-${date}`.replace(/\b(\w)\b/g, '0$1')
            const _isCurrentMonth = isCurrentMonth
            const _isToday = year === todayYear && month === todayMonth && date === todayDate

            return Object.assign({ _date, _isCurrentMonth, _isToday, hasEvent: true }, event)
        }
    },

    mounted () {
    },

    components: {
        CalendarDate
    }
}
</script>
