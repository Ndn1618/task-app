const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: false,
  useFindAndModify: false,
})

// mongoose.set('bufferCommands', false);