'use strict'

const Path = require('path')

const pluginPath = Path.resolve(__appRoot, 'app', 'web')

const appPlugins = [
  {
    plugin: require(Path.resolve(pluginPath, 'base'))
  },
  {
    plugin: require(Path.resolve(pluginPath, 'user-profile'))
  },
  {
    plugin: require(Path.resolve(pluginPath, 'user-signup-login'))
  }
]

module.exports = appPlugins