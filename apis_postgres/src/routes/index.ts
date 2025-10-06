import { Router } from 'express'
import { getPacientes, addPaciente, removePaciente, atualizaPaciente } from '../controllers/PacienteController'

import { get } from 'http'

const router: Router = Router()

router.get("/paciente", getPacientes)
router.post("/paciente", addPaciente)
router.post("/paciente/:rg", removePaciente)
router.post("/paciente/:rg",atualizaPaciente)



export default router

