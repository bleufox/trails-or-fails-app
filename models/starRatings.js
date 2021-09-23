const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StarRatings extends Model {}

StarRatings.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
      trailId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      }
    },

    { 
      sequelize, 
      freezeTableName: true,
      underscored: true,
      modelName: 'starRatings' }
  );

  module.exports = StarRatings;