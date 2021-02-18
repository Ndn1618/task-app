const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 4001

app.post('/users', async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

app.get('/users', async (_, res) => {

  try {
    const users = User.find({})
    res.send(users)
  } catch (e) {
    res.status(500).send()
  }
})

app.get('/users/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const user = User.findById(_id)

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (e) {
    res.status(500).send()
  }
})

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body)

  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

app.get('/tasks', async (_, res) => {
  try {
    const tasks = Task.find({})
    res.send(tasks)
  } catch (e) {
    res.status(500).send()
  }
})

app.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const task = Task.findById(_id)
    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})