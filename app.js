// import express from 'express';
// import 'dotenv/config';
import {Server} from "./models/server.js";

// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hola mundo')
//   });

//   app.listen(process.env.PORT, () => {
//     console.log('Servidor corriendo', process.env.PORT);
//   });

const server = new Server();

server.listen();


/*
    Se instalan los paquetes:
    PS D:\Node\08-rest-server> npm i express dotenv
    PS D:\Node\08-rest-server> npm i cors
*/