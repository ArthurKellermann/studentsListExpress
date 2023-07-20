import { Router } from 'express';
import user from '../controllers/UserController';

const router = new Router();

router.get('/', user.index);
router.get('/:id', user.showById);
router.post('/', user.store);
router.put('/:id', user.update);
router.delete('/:id', user.delete);

export default router;
