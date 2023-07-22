import express from 'express';
import dotenv from 'dotenv';
import home from './src/routes/homeRoutes';
import user from './src/routes/usersRoutes';
import auth from './src/routes/authRoutes';
import student from './src/routes/studentsRoutes';
import file from './src/routes/fileRoutes';
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
    this.app.use('/users', user);
    this.app.use('/auth', auth);
    this.app.use('/students', student);
    this.app.use('/file', file);
  }
}

export default new App().app;
