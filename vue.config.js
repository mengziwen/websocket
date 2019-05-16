const ip = "ws://192.168.9.21:8300";
module.exports = {
    runtimeCompiler: false,
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
          '/api': {
            target: ip,
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // rewrite path
            }
          }
        }
    }
}
