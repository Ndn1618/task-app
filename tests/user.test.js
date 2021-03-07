const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
  await request(app).post('/users').send({
    name: 'Ziyoda',
    email: 'ziyodanorqobulova@gmail.com',
    password: 'YiiiHooooo!'
  }).expect(201)
})