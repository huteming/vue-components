const path = require('path')
const markdown = require('markdown-it')()
const MarkdownItContainer = require('markdown-it-container')

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'packages': resolve('./packages'),
                'apps': resolve('./apps'),
                'apps-docs': resolve('./apps-docs'),
                'apps-example': resolve('./apps-example'),
                'tommy-ui': resolve('./src/main.js'),
                'mixins': resolve('./src/mixins'),
            }
        }
    },

    chainWebpack: config => {
        config.module
            .rule('eslint')
            .exclude
            .add(resolve('packages/icon/iconfont/iconfont.js'))
            .add(resolve('applications/assets/js/jweixin-1.2.0'))

        /**
         * 读取 md 文件
         * https://github.com/QingWei-Li/vue-markdown-loader
         */
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true,

                preprocess: function (MarkdownIt, Source) {
                    MarkdownIt.renderer.rules.table_open = function () {
                        return '<div class="table-container"><table class="table">';
                    };
                    MarkdownIt.renderer.rules.table_close = function () {
                        return '</table></div>';
                    };
                    return Source;
                },

                use: [
                    [MarkdownItContainer, 'header', {
                        validate: function(params) {
                            return params.trim().match(/^header\s+(.*)$/);
                        },

                        render: function (tokens, idx) {
                            const m = tokens[idx].info.trim().match(/^header\s+(.*)$/)

                            if (tokens[idx].nesting === 1) {
                                // opening tag
                                return `
                                    <h1 class="markdown-header">
                                        ${markdown.utils.escapeHtml(m[1])}
                                    </h1>
                                `
                            } else {
                                // closing tag
                                // return '</div>\n'
                            }
                        }
                    }]
                ]
            })

        /**
         * fix 热更新失败
         * https://github.com/vuejs/vue-cli/issues/1559
         */
        config.resolve
            .symlinks(true)
    },

    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/sass/index.scss";`
            }
        }
    },

    baseUrl: process.env.NODE_ENV === 'production'
        ? '/vue-components/'
        : '/'
}
