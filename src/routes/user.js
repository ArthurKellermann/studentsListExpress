import { Router } from 'express';
import user from '../controllers/UserController';
import checKAuth from '../middlewares/checKAuth';

const router = new Router();

router.get('/', checKAuth, user.index);
router.get('/:id', user.showById);
router.post('/', user.store);
router.put('/:id', user.update);
router.delete('/:id', user.delete);

export default router;
