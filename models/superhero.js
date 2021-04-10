'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    static associate(models) {
      Superhero.hasMany(models.Image, {
        foreingKey: 'superheroId',
      });
      Superhero.belongsToMany(models.Superpower, {
        through: 'powers_to_heroes',
        foreingKey: 'superheroId',
      });
    }
  }
  Superhero.init(
    {
      nickname: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      realName: {
        field: 'real_name',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      originDescription: {
        field: 'origin_description',
        allowNull: false,
        type: DataTypes.STRING,
      },
      catchPhrase: {
        field: 'catch_phrase',
        allowNull: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Superhero',
      tableName: 'superheroes',
      underscored: true,
    }
  );
  return Superhero;
};
