const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test', (req, res) => {
    res.send('Hello test World!')
  })

  app.get('/test123', (req, res) => {
    res.send('Hello test123 World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})