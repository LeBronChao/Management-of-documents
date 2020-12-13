'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doc_Title extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Doc_Title.belongsTo(models.Doc)
    }
  };
  Doc_Title.init({
    DocId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    color: DataTypes.STRING,
    bold: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doc_Title',
  });
  return Doc_Title;
};