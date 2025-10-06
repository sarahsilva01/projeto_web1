"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizaPaciente = exports.removePaciente = exports.addPaciente = exports.getPacientes = void 0;
const database_1 = require("../database");
const getPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.pool.query('SELECT * FROM paciente');
        return res.status(200).json(result.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Erro Interno do sevidor ');
    }
});
exports.getPacientes = getPacientes;
const addPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { nome, rg, peso, altura } = req.body;
        let resposta = yield database_1.pool.query('INSERT INTO paciente (nome, rg, peso, idade, altura) VALUES ($1, $2, $3, $4, $5)', [nome, rg, peso, IdleDeadline, altura]);
        return res.json({
            'mensagem': 'Paciente adicionado com sucesso',
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Erro Interno do sevidor ');
    }
});
exports.addPaciente = addPaciente;
const removePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let rg = parseInt(req.params.rg);
        yield database_1.pool.query('DELETE FROM paciente WHERE rg = $1', [rg]);
        return res.json('Paciente removido com sucesso');
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Erro Interno do sevidor ');
    }
});
exports.removePaciente = removePaciente;
const atualizaPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let rg = parseInt(req.params.rg);
        let { nome, peso, idade, altura } = req.body;
        yield database_1.pool.query('UPDATE paciente SET nome = $1, peso = $2, idade = $3, altura = $4 WHERE rg = $5', [nome, peso, idade, altura, rg]);
        return res.json('Paciente atualizado com sucesso');
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Erro Interno do sevidor ');
    }
});
exports.atualizaPaciente = atualizaPaciente;
