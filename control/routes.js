/**
 * control/routes.js
 * Arquivo de rotas do aplicativo.
 */

// Carrega o módulo "express.js".
const express = require('express');

// Cria um roteamento "Express".
const router = express.Router();

// Extrai os dados do cabeçalho da requisição usando "JSON".
const bodyParser = require('body-parser').json();

// Rota raiz emite mensagem de erro.
router.get("/", (req, res) => {
    res.json({
        status: "error",
        message: "Bad request"
    });
});

// Carrega o controller de 'obras'.
const obrasControl = require('./obrasControl');
// Rotas para as requisições de 'obras'.
router.get("/obras/", obrasControl.getAll);
router.get("/obras/:id", obrasControl.getOne);
router.post("/obras/", bodyParser, obrasControl.post);
router.put("/obras/:id", bodyParser, obrasControl.put);
router.delete("/obras/:id", obrasControl.delete);

// Exporta o módulo.
module.exports = router;

