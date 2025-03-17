const express = require('express')
const loggify = require('./loggify')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Middleware usage
app.use(loggify)
app.use(bodyParser.json())

let name = "Guest"

// Routes
app.get('/', (req, res) => {
  res.send('Hello ' + name + "!")
})

app.get('/dangerzone', (req, res) => {
  res.send('WATCH OUT!')
})

app.post("/name", (req, res) => {
  name = req.body.name
  res.send(name + " is the current user!")
});

app.delete("/name", (req, res) => {
  name = "Guest"
  res.send("User has been set back to Guest!")
});

// The listen method from the express is used to start the server.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
