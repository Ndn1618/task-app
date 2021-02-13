const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  db.collection('users').findOne({ name: 'Matluba' }, (error, user) => {
    console.log(user)
  })

  db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
    console.log(tasks)
  })
})