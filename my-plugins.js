module.exports = (ctx) => {
    ctx.middleware((session, next) => {
        if (session.content === 'psvm') {
            session.send('public static void Main')
        }

        return next()
    })
}
