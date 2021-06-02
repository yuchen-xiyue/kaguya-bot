import {segment} from "koishi-utils";

const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('VXUG2K-3HA2HTXKV9');

module.exports.name = 'wolfram-alpha';

module.exports.apply = (ctx) => {
    ctx.command('alpha <query>')
        .action((_, query) => {
            waApi.getFull(
                query
            ).then(
                (qr) => {
                    const pods = qr.pods;
                    const output = pods.map((pod) => {
                        const subpodContent = pod.subpods.map(subpod =>
                            segment('image', { url: subpod.img.src })
                        );
                        return `${pod.title}\n${subpodContent}`;
                    }).join('\n');
                    // console.log(output);
                    return output;
                }
            ).catch(
                (e) => {
                    return `No answer found! `;
                }
            );
        })
}
