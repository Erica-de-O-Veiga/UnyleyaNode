const Sequelize = require('sequelize');
const database = require('../db');

const Link = database.define('link', {
    id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull:true, 
        primaryKey: true
    }, 
    code: {
        type: Sequelize.STRING,
        allowNull:false
    },
    url: {
        type: Sequelize.STRING,
        allowNull:false
    }, 
    hits: {
        type: Sequelize.INTEGER,
        allowNull:true,
        defaultValue: 0
    }

})

module.exports = Link;

 