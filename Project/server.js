import express from 'express'
import bodyParser from 'body-parser'
import clienteRouter from './routers/cliente.routes.js'

const app = express()
const port = 3000

app.use(express.static('frontend'))

// Converter em json
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/cliente', clienteRouter)

// Sobre
app.get('/sobre', (req, res) => {
    res.send('sobre o sistema')
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})

