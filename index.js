const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/prod', (req, res) => {
    res.send('Hello prod World!')
  })


//add changes that needs to be pushed to test branch
  app.get('/test123', (req, res) => {
    res.send('Hello test123 World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("test")
})