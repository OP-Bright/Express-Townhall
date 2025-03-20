const express = require('express')
const loggify = require('./loggify')
const app = express()
const port = 3000

// Middleware usage
app.use(loggify)


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// The listen method from the express is used to start the server.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
