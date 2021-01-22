"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Books", //source model
      "authorID", //column name
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Authors",
          as: "author",
          key: "id",
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Books", "authorID");
  },
};
