const methods = {
    isRequired,
    isEmail,
    isMobile,
    isNumber,
    isEqual, // 无法区分 数字 和 字符串。

    minlength,
    maxlength,
    rangelength,

    min,
    max,
    range,
}

export default class Validator {
    constructor () {
        this.handlers = []
    }

    add (value, fn, errorMessage) {
        const [name, ...args] = fn.split(':')

        this.handlers.push(() => {
            const isValid = methods[name](value, ...args)
            return !isValid ? errorMessage : ''
        })
    }

    execute () {
        for (let i = 0; i < this.handlers.length; i++) {
            const handler = this.handlers[i]
            const message = handler()
            if (message) return message
        }
    }
}

function isRequired (value) {
    return isNumber(value) || !!value
}

function isEmail (value) {
    return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)
}

function isMobile (value) {
    return /^[1][3,4,5,7,8][0-9]{9}$/.test(value)
}

function isNumber (value) {
    return typeof value === 'number'
}

function isEqual (value, equalValue) {
    return value === equalValue
}

function minlength (value, min) {
    return value.length >= min
}

function maxlength (value, max) {
    return value.length <= max
}

function rangelength (value, min, max) {
    const length = value.length
    return length >= min && length <= max
}

function min (value, min) {
    value = Number(value)
    return value >= min
}

function max (value, max) {
    value = Number(value)
    return value <= max
}

function range (value, min, max) {
    value = Number(value)
    return value >= min && value <= max
}
