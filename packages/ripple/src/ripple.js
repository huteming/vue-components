const CTX = '@@Ripple'

const defaults = {
    color: 'rgba(255, 255, 255, 0.4)',
    center: false,
    disabled: false,
}

export default {
    name: 'Ripple',

    bind (el, binding, vnode) {
        el[CTX] = {
            el,
            vm: vnode.context,

            options: Object.assign({}, defaults, binding.value),
        }
        const self = el[CTX]
        self.handler = show.bind(self)

        const disabledExp = self.el.dataset.rippleDisabled
        if (disabledExp) {
            self.vm.$watch(disabledExp, value => {
                self.options.disabled = value
            }, { immediate: true })
        }

        el.addEventListener('click', self.handler)
    },

    unbind (el) {
        const self = el[CTX]

        el.removeEventListener('click', self.handler)
    }
}

function show (event) {
    const self = this
    const { el: target, options: { color, disabled, center } } = this

    if (disabled) return
    this.disabled = true

    const rect = target.getBoundingClientRect()
    let container = target.querySelector('.t-ripple')
    let ripple = target.querySelector('.t-ripple-container')

    if (!container) {
        container = document.createElement('div')
        container.className = 't-ripple'
        const size = Math.max(rect.width, rect.height)
        container.setAttribute('style', `width: ${size}px; height: ${size}px;`)

        ripple = document.createElement('div')
        ripple.className = 't-ripple-container'
        ripple.setAttribute('style', `background: ${color};`)

        container.appendChild(ripple)
        target.appendChild(container)
    }

    const left = center ? 0 : event.pageX - rect.left - ripple.offsetWidth / 2
    const top = center ? 0 : event.pageY - rect.top - ripple.offsetHeight / 2

    ripple.style.top = `${top}px`
    ripple.style.left = `${left}px`

    ripple.classList.add('show')

    setTimeout(() => {
        ripple.classList.remove('show')
        self.disabled = false
    }, 450)

    return false
}
