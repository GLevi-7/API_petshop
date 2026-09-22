const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {

    const { nomeTutor, nomePet, raca, genero, peso, idade } = req.body;

    if (!nomeTutor || !nomePet || !raca || !genero || peso === undefined || idade === undefined) {
        return res.status(400).json({ 
            message: 'Todos os campos são obrigatórios.' 
        });
    }

    console.log('Novo pet cadastrado recebido:', {
        nomeTutor,
        nomePet,
        raca,
        genero,
        peso,
        idade
    });

    return res.status(201).json({
        message: 'Cadastro do pet realizado com sucesso!',
        usuario: {
            nomeTutor,
            nomePet,
            raca,
            genero,
            peso,
            idade
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} (http://localhost:${PORT})`);
});