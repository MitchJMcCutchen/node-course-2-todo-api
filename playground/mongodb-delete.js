// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //Delete Many
//   db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
//       console.log(res);
//   });

  //Delete One
//   db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
//       console.log(res);
//   });

  //Find One and Delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // });
  
//   db.close();
});