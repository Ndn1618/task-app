const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('tasks').updateOne({
  //   _id: new ObjectID("6027e5fdcdf6ff033c33cc9c")
  // }, {
  //   $set: {
  //     description: 'Sleep well'
  //   }
  // }).then((result) => {
  //   console.log('Result', result)
  // }).catch((error) => {
  //   console.log('Error', error)
  // })

  db.collection('tasks').updateMany({
    completed: true
  }, {
    $set: {
      completed: false
    }
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
})