/**
 * Adapted from dominus v6.0.1
 * https://github.com/bevacqua/dominus/blob/master/src/classes.js
 */

const trim = /^\s+|\s+$/g
const whitespace = /\s+/g

export function interpret (input) {
    return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input
}

export function get (el) {
    if (isElement(el)) {
        return el.className.replace(trim, '').split(whitespace)
    }

    return []
}

export function set (el, input) {
    if (isElement(el)) {
        el.className = interpret(input).join(' ')
    }
}

export function add (el, input) {
    const current = remove(el, input)
    const values = interpret(input)

    current.push.apply(current, values)
    set(el, current)

    return current
}

export function remove (el, input) {
    const current = get(el)
    const values = interpret(input)

    values.forEach(function (value) {
        const i = current.indexOf(value)
        if (i !== -1) {
            current.splice(i, 1)
        }
    })

    set(el, current)

    return current
}

export function has (el, input) {
    const current = get(el)
    const values = interpret(input)

    return values.every(function (value) {
        return current.indexOf(value) !== -1
    })
}

export function isElement (o) {
    const elementObjects = typeof window.HTMLElement === 'object'

    return elementObjects ? o instanceof window.HTMLElement : isElementObject(o)
}

export function isElementObject (o) {
    return o &&
        typeof o === 'object' &&
        typeof o.nodeName === 'string' &&
        o.nodeType === 1
}
