module.exports = (ctx) => {

    ctx.command('char <code>')
        .action((_, code) => {
            if (!isNaN(code))
                return String.fromCharCode(code);
        });

    ctx.command('unicode <s:text>')
        .action((_, s) => {

            if (s.length >= 1) {
                return s.split('').map((ch)=>('00000000'+ch.charCodeAt(0)).slice(-8)).join(' ');
            }
            else {
                return '请输入文字内容哦';
            }
        });

};

