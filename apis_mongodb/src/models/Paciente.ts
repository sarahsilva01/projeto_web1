import {Paciente as IPaciente} from '../types/IPaciente'
import {model, Schema} from 'mongoose'

const PacienteSchema: Schema = new Schema(

    {
        nome: {
            type: String,
            required: true,

        },

        rg: {
            type: String,
            required: true,

        },

        peso: {
            type: Number,
            required: true,

        },

        altura: {
            type: Number,
            required: true,

        },

        idade: {
            type: Number,
            required: true,
        }

    }
)

export default model<IPaciente>('Paciente', PacienteSchema)