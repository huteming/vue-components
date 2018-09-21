const CTX = '@@Ripple'
const defaults = {
    duration: 750,
    color: 'rgba(255, 255, 255, 0.3)',
}

export default {
    name: 'Ripple',

    bind (el, binding) {
        el[CTX] = {
            el,
            options: Object.assign(defaults, binding.value)
        }
        const self = el[CTX]

        self.handler = show.bind(self)

        el.addEventListener('click', self.handler)
    },

    unbind (el) {
        const self = el[CTX]

        el.removeEventListener('click', self.handler)
    }
}

function show (event) {
    const element = createElement.call(this, event)

    const offset = getOffset(this.el)
    const isTouchEvent = event.touches && event.touches.length
    const pageX = isTouchEvent ? event.touches[0].pageX : event.pageX
    const pageY = isTouchEvent ? event.touches[0].pageY : event.pageY
    const pointerX = pageX - offset.left
    const pointerY = pageY - offset.top

    const scale = `scale(${this.el.clientWidth / 100 * 10})`
    const { duration, color } = this.options

    const startStyles = {
        top: `${pointerY}px`,
        left: `${pointerX}px`,
        background: color,
        opacity: 1,
        transform: scale,
        'transition-duration': `${duration}ms`,
        'transition-timing-function': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',

        '-webkit-transform': scale,
        '-moz-transform': scale,
        '-ms-transform': scale,
        '-o-transform': scale,

        '-webkit-transition-duration': `${duration}ms`,
        '-moz-transition-duration': `${duration}ms`,
        '-o-transition-duration': `${duration}ms`,

        '-webkit-transition-timing-function': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        '-moz-transition-timing-function': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        '-o-transition-timing-function': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    }

    element.classList.add('t-ripple-animation')
    element.setAttribute('style', formatStyle(startStyles))

    const endStyles = {
        top: `${pointerY}px`,
        left: `${pointerX}px`,
        background: color,
        opacity: 0,
        transform: scale,
        'transition-duration': `${duration}ms`,

        '-webkit-transform': scale,
        '-moz-transform': scale,
        '-ms-transform': scale,
        '-o-transform': scale,

        '-webkit-transition-duration': `${duration}ms`,
        '-moz-transition-duration': `${duration}ms`,
        '-o-transition-duration': `${duration}ms`,
    }

    setTimeout(() => {
        element.setAttribute('style', formatStyle(endStyles))
    }, 100)
}

/**
 * 创建波纹dom
 */
function createElement (event) {
    const self = this

    if (getComputedStyle(this.el).position === 'static') {
        this.el.classList.add('t-ripple-position')
    }

    const element = document.createElement('div')
    this.el.appendChild(element)

    element.addEventListener('webkitTransitionEnd', function remove () {
        element.removeEventListener('webkitTransitionEnd', remove)

        self.el.removeChild(element)
        self.el.classList.remove('t-ripple-position')
    })

    return element
}

/**
 * 样式拼接
 * @argument {Object} styles 样式对象
 */
function formatStyle (styles) {
    let css = ''

    for (let key in styles) {
        if (styles.hasOwnProperty(key)) {
            css += `${key}: ${styles[key]};`
        }
    }

    return css
}

/**
 * 获取鼠标点击位置
 * @argument {Dom} el 点击对象
 */
function getOffset (el) {
    const box = el.getBoundingClientRect()
    const body = document.body
    const clientTop = el.clientTop || body.clientTop || 0
    const clientLeft = el.clientLeft || body.clientLeft || 0
    const scrollTop = window.pageYOffset || el.scrollTop
    const scrollLeft = window.pageXOffset || el.scrollLeft

    return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
    }
}
