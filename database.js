const mongoose = require("mongoose");

//Database String
const dbUrl = process.env.DBSTRING;

//Database Connect
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Db is connected"))
  .catch((err) => console.error("Db Connection failed", err.message));
