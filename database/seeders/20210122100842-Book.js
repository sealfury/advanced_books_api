"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert( 
      "Authors",
      [
        {
          name: "Ariana Grande",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )

    const authors = await queryInterface.sequelize.query(
      'SELECT id from "Authors"'
    )

    const authorsRows = authors[0]

    await queryInterface.bulkInsert("Books", [
      {
        title: "Learn NodeJS",
        createdAt: new Date(),
        updatedAt: new Date(),
        authorID = authorsRows[0].id,
      },
      {
        title: "Learn Sequelize",
        createdAt: new Date(),
        updatedAt: new Date(),
        authorID: authorsRows[0].id,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
    await queryInterface.bulkDelete('Authors', null, {})
  },
};
