const express = require('express')
const page  = require('./routes/page')
const app = express()
const port = 5941

app.use('/', page)
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})


module.exports = app;