import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('fileName');

class FileController {
  async store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.code });
      }
      return res.status(200).json(req.file);
    });
  }
}

export default new FileController();
