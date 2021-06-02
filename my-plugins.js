const pluginJava = require('./java');
const pluginAlpha = require('./alpha');

module.exports = (ctx) => {
    ctx.plugin(pluginJava);
    ctx.plugin(pluginAlpha);
}
