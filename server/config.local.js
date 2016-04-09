
var p = require('../package.json');
var version = p.version.split('.').shift();
module.exports = {
  restApiRoot: '/api' + (version > 0 ? '/v' + version : ''),
  /** DEPLOYMENT START */
  host: process.env.VCAP_APP_HOST || process.env.HOST || 'localhost',
  port: process.env.VCAP_APP_PORT || process.env.PORT || 3000
  /** DEPLOYMENT END */
};
