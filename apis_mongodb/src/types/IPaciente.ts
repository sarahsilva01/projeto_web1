import { Document } from "mongoose"
export interface Paciente extends Document {

    nome: string;
    rg: string;
    idade: number;
    peso: number;
    altura: number;

}