const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withTM = require('@weco/next-plugin-transpile-modules')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withImages = require('next-images')

if (typeof require !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('hi there, in dev mode')
  require.extensions['.css'] = (file) => {}
}
module.exports = withPlugins([
  [optimizedImages, {optimizeImagesInDev: true}],
  withImages(
    withSass(
      withCSS(
        withTM({
          transpileModules: ['oapack'],
          target: 'serverless',
        }),
      ),
    ),
  ),
])
