require('dotenv').config()

module.exports = {
  port: process.env.PORT,
  poweredByHeader: false,
  env: {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    SSL: process.env.SSL,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })
    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}
