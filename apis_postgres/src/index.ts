import *as express from 'express'
import rotas from './routes/index'


const servidor: express.Application = express()

servidor.use(express.json())
servidor.use(express.urlencoded({ extended: false }))
servidor.use(rotas)


 servidor.listen(3003, () => {
        console.log(`Servidor MongoDB executando na porta 3003`)
    })