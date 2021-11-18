const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())


const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hur ! reload ney na ");
});

const myUsers = [];

app.get('/users', (req,res) => {
    const search = req.query.search

    if(search) {
        const searchResult = myUsers.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    } else {
        res.send(myUsers)
    }
})

const fruits = ['mangoes, banan, jackfruit, lichi, grapes']

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = myUsers.length;
  myUsers.push(newUser)
  res.json(newUser)
})

// app.get("/users", (req, res) => {
//   res.send(myUsers);
// });

app.get('/users/:id', (req, res) => {
    res.send(myUsers[req.params.id - 1])
    console.log(req.params.id);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('fazli is talk')
})

app.listen(port, () => {
  console.log("listening to port", port);
});


