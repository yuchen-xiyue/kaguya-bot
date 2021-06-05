
module.exports = (ctx) => {
    const WolframAlpha = require('wolfram-alpha-api');
    const waApi = WolframAlpha('VXUG2K-3HA2HTXKV9');
    ctx.command('alpha <query>')
        .action((_, query) => {
            let msg = 'AlphaNoResponseException';
            waApi.getFull(
                query
            ).then(
                (qr) => {
                    const pods = qr.pods;
                    const output = pods.map((pod) => {
                        const subpodContent = pod.subpods.map(subpod =>
                            segment('image', { url: subpod.img.src })
                        );
                        return pod.title+subpodContent;
                    }).join('\n');
                    // console.log(output);
                    msg = output;
                }
            ).catch(
                (e) => {
                    msg = `AlphaNoResultException!`;
                }
            );
        })

    ctx.command('unicode <code>')
        .action((_, code) => String.fromCharCode(code))
}
