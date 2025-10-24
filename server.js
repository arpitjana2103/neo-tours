const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DBLOC = process.env.DATABASE_LOCAL;
const PORT = process.env.PORT || 6700;

const server = app.listen(PORT, function () {
  console.log("⌛ connecting to database...");

  mongoose.connect(DBLOC).then(function () {
    console.log("✅ database connecting successfull");
    console.log(`🔗 api url : http://127.0.0.1:${PORT}`);
  });
});
