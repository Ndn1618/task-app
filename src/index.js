const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 4001

app.post('/users', (req, res) => {
  const user = new User(req.body)

  user.save().then(() => {
    res.status(201).send(user)
  }).catch((error) => {
    res.status(400).send(error)
  })
})

app.get('/users', (_, res) => {
  User.find({}).then((users) => {
    res.send(users)
  }).catch((e) => {
    res.status(500).send()
  })
})

app.post('/tasks', (req, res) => {
  const task = new Task(req.body)

  task.save().then(() => {
    res.status(201).send(task)
  }).catch((error) => {
    res.status(400).send(error)
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})