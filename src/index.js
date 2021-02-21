const express = require('express')
require('./db/mongoose')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

const PORT = process.env.PORT || 4001

const app = express()
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('6031f1e6835fd13ce09ef528')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('6031f1a7835fd13ce09ef526')
  await user.populate('tasks').execPopulate()

  console.log(user.tasks)
}

main()