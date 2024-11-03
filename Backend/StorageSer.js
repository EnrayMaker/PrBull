const multer = require("multer");
const fs = require("fs");
// Создаем директорию, если ее нет
var dir = "";
function mkD(adir = "./Backend/uploads") {
  if (!fs.existsSync(adir)) {
    fs.mkdirSync(adir);
  }
  dir = "./Backend/uploads";
}
mkD();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
module.exports = upload;
