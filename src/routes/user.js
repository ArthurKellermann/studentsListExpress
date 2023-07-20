import { Router } from 'express';
// eslint-disable-next-line no-unused-vars
import user from '../controllers/UserController';

const router = new Router();

router.post('/', user.store);

export default router;
