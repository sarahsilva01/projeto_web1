import *as express from 'express'
import *as bodyParser from 'body-parser'
import { MensagemController } from './mensagem.controller'

const servidor :express.Application = express()
servidor.use(bodyParser.json())
servidor.use(bodyParser.urlencoded({ extended: true }))
servidor.use('/mensagem',MensagemController)

servidor.listen(3000,()=>{
    console.log('Servidor iniciado na porta 3000')

})