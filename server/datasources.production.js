var postgresCredentials ="";
if(process &&
  process.env &&
  process.env.VCAP_SERVICES &&
  process.env.VCAP_SERVICES['postgresql-9.1'] &&
  process.env.VCAP_SERVICES['postgresql-9.1'].credentials){
  postgresCredentials = process.env.VCAP_SERVICES['postgresql-9.1'].credentials;
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

console.log("using PRODUCTION configuration:", process.env, postgresCredentials);
