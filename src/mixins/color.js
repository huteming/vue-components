import theme from 'packages/theme'

export default {
    props: {
        color: {
            type: String,
            default: 'deepPurple',
        }
    },

    computed: {
        $_normalizedColor () {
            return theme.color[this.color] || this.color
        }
    },
}
