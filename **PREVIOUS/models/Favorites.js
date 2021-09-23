const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Favorites extends Model {}

Favorites.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        trail_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //TODO: Add more fields??? 
        //Possible hooks???
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'favorites'
    },
);

module.exports = Favorites;