'use strict'

const Fs = require('fs')
const Path = require('path')
const Logger = require('./../logging')
const Views = require('@root/start/views')

class HandlebarsCompiler {
  constructor () {
    this.viewManager = new Views.constructor()
    this.handlebars = this.viewManager.handlebars()

    this.loadHelpers()
  }

  async compile (template) {
    return this.handlebars.compile(template)
  }

  async render (template, data) {
    const renderFunction = await this.compile(template)

    return renderFunction(data)
  }

  loadHelpers () {
    const helpersPaths = [].concat(this.viewManager.helpersLocations())

    helpersPaths.forEach(helpersPath => {
      Fs.readdirSync(helpersPath).forEach(file => {
        this.registerHelper(helpersPath, file)
      })
    })
  }

  registerHelper (helpersPath, file) {
    file = Path.join(helpersPath, file)

    try {
      const helper = require(file)
      const name = this.filename(helpersPath, file)

      if (typeof helper === 'function') {
        this.handlebars.registerHelper(name, helper)
      }
    } catch (err) {
      Logger.warn('WARNING: failed to load helper \'%s\': %s', file, err.message)
    }
  }

  filename (path, file) {
    return file.slice(path.length + 1, -Path.extname(file).length)
  }
}

module.exports = HandlebarsCompiler
