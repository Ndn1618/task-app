const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 4001

app.post('/users', (req, res) => {
  const user = new User(req.body)

  user.save().then(() => {
    res.status(201).send(user)
  }).catch((error) => {
    res.status(401).send(error)
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})