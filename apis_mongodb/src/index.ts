import *as express from 'express'
import rotas from './routes/index'
import { Pool } from 'pg';

const servidor = express();
const pool = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'nome_do_banco',
  password: 'sua_senha',
  port: 5432
});

// Middlewares
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: false }));

// Rotas
servidor.use(rotas);

// Conexão com o banco
pool.connect((err, client, done) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
    return;
  }

  console.log('Conectado ao PostgreSQL com sucesso!');
  done(); // libera o cliente de volta ao pool
});

// Iniciar o servidor
servidor.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
