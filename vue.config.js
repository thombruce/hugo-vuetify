// vue.config.js
module.exports = {
  // disable hashes in filenames
  filenameHashing: false,

  // delete HTML related webpack plugins
  chainWebpack: process.env.NODE_ENV === 'production'
    ? config => {
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
      }
    : undefined,

  transpileDependencies: [
    'vuetify'
  ]
}
