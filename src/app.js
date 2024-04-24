// eslint-disable-next-line import/no-extraneous-dependencies
import { resolve } from 'path';
import dotenv from 'dotenv';
dotenv.config();
import './database';

import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import fotoRoutes from './routes/fotoRoutes';

// const whiteList = [
//   'http://localhost:3000',
//   'http://localhost:3001',
//   'http://localhost:3002',
//   'http://localhost:3003',
// ];

// const corsOptions = {
//   origin(origin, callback) {
//     if (whiteList.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     }
//     callback(new Error('Not allowed by CORS'));
//   },

// };

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();

    this.server = http.createServer(this.app);
    this.io = new Server(this.server);
    this.socketEvents();
  }

  middlewares() {
    // this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors({ origin: '*' }));
    this.app.use('/images/', (req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
    }, express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      console.log('A client connected.', socket.id);

      socket.on('disconnect', () => {
        console.log('A client disconnected.');
      });

      socket.on('error', (error) => {
        console.error('Erro de conexão:', error);
      });
    });
  }

  start(port) {
    this.server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

export default App;
