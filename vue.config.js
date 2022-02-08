const webpack = require("webpack");

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/sass/global.sass"`
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            })
        ]
    }
}