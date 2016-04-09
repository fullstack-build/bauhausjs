var postgresCredentials = '';
var VCAP_SERVICES = '';
if(process &&
  process.env &&
  process.env.VCAP_SERVICES){
  VCAP_SERVICES = JSON.parse(process.env.VCAP_SERVICES);
}


if( VCAP_SERVICES['postgresql-9.1'] &&
  VCAP_SERVICES['postgresql-9.1'][0] &&
  VCAP_SERVICES['postgresql-9.1'][0].credentials){
  postgresCredentials = VCAP_SERVICES['postgresql-9.1'][0].credentials;
}

module.exports = {
  "postgres": {
    "host": postgresCredentials.host,
    "port": postgresCredentials.port,
    "user": postgresCredentials.username,
    "password": postgresCredentials.password,
    "database": postgresCredentials.name,
    "name": "postgres",
    "connector": "postgresql"
  }
};

console.log("using PRODUCTION configuration");
