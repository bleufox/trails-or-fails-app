const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StarRatings extends Model { }
StarRatings.init(
    {
      userId: DataTypes.INTEGER,
      trailId: DataTypes.STRING,
      rating: DataTypes.DECIMAL
    },
    { sequelize, modelName: 'starratings' }
  );

  module.exports = StarRatings;