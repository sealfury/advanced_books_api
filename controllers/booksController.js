const models = require("../models");

const booksController = {
  async index(req, res) {
    const collection = await models.Book.findAll({
      include: [
        {
          model: models.Author,
          as: "author",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: ["title"],
    });
    res.json({ books: collection });
  },
};

module.exports = booksController;
