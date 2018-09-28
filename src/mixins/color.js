import theme from 'packages/theme'

export default (defaultColor = 'deepPurple') => {
    return {
        props: {
            color: {
                type: String,
                default: defaultColor,
            }
        },

        computed: {
            $_normalizedColor () {
                return theme.color[this.color] || this.color || theme.color[defaultColor] || defaultColor
            }
        },
    }
}
