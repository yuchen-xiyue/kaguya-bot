module.exports = (ctx) => {

    ctx.command('unicode <code>')
        .action((_, code) => String.fromCharCode(code));

}

