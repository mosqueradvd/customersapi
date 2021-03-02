const express = require('express')
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(require('../src/routes/index'))

app.listen(3000)
console.log('Server listening on port http://localhost:3000')
