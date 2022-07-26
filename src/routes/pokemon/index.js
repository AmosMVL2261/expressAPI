/**
* Capa route, utilizada para el mapeo de los path
*/
const express = require('express');
const pokemonRouter = express.Router();
const pokemonServices = require('../../services/pokemon/index');

const pokemonService = new pokemonServices();

/**
* Páginas de prueba
* http://localhost:3000/pokemon
* http://localhost:3000/pokemon/491
* http://localhost:3000/pokemon/?numDex=2&name="Darkrai"&type1="Dark"
*/

// Query Params: Filtrar información
// %20 => espacio en blanco
// %22 => comillas dobles
pokemonRouter.get('/', async (req, res) => {
    // 6.1.1: Leer la request
    const { price } = req.query;
    try {
        // 6.1.2: Acceder a la capa service para tener una respuesta
        const allPokemon = await pokemonService.findAll(price);
        res.status(200).json(allPokemon);
    } catch(error) {
        // 6.1.3: Si hay un error al acceder al services respondemos un error generico
        res.status(404).json( { message: 'no hay datos'} );
    }
    
});

// Request Param: Son utilizados para ejecutar operaciones sobre un elemento especifico
pokemonRouter.get('/:numDex', async (req, res) => {
    const { numDex } = req.params;
    try {
        const foundedPokemon = await pokemonService.findOne(numDex);
        console.log(foundedPokemon);
        res.status(200).send( { message: 'encontrado!', foundedPokemon } );
    } catch {
        res.status(404).send({ message: 'ese id no existe' } );
    }
});

module.exports = pokemonRouter;
