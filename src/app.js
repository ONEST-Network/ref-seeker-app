const express = require('express')
const helmet = require('helmet')
const seekerController = require('./controllers/seekerController')
const app = express()
const port = 3000

app.use(helmet())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post("/v1/seeker/create", seekerController.createSeeker)


// Create seeker

// Read  seeker

// Generate OTP 

// Seeker Login


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})