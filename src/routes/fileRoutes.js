import { Router } from 'express';
import checkAuth from '../middlewares/checKAuth';
import file from '../controllers/FileController';

const router = new Router();

router.post('/', checkAuth, file.store);

export default router;
