const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//add changes that needs to be pushed to test branch

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("test")
})