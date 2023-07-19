import { Router } from 'express';
import home from './controllers/Home';

const routes = new Router();

routes.get('/', home.index);

export default routes;
