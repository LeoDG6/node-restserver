import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import {router as userRoutes} from '../routes/usuarios.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        // Directorio Público
        this.app.use(express.static('public'));
    }

    routes() {
        // this.app.get('/api', (req, res) => {
        //     //res.send('Hola mundo')
        //     res.json({
        //         msg: 'get API'
        //     })
        //   });
          
        //   this.app.put('/api', (req, res) => {
        //     res.json({
        //         msg: 'put API'
        //     })
        //   });

        //   this.app.post('/api', (req, res) => {
        //     res.json({
        //         msg: 'post API'
        //     })
        //   });

        //   this.app.delete('/api', (req, res) => {
        //     res.json({
        //         msg: 'delete API'
        //     })
        //   });

        //   this.app.patch('/api', (req, res) => {
        //     res.json({
        //         msg: 'patch API'
        //     })
        //   });

        this.app.use('/api/usuarios', userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo', this.port);
          });
    }
}

export { Server };
