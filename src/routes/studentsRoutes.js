import { Router } from 'express';
import student from '../controllers/StudentController';
import checkAuth from '../middlewares/checKAuth';

const router = new Router();

router.get('/', student.index);
router.post('/', checkAuth, student.store);
router.get('/:id', student.showById);
router.put('/:id', checkAuth, student.update);
router.delete('/:id', checkAuth, student.delete);
export default router;
