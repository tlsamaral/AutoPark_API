import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { user_id } = req.body;
        const foto = await Foto.create({ originalname, filename, user_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }
    });
  }
}

export default new FotoController();
