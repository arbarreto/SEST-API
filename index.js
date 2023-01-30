const express = require('express')
const routes = require('./src/routes/routes.js')
const cors = require('cors');

const app = express()
const port = 3000

app.use(cors({ origin: '*' }));

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app