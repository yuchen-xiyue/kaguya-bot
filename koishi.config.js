// 配置项文档：https://koishi.js.org/api/app.html
module.exports = {
    // Koishi 服务器监听的端口
    port: 8080,
    onebot: {
        // 对应 cqhttp 配置项 http_config.post_urls, ws_reverse_servers.reverse_url
        path: '/kaguya-bot',
        secret: 'password',
    },
    bots: [{
        type: 'onebot:http',
        // 对应 cqhttp 配置项 http_config.port
        server: 'http://localhost:5700',
        selfId: '827901313',
        token: '',
    }],
    prefix: ['--', '.'],
    plugins: {
        mysql: {
            host: '172.21.0.16',
            // Koishi 服务器监听的端口
            port: 3306,
            user: 'root',
            password: '1101011999@Ww',
            database: 'koishi',
        },
        common: {},
        webui: {},
        './my-plugins': {},

    },
}
