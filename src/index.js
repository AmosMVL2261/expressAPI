// 1 Importaciones de componentes necesarios
const express = require('express');
// 2 Declaración de variables para levantar el servidor
const app = express();
const port = process.env.PORT || 3000;
// 3 Obtener los routes
const routerApi = require('./routes/main.controller');
// 4 Agregar middleware para uso de req.body
app.use(express.json());
//Root endpoint
app.get("/",(req,res)=>{
    res.send("Pokemon API by AmosMVL2261");
})

// 5 Levantar el servidor
app.listen(port, () => {
    console.log('Servidor express listening...');
});
// 6 Agregar el route a la app
routerApi(app);