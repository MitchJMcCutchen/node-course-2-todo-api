// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate(
//       { _id: new ObjectID('5ad7a1c583d8045cfca6065c') },
//       {
//           $set: {
//               complete: true
//           }
//       },
//       { returnOriginal: false }
//   ).then((res) => {
//       console.log(res);
//   });

  db.collection('Users').findOneAndUpdate(
      { _id: new ObjectID('5aced1137a949c8fe1c658da') },
      {
          $set: {
              name: 'Jen'
          },
          $inc: {
              age: 1
          }
      }
    )

//   db.close();
});