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

// const bcrypt = require('bcryptjs')
// const myFunction = async () => {
//   const password = 'Red12345!'
//   const hashedPassword = await bcrypt.hash(password, 8)

//   const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
// }