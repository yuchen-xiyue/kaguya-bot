
module.exports = (ctx) => {
    const WolframAlpha = require('wolfram-alpha-api');
    const alphaId = 'VXUG2K-3HA2HTXKV9';

    ctx.command('alpha <query>')
        .action((_, query) => {
            let msg = 'AlphaNoResponseException!';
            let waApi = WolframAlpha(alphaId);

            waApi.getFull(
                query
            ).then(
                (qr) => {
                    const pods = qr.pods;
                    const output = pods.map((pod) => {
                        const subpodContent = pod.subpods.map(subpod =>
                            segment('image', { url: subpod.img.src })
                        );
                        return pod.title + subpodContent;
                    }).join('\n');
                    msg = output;
                }
            ).catch(
                (e) => {
                    msg = 'AlphaNoResultException!';
                }
            );

            return msg;
        })

    ctx.command('unicode <code>')
        .action((_, code) => String.fromCharCode(code));


}
