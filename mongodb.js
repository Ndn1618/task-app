const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: "Matluba",
  //   surname: "Saydaliyeva",
  //   relation: "Grandmother",
  // })

  db.collection('tasks').insertMany([
    {
      description: 'Clean the house',
      completed: true,
    },
    {
      description: 'Take apples from bazaar',
      completed: false,
    },
    {
      description: 'Read Javascript book',
      completed: true,
    },
  ])
})