const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const prod = process.env.NODE_ENV === 'production'
const basePath = prod ? '/star-date' : '';

module.exports = withPWA({
    env: {
        basePath,
    },
    basePath,
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
})