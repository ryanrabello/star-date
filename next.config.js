const prod = process.env.NODE_ENV === 'production'
const basePath = prod ? '/star-date' : ''

module.exports = {
    env: {
        basePath,
    },
    basePath,
}