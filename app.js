const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json({ extended: true }));
app.use(cors());
app.use("/api/auth", require("./routers/auth.route"));
app.use("/api/create", require("./routers/getHero.route"));
app.use("/api/hero", require("./routers/hero.route"));

const PORT = config.get("port") || 5000;
async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(
      `App has been started on port ${PORT}`));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}start();
