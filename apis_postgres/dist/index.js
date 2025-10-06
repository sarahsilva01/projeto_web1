"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./routes/index");
const servidor = express();
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: false }));
servidor.use(index_1.default);
servidor.listen(3003, () => {
    console.log(`Servidor MongoDB executando na porta 3003`);
});
