class Pokemon {
    constructor(){
        this.pokedex = [];
        this.generatePokemon();
    }

    generatePokemon(){
        this.pokedex = [
            //{ id: 1, numberDex: 1, name: "", type1: "", type2: "" },
            { id: 2, numDex: 491, name: "Darkrai", type1: "Dark", type2: null },
            { id: 3, numDex: 492, name: "Shaymin", type1: "Grass", type2: null },
            { id: 4, numDex: 492, name: "Shaymin", type1: "Grass", type2: "Flying" },
            { id: 5, numDex: 493, name: "Arceus", type1: "Normal", type2: null },
        ]
    }


    createEntry(newEntry) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokedex.findIndex(pokemon => pokemon.id === parseInt(newEntry.id));
                if (indexFounded === -1){
                    // 6.1.5 Logica de negocio
                    this.pokedex.push(newEntry);
                    // 6.1.6 En caso de exito usar resolve();
                    resolve();
                }else{
                    reject(new Error("El ID del Pokemon no es posible ocuparlo"));
                    //reject( { message: "El ID del Pokemon no es posible ocuparlo"} );
                }

            }, 1000);
        });
    }

    findAll() {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {                
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
                    //reject( { message: "Pokemon no encontrado"} );
                }
            }, 1000);
        });
    }

    editPartial(id, body) {
        console.log('service', id)
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
                    //reject( { message: "Pokemon no encontrado"} );
                }

            }, 1000);
        });
    }

}

module.exports = Pokemon;