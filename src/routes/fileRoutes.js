import { Router } from 'express';
import file from '../controllers/FileController';
import upload from '../config/multer';

const router = new Router();

router.post('/', upload.single('fileName'), file.store);

export default router;
