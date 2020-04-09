const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withTM = require('@weco/next-plugin-transpile-modules')

if (typeof require !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('hi there, in dev mode')
  require.extensions['.css'] = (file) => {}
}
module.exports = withSass(
  withCSS(
    withTM({
      transpileModules: ['oapack'],
      target: 'serverless',
    }),
  ),
)
