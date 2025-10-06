import { Request, Response } from 'express'
import {pool} from '../database'
import { QueryResult } from 'pg';

 const getPacientes = async (req: Request, res: Response): Promise<Response> => {
  try {
   const result : QueryResult = await pool.query('SELECT * FROM paciente')  
   return res.status(200).json(result.rows) 

  } 
  catch (error) {
  console.log(error)
    return res.status (500).json('Erro Interno do sevidor ')

  }
}


const addPaciente = async (req: Request, res: Response): Promise<Response> => {
  try {
    let {nome, rg, peso, altura} = req.body
    let resposta: QueryResult = await pool.query('INSERT INTO paciente (nome, rg, peso, idade, altura) VALUES ($1, $2, $3, $4, $5)',
       [nome, rg, peso, IdleDeadline, altura])
    return res.json({
      'mensagem': 'Paciente adicionado com sucesso',
    
    })


  }
  catch (error) {
    console.log(error)
    return res.status (500).json('Erro Interno do sevidor ')


  }

}

const removePaciente = async (req: Request, res: Response): Promise<Response> => {
  try {
  let rg  = parseInt(req.params.rg)
await pool.query ('DELETE FROM paciente WHERE rg = $1', [rg])
return res.json ('Paciente removido com sucesso' )

}
catch (error) {
  console.log(error)
  return res.status (500).json('Erro Interno do sevidor ')
}
}

const atualizaPaciente = async (req: Request, res: Response): Promise<Response> => {
  try {
  let rg  = parseInt(req.params.rg)
  let {nome, peso, idade, altura} = req.body
await pool.query ('UPDATE paciente SET nome = $1, peso = $2, idade = $3, altura = $4 WHERE rg = $5',
[nome, peso, idade, altura, rg])
return res.json ('Paciente atualizado com sucesso' )


}
catch (error) {
  console.log(error)
  return res.status (500).json('Erro Interno do sevidor ')
}
}

export {getPacientes, addPaciente, removePaciente, atualizaPaciente}   