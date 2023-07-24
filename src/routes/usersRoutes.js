import { Router } from 'express';
import user from '../controllers/UserController';
import checkAuth from '../middlewares/checkAuth';

const router = new Router();

// router.get('/', user.index);
// router.get('/:id', user.showById);

router.post('/', user.register);
router.put('/', checkAuth, user.update);
router.delete('/', checkAuth, user.delete);

export default router;
