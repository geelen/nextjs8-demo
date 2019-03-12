const isProd = process.env.NODE_ENV === 'production'
console.log({isProd})

// next.config.js
module.exports = {
  target: 'serverless',
  assetPrefix: isProd ? '/_assets' : ''
}
