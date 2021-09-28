module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            titleProp: true
          }
        },
        'file-loader'
      ]
    })
    return config
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'es-ES'],
    defaultLocale: 'en-US',
    localeDetection: false
  }
}
