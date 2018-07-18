'use strict'

const Env = util('env')
const Slugify = require('@sindresorhus/slugify')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Session Cookie Name
  |--------------------------------------------------------------------------
  |
  | TBA.
  |
  */
  cookie: Env.get('SESSION_COOKIE', `${Slugify(Env.get('APP_NAME', 'boost'))}_session`),

  /*
  |--------------------------------------------------------------------------
  | Session Lifetime
  |--------------------------------------------------------------------------
  |
  | Expires on close.
  |
  */
  lifetime: Env.get('SESSION_LIFETIME', null),

  /*
  |--------------------------------------------------------------------------
  | CSRF Token Name
  |--------------------------------------------------------------------------
  |
  | Expires on close.
  |
  */
  token: 'csrfToken'
}