import { Router } from 'express';
import user from '../controllers/UserController';
import checKAuth from '../middlewares/checKAuth';

const router = new Router();

router.get('/', user.index);
// router.get('/:id', user.showById);

router.post('/', user.register);
router.put('/', checKAuth, user.update);
router.delete('/', checKAuth, user.delete);

export default router;
