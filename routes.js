const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req)
  console.log(res)
})

router.get('/post/:title', (req, res) => {
  console.log(req)
  console.log(res)
})
