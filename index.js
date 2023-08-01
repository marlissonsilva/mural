const express = require('express')
const path = require('path')
const port = 3030
const cors = require('cors')
const apiRoute = require('./routes/api')
const app = express()

app.use(cors())
app.use('/api',apiRoute)
// app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} acesse  http://localhost:${port}/`)
})
// conn.end()