'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Docs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.TEXT
      },
      text_html: {
        type: Sequelize.TEXT
      },
      pub_time: {
        type: Sequelize.DATE
      },
      click_count: {
        type: Sequelize.INTEGER
      },
      file_url: {
        type: Sequelize.STRING
      },
      exm_status: {
        type: Sequelize.INTEGER
      },
      pub_username: {
        type: Sequelize.STRING
      },
      exm_username: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Docs');
  }
};