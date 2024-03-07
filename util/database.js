const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'MDafnan18x',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;