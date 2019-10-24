const env = {
    database: 'lost_items',
    username: 'finder',
    password: '',
    host: '',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
  
  module.exports = env;