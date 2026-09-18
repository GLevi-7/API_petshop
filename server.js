const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin: ['http://localhost:5500', 'http://127.0.0.1:5500']}));

app.use(express.json());

app.post('/alunos', (req, res) => {
    const { nome, url } = req.body;

    res.json({nome: nome, url: url});
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});