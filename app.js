const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/cloud', function (req, res) {
  res.send('Hello Monkey!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
