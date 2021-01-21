const app = require('../../app')
const supertest = require('supertest')
const { expect } = require('chai')

let server, req, res 

before(done => {
  server = app.listen(done)
  req = supertest.agent(server)
})

after(done => {
  server.close(done)
})

describe('GET /books', () => {
  beforeEach(async () => {
    res = await req.get('/books')
  });

  it('is expected to respond with status 200', () => {
    expect(res.status)
    .to.equal(200)
  });

  it('is expected to return an index of books', () => {
    const expectedResponse = { 
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
    expect(res.body)
    .to.eql(expectedResponse)
  });
});