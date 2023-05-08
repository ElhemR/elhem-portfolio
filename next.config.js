module.exports = {
    reactStrictMode: true,
    i18n: {
      locales: ['en', 'de'],
      defaultLocale: 'en',
    },
    webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })

        return config
    },
}
  
  
  