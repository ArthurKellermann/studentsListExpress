import { Router } from 'express';
import home from '../controllers/HomeController';

const router = new Router();

router.get('/', home.index);

export default router;
