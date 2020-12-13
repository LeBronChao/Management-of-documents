'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Doc.hasOne(models.Doc_Title)
    }
  };
  Doc.init({
    type: DataTypes.STRING,
    unit: DataTypes.STRING,
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    text_html: DataTypes.TEXT,
    pub_time: DataTypes.DATE,
    click_count: DataTypes.INTEGER,
    file_url: DataTypes.STRING,
    exm_status: DataTypes.INTEGER,
    pub_username: DataTypes.STRING,
    exm_username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doc',
  });
  return Doc;
};