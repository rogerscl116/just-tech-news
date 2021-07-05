// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// create a connection to our database, pass in your mysql info for username and password
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
  
  module.exports = sequelize;