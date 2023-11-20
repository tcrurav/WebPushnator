require ('dotenv').config ();

const express = require("express");
const app = express();

const cors = require("cors");

var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const webPush = require ('web-push');

const db = require("./models");

db.sequelize.sync({ force: true}).then(() => {
  console.log("Drop and re-sync DB");
})

app.get("/", (req, res) => {
  res.json({ message: "Wellcome"});
});

require("./routes/bicycle.routes")(app);
require("./routes/subscription.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
  console.log(`Server running on ${PORT}`);
});