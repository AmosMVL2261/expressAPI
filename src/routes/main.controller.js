const express = require('express');
const pokemonRouter = require("./pokemon/index");

const routerApi = (app) => {
    // 6.1 Puntos de entrada de la API
    app.use('/pokemon', pokemonRouter);
    // router.use('/customers', customersRouter);
};

//Exportamos el controller como un modulo
module.exports = routerApi;