// 配置项文档：https://koishi.js.org/api/app.html
module.exports = {
  // Koishi 服务器监听的端口
  port: 8000,
  onebot: {
    // 对应 cqhttp 配置项 http_config.post_urls, ws_reverse_servers.reverse_url
    path: '',
    secret: '',
  },
  bots: [{
    type: 'onebot:http',
    // 对应 cqhttp 配置项 http_config.port
    server: 'http://localhost:5700',
    selfId: 827901313,
    token: '',
  }],
  plugins: {
    mysql: {
      host: '127.0.0.1',
      // Koishi 服务器监听的端口
      port: 3306,
      user: 'root',
      password: '',
      database: 'koishi',
    },
    common: {},
    webui: {},
  },
}
