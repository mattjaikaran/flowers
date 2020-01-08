const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const posts = require('./routes')
const fetch = require('node-fetch')
const app = express()

// middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', (req, res) => {
  const url = 'http://jsonplaceholder.typicode.com/posts'
  let settings = { method: 'Get' }
  fetch(url, settings)
    .then(res => res.json())
    .then((json) => res.send(json))
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on Port ${port}`))
