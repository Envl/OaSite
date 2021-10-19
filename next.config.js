const withTM = require('next-transpile-modules')(['oapack'])

if (typeof require !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('hi there, in dev mode')
}

module.exports = withTM({
  // target: 'serverless',
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
})
