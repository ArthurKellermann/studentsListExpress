import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { resolve } from 'path';
import home from './src/routes/homeRoutes';
import user from './src/routes/usersRoutes';
import auth from './src/routes/authRoutes';
import student from './src/routes/studentsRoutes';
import file from './src/routes/fileRoutes';
import './src/database';

import swaggerDocs from './src/swagger.json';

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
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users', user);
    this.app.use('/auth', auth);
    this.app.use('/students', student);
    this.app.use('/file', file);
    this.app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }
}

export default new App().app;
