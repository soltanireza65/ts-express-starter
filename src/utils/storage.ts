import multer from 'multer';
import path from 'path';

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname));
  },
});

export const photoUpload = multer({ storage: storage }).single('photo');