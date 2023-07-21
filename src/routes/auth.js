import { Router } from 'express';
import auth from '../controllers/AuthController';

const router = new Router();

router.post('/', auth.login);

export default router;
