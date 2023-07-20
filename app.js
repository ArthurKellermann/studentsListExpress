import express from 'express';
import dotenv from 'dotenv';
import home from './src/routes/home';
import users from './src/routes/user';
import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users', users);
  }
}

export default new App().app;
