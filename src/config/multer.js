import multer from 'multer';
import { extname, resolve } from 'path';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}${extname(file.originalname)}`);
  },

});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg'
    || file.mimetype === 'image/png'
    || file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else { cb(new multer.MulterError('Invalid file type')); }
};

export default {
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
};
