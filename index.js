const express = require('express')
const app = express()
const port = 5941

app.get('/', (req, res) => {
  res.json({message:"Hello this sample project"})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
