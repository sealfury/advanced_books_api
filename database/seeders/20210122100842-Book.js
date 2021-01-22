"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Books", [
      {
        title: "Learn NodeJS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Learn Sequelize",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
