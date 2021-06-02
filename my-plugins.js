const pluginJava = require('./java');
const pluginAlpha = require('./alpha');
const WolframAlpha = require('wolfram-alpha-api')

module.exports = (ctx) => {
    ctx.plugin(pluginJava);
    ctx.plugin(WolframAlpha);
    ctx.plugin(pluginAlpha);
}
