const CTX = '@@Ripple'
const defaults = {
    duration: 400,
    color: 'rgba(255, 255, 255, 0.4)',
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
    const { el: target, options: { color, disabled } } = this

    if (disabled) return

    const rect = target.getBoundingClientRect()
    let ripple = target.querySelector('.t-ripple')

    if (!ripple) {
        ripple = document.createElement('div')
        ripple.className = 't-ripple'
        const size = Math.max(rect.width, rect.height)
        ripple.setAttribute('style', `width: ${size}px; height: ${size}px; background: ${color};`)
        target.appendChild(ripple)
    }

    ripple.classList.remove('show')
    const top = event.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop
    const left = event.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft

    ripple.style.top = `${top}px`
    ripple.style.left = `${left}px`
    ripple.classList.add('show')

    return false
}
