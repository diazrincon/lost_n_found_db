const env = {
    database: 'lost_items',
    username: 'finder',
    password: 'admin',
    host: '192.168.1.44',
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
  
  module.exports = env;