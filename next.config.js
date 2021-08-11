const withImages = require('next-images')
const withTM = require('next-transpile-modules')(['three'])

module.exports = withTM({
  ...withImages(),
  webpack5: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        THREE: 'three',
      })
    )
    return config
  },
})
