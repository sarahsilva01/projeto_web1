import { Router,Request,Response } from "express"
const router: Router = Router()

router.get("/",(req:Request,res:Response)=>{
    res.send('Seja bem vindo a nossa aplicacao teste')

})

router.get('/: nome', (req:Request,res:Response)=>{

    let { nome } = req.params
    res.send(`Seja bem vindo ${nome} a nossa aplicacao teste`)

})

export const MensagemController: Router = router