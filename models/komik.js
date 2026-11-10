'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Komik extends Model {
    static associate(models) {
      // relasi
    }
  }
  
  Komik.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Komik',
  });
  
  return Komik;
};