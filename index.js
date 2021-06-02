const { App } = require('koishi')

const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('VXUG2K-3HA2HTXKV9');

// 你需要手动安装适配器
require('koishi-adapter-onebot');

const app = new App({
    // 这部分与上面的配置文件作用基本相同
    type: 'onebot:http',
    selfId: '827901313',
})

// 注册插件，作用相当于上面配置文件中的 plugins 部分
app.plugin(require('koishi-plugin-common'));

// 启动应用
app.start()
