const path = require('path')

module.exports = {
    //vue 파일들을 빌드할 때, 빌드 결과물로 생기는 html, css, js 파일들이 떨어지는 디렉터리 위치 지정
    outputDir: path.resolve(__dirname,"../" + "main/resources/static"),
    devServer: {
        //proxy 설정
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                ws: true,
                changeOrigin: true
            },
        }
    }
}