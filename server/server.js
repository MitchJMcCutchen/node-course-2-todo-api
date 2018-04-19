var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({message: 'ID is invalid'});
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send({message: 'No todo with that ID was found'});
    }
    res.send(todo);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({message: 'ID is invalid'});
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      res.status(404).send({message: 'No todo with that ID was found'});
    }
    res.send(todo);
  }, (err) => {
    res.status(400).send(err);
  }).catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};