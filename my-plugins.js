const pluginAlpha = require('./plugins/alpha');

module.exports = (ctx) => {
    ctx.plugin(pluginAlpha);
    ctx.plugin(require('./plugins/unicode'));
}
