import { Request, Response } from 'express'
import {Paciente as IPaciente} from '../types/IPaciente'
import Paciente from '../models/Paciente'

export const getPacientes = async (req: Request, res: Response): Promise<void> => {
  try {
    const pacientes: IPaciente[] = await Paciente.find()
    res.status(200).json(pacientes)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const addPaciente = async (req: Request, res: Response): Promise<void> => {
  try {
    const newPaciente = new Paciente(req.body)
    await newPaciente.save()
    res.status(201).json(newPaciente)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const removePaciente = async (req: Request, res: Response): Promise<void> => {
  try {
    const pacienteRemovido = await Paciente.findByIdAndDelete(req.params.id)
    res.status(200).json(pacienteRemovido)

  } catch (error) {
    console.log(error)
    throw error
  }
}

export const updatePaciente = async (req: Request, res: Response): Promise<void> => {
  try {
   const {
    params: { id },
    body,
    } = req

    const pacienteAtualizado: IPaciente | null = 
    await Paciente.findByIdAndUpdate({_id: id}, body,  { new: true })
    res.status(200).json({message: 'Paciente atualizado com sucesso', pacienteAtualizado})


  } catch (error) {
    console.log(error)
    throw error
  }
}

export default { getPacientes, addPaciente, removePaciente, updatePaciente }

