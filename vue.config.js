module.exports = {
    pages: {
        index: {
            entry: 'src/index.js'
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "src/scss/print.scss";`
            }
        }
    }
}
