const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let users = [
  {
    id: 0,
    name: 'Rachel Green',
    age: 30,
    email: 'rachel@friends.com'
  },
  {
    id: 1,
    name: 'Joey Tribbiani',
    age: 34,
    email: 'joey@friends.com'
  },
  {
    id: 2,
    name: 'Chandler Bing',
    age: 32,
    email: 'chandler@friends.com'
  },
  {
    id: 3,
    name: 'Ross Geller',
    age: 32,
    email: 'ross@friends.com'
  },
  {
    id: 5,
    name: 'Monica Bing',
    age: 31,
    email: 'monica@friends.com'
  },
  {
    id: 6,
    name: 'Phoebe Buffay-Hannigan',
    age: 30,
    email: 'phoebe@friends.com'
  }
];

app.use(bodyParser.json());

app.use(cors());

let nextId = 7;

function getNextId() {
  return nextId++;
}

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'lambda' && password === 'school') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.post('/api/logout', authenticator, (req, res) => {
  req.loggedIn = false;
  res.status(200).json({
    payload: token
  });
});

app.get('/api/users', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(users);
  }, 1000);
});

app.get('/api/users/:id', authenticator, (req, res) => {
  const user = users.find(f => f.id == req.params.id);

  if (product) {
    res.status(200).json(user);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/users', authenticator, (req, res) => {
  const product = { id: getNextId(), ...req.body };

  users = [...users, user];

  res.send(users);
});

app.get('/api/', (req, res) => {
  res.status(200).json({status: "served"});
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
