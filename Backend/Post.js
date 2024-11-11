const mongoose = require("mongoose");

var Post = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  picture: { type: String, required: false },
  //imageId: { type: mongoose.Schema.Types.ObjectId, ref: "fs.files" },
});

module.exports = mongoose.model("Post", Post);

// exec("python Backend/1.py", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Ошибка: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Ошибка: ${stderr}`);
//     return;
//   }
//   console.log(`Результат: ${stdout}`);
// });
