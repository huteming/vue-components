import { mount } from '@vue/test-utils'
import Component from './Component.vue'

describe('Anchor.vue', () => {
    const wrapper = mount(Component, {
        attachToDocument: true
    })
    const button = wrapper.find('button')
    const target = wrapper.find({ ref: 'target' })

    it('创建可滚动容器', () => {
        const isScrollable = wrapper.element.scrollHeight > wrapper.element.offsetHeight
        expect(isScrollable).to.be.equal(true)
        expect(getComputedStyle(wrapper.element).overflow).to.equal('auto')
    })

    it('滚动事件', (done) => {
        const prevScroll = wrapper.element.scrollTop
        expect(prevScroll).to.equal(0)

        button.trigger('click')

        wrapper.vm.$nextTick(() => {
            const nextScroll = wrapper.element.scrollTop
            expect(nextScroll).to.equal(target.element.offsetTop)
            done()
        })
    })
})
