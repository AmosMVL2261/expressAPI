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
*
* Objetos de prueba para el verbo PUT
* { "id": 6, "numDex": 494, "name": "Victini", "type1": "Psychic", "type2": "Fire" }
* { "id": 7, "numDex": 495, "name": "Snivy", "type1": "Grass", "type2": null }
*/


// Obtener todos los pokemon: GET 
// Query Params: Filtrar información
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

// Obtener un pokemon: GET 
// Request Param: Son utilizados para ejecutar operaciones sobre un elemento especifico
pokemonRouter.get('/:numDex', async (req, res) => {
    const { numDex } = req.params;
    try {
        const foundedPokemon = await pokemonService.findOne(numDex);
        res.status(200).send( { message: 'encontrado!', foundedPokemon } );
    } catch (error){
        res.status(404).send({ message: 'ese id no existe', error: error.message } );
    }
});

// Agregar un pokemon: POST
pokemonRouter.post('/', async (req, res) => {
    const newEntry = req.body;
    try {
        await pokemonService.createEntry(newEntry);
        res.status(201).send();
    } catch(error) {
        res.status(500).send( { message: 'intenten más tarde', error: error.message } );
    }
});

// PARTIAL EDITION: PATCH
pokemonRouter.patch('/:id', async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        await pokemonService.editPartial(id, body);
        res.status(200).send( { message: 'modificacion patch exitosa!', id } );
    } catch(error) {
        res.status(404).send({ message: 'ese id no existe', error: error.message } );
    }
});

// PARTIAL EDITION: PUT
pokemonRouter.put('/:id', async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        await pokemonService.editComplete(id, body);
        res.status(200).send( { message: 'modificacion put exitosa!', id } );
    } catch(error) {
        res.status(404).send({ message: 'ese id no existe', error: error.message } );
    }
});

// DELETE: DELETE
pokemonRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pokemonService.delete(id);
        res.status(200).send( { message: 'eliminacion exitosa!' } );
    } catch (error){
        res.status(404).send({ message: 'ese id no existe', error: error.message } );
    }
});


//Exportamos los verbos como un modulo
module.exports = pokemonRouter;
