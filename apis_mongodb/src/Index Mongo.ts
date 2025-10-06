import *as express from 'express'
import mongoose = require("mongoose")
import rotas from './routes/index'

const servidor: express.Application = express()

servidor.use(express.json())
servidor.use(express.urlencoded({ extended: false }))
servidor.use(rotas)

const porta = 3003
const uriDB: string = 'mongodb: //localhost:27017/notas'

mongoose.connect( {
  useNewUrlParser: true
} as any) // força ignorar a tipagem
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar:', err));

