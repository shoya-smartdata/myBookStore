const sequelize = require('../Config/db');
const { DataTypes } = require('sequelize');

const Book = sequelize.define(
    'Book', {
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING
        },
        file: {
            type: DataTypes.STRING,  
        }
    }
);
Book.sync();
module.exports = Book ; 
