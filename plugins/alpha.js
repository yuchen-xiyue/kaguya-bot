module.exports = (ctx) => {
    const WolframAlpha = require('wolfram-alpha-api');
    const {segment} = require('koishi-utils');
    const alphaId = 'VXUG2K-3HA2HTXKV9';

    ctx.command('alpha <query:string>')
        .option('debug', '-d [debug:boolean]')
        .example('alpha sin(x)')
        .action(async (_, query, debug) => {

            let msg = 'AlphaNoResponseException!';

            if (debug) {
                msg = 'Run as debug mode...\n';
            }

            let waApi = WolframAlpha(alphaId);

            if (debug) {
                msg += 'Wolfram Alpha initiated...\n';
            }

            await waApi.getFull(
                query
            ).then(
                (qr) => {
                    if (debug) {
                        msg += 'Wolfram Alpha answer received...\n';
                    }
                    const pods = qr.pods;
                    const output = pods.map((pod) => {
                        const subpodContent = pod.subpods.map(subpod =>
                            segment('image', { url: subpod.img.src })
                        );
                        return pod.title + ':\n' + subpodContent + '\n';
                    });

                    if (debug) {
                        msg += 'Query completed! Result: \n';
                        msg += output;
                    } else {
                        msg = '';
                        msg += output;
                    }

                }
            ).catch(
                (e) => {
                    if (debug) {
                        msg += e;
                    } else {
                        msg = '';
                        msg += 'AlphaNoResultException!';
                    }
                }
            );

            return msg;
        })
};
