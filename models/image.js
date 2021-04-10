'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Superhero, { foreignKey: 'SuperheroId' });
    }
  }
  Image.init(
    {
      image: {
        unique: true,
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Image',
      tableName: 'image_to_superhero',
      underscored: true,
    }
  );
  return Image;
};
