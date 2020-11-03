const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

if (typeof require !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('hi there, in dev mode')
  require.extensions['.css'] = (file) => {}
}
module.exports = withSass(
  withCSS(
    // withImages(
    // withTM(
    {
      webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        config.module.rules.push({
          test: /\.(jpe?g|png)$/,
          use: [
            {
              loader: 'lqip-loader',
              options: {
                fallback: 'file-loader',
                base64: true,
                publicPath: '/_next/static/images/',
                outputPath: `${isServer ? '../' : ''}static/images/`,
                name: '[name]-[hash].[ext]',
              },
            },
          ],
        })
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
        return config
      },
      target: 'serverless',
    },
    // ),
  ),
  // ),
)
