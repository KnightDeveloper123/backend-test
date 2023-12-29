const express = require('express')
const page  = require('./routes/page')
const app = express()
const port = 5941
var cors = require('cors')

app.use(cors())

app.use('/page/', page)
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})


module.exports = app;