'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Interaction.init({
    customerId: DataTypes.INTEGER,
    contactId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Interaction',
  });
  return Interaction;
};