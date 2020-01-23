const Sequelize = require('sequelize');

const db = require('../db/dataBase');

module.exports = db.sequelize.define('libros', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    genero: Sequelize.STRING,
    autor: Sequelize.STRING,
});