const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { response } = require('express');
const { ValidationError } = require('sequelize');

app.use(cors());

app.use(express.json());

// ----------------------------------------------------------------------------

// Teste da API

app.get("/", async (req, res) => {
    res.send("Funcionando!");
});

app.listen(port, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000");
});

// ----------------------------------------------------------------------------