'use strict'

const BaseTest = require('@root/testing/base-test')
const { Transports } = require('@root/mail')
const PostmarkTransporter = Transports['postmark']

class PostmarkTransporterTest extends BaseTest {
  async createPostmarkTransporter (t) {
    const transporter = new PostmarkTransporter({
      auth: {
        apiKey: '123'
      }
    })

    t.truthy(transporter)
  }
}

module.exports = new PostmarkTransporterTest()
