
const booksController = {
  index(req, res) {
    const collection = {
      books: [
        {
          title: 'Fun With Node', 
          author: 'T. Ochman'
        },
        {
          title: 'Fun With Node Pt II', 
          author: 'T. Ochman'
        }
      ] 
    }
    res.json(collection)
  }
}

module.exports = booksController