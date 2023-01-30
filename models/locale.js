'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locale = sequelize.define('Locale', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      ip: {
        type: DataTypes.STRING,
      },
      uf: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING,
      },
      lat: {
        type: DataTypes.STRING,
      },
      long: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE
      },
      updated_at: {
        type: DataTypes.DATE
      }
  }, {
    createdAt:false,
    updatedAt:false
  });
  return Locale;
};