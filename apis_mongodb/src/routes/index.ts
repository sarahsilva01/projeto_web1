import { Router } from 'express'
import { getPacientes, addPaciente, removePaciente, updatePaciente } from '../controllers/PacienteController'
import { get } from 'http'

const router: Router = Router()

router.get("/add-medico", getPacientes)

router.post("/add-paciente", addPaciente)

router.delete("/remove-paciente/:id", removePaciente)

router.put("/atualiza-paciente/:id",updatePaciente)


export default router