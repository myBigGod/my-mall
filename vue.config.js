module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    },
    devServer: {
        proxy: {
            '': {
                target: 'https://douban.uieee.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {

                }
            }
        }
    }
}