# Pokemon API

Api basada en la cuarta generación de Pokemon. 

Contiene los datos basicos de cada pokemon:
- Numero de entrada en pokedex nacional
- Nombre
- Tipos
- Diferentes formas según sea el caso

### Herramientas necesarias

- Node js
- Visual Studio Code
- Cuenta de usuario en Postman

## Forma de despliegue:

1. Descargar el proyecto o clonar el repositorio
2. Abrir el proyecto con visual studio code
3. Importar las dos colecciones de postman contenidas en la carpeta ./assets/ en un ambiente de postman

### Local

5. Abrir una terminal en Visual Studio Code
6. Instalar las dependencias del package.json con el comando: 
`nmp install`
7. Levantar el servidor con el comando: 
`npm run dev`
8. Probar la ejecución de los 5 verbos en Postman con las diferentes request disponibles en la colección localRequest

### Heroku

5. Probar la ejecución de los 5 verbos en Postman con las diferentes request disponibles en la colección herokuRequest debido a que ya esta en linea la API