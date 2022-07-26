class Pokemon {
    constructor(){
        this.pokedex = [];
        this.generatePokemon();
    }

    generatePokemon(){
        this.pokedex = [
            //{ id: 1, numDex: 1, name: "", type1: "", type2: "" },
            { id: 1, numDex: 387, name: "Turtwig", type1: "Grass", type2: null },
            { id: 2, numDex: 388, name: "Grotle", type1: "Grass", type2: null },
            { id: 3, numDex: 389, name: "Torterra", type1: "Grass", type2: "Ground" },
            { id: 4, numDex: 390, name: "Chimchar", type1: "Fire", type2: null },
            { id: 5, numDex: 391, name: "Monferno", type1: "Fire", type2: "Fighting" },
            { id: 6, numDex: 392, name: "Infernape", type1: "Fire", type2: "Fighting" },
            { id: 7, numDex: 393, name: "Piplup", type1: "Water", type2: null },
            { id: 8, numDex: 394, name: "Prinplup", type1: "Water", type2: null },
            { id: 9, numDex: 395, name: "Empoleon", type1: "Water", type2: "Steel" },
            { id: 10, numDex: 491, name: "Darkrai", type1: "Dark", type2: null },
            { id: 11, numDex: 492, name: "Shaymin", type1: "Grass", type2: null },
            { id: 12, numDex: 492, name: "Shaymin", type1: "Grass", type2: "Flying" },
            { id: 13, numDex: 493, name: "Arceus", type1: "Normal", type2: null },
        ]
    }


    createEntry(newEntry) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokedex.findIndex(pokemon => pokemon.id === parseInt(newEntry.id));
                // 6.1.5 Logica de negocio
                if (indexFounded === -1){
                    // 6.1.6 En caso de exito usar resolve();
                    this.pokedex.push(newEntry);
                    resolve();
                }else{
                    // 6.1.6 En caso de fracaso por no poder agregar el pokemon usar reject() con el mensaje respectivos;
                    reject(new Error("El ID del Pokemon no es posible ocuparlo de nuevo"));
                    //reject( { message: "El ID del Pokemon no es posible ocuparlo"} );
                }

            }, 1000);
        });
    }

    findAll() {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {       
                // 6.1.5 En caso de exito usar resolve();         
                resolve(this.pokedex);
            }, 1000);
        });
    }

    findOne(numDex) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //const pokemon = this.pokedex.find(pokemon => pokemon.numDex === parseInt(numDex));
                const pokemon = this.pokedex.filter(pokemon => pokemon.numDex === parseInt(numDex));
                //Si el pokemon solo tiene una forma, regresa el pokemon como objeto
                if (pokemon.length===1) {
                    resolve(pokemon[0]);
                //Si el pokemon tiene mas de una forma, regresa un arreglo con todas las formas del pokemon
                }else if(pokemon.length>1){
                    resolve(pokemon);
                }else{
                    reject(new Error("Pokemon no encontrado"));
                }
            }, 1000);
        });
    }

    editPartial(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokedex.findIndex(pokemon => pokemon.id === parseInt(id));
                if (indexFounded !== -1) {
                    let pokedexCopy = [ ...this.pokedex ];
                    const newBody = this.pokedex[indexFounded];
                    pokedexCopy[indexFounded] = { ...newBody, ...body };
                    this.pokedex = [ ...pokedexCopy ];
                    resolve();
                }else{
                    reject(new Error("Pokemon no encontrado"));
                }

            }, 1000);
        });
    }

    editComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokedex.findIndex(pokemon => pokemon.id === parseInt(id));
                if (indexFounded !== -1) {
                    let pokedexCopy = [ ...this.pokedex ];
                    const newBody = this.pokedex[indexFounded];
                    pokedexCopy[indexFounded] = { ...newBody, ...body };
                    this.pokedex = [ ...pokedexCopy ];
                    resolve();
                }else{
                    reject(new Error("Pokemon no encontrado"));
                }

            }, 1000);
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokedex.findIndex(pokemon => pokemon.id === parseInt(id));
                if (indexFounded !== -1) {
                    const pokedexCopy = [ ...this.pokedex ];
                    pokedexCopy.splice(indexFounded, 1);
                    this.pokedex = [ ...pokedexCopy ];
                    resolve();
                }else{
                    reject(new Error("Pokemon no encontrado"));
                }
            }, 1000);
        });
    }

}

//Exportamos los verbos como un modulo
module.exports = Pokemon;