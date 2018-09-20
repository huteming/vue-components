<script>
import AppNavbar from './components/navbar'
import AppContent from './components/content'
import TabPane from './tab-pane'

export default {
    name: 'BaseTab',

    props: {
        value: String
    },

    data () {
        return {
            active: this.value
        }
    },

    watch: {
        value (val) {
            this.active = val
        },
        active (val) {
            this.$emit('input', val)

            this.$nextTick(() => {
                this.$emit('change', val)
            })
        },
    },

    methods: {
        handleChange (name) {
            this.active = name
        }
    },

    mounted () {
    },

    render (h) {
        const panes = this.$slots.default.filter(item => /TabPane/.test(item.tag))
        const containers = this.$slots.default.filter(item => /TabContainer/.test(item.tag))

        containers
            .filter(item => {
                const { icon, title } = item.data.attrs
                if (!icon && !title) {
                    return false
                }

                const nameContainer = item.componentOptions.propsData.name

                return !panes.find(item => item.componentOptions.propsData.name === nameContainer)
            })
            .forEach(item => {
                const { icon, title } = item.data.attrs
                const name = item.componentOptions.propsData.name

                panes.push((
                    <TabPane icon={ icon } title={ title } name={ name } />
                ))
            })

        panes.sort((prev, next) => {
            const namePrev = prev.componentOptions.propsData.name
            const nameNext = next.componentOptions.propsData.name

            const indexPrev = containers.findIndex(item => item.componentOptions.propsData.name === namePrev)
            const indexNext = containers.findIndex(item => item.componentOptions.propsData.name === nameNext)

            return indexPrev - indexNext
        })

        const navbar = (
            <app-navbar value={ this.active } onChange={ this.handleChange }>
                { panes }
            </app-navbar>
        )

        const content = (
            <app-content value={ this.active }>
                { containers }
            </app-content>
        )

        return (
            <section class="t-tab">
                { navbar }
                { content }
            </section>
        )
    },

    components: {
        AppNavbar,
        AppContent,
    },
}
</script>
