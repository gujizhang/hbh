const path = require('path')
module.exports={
    assetsDir: 'assets/',
    configureWebpack:{
        resolve:{
            extensions:[],
            alias:{
                "assets":"@/assets",
                "common":"@/common",
                "components":"@/components",
                "network":"@/network",
                "views":"@/views",
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 75
            })
    },
}