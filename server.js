const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const sendMail = require("./controller/sendMail");

const PORT = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: '*',
}));

app.get("/", (req, res) => {
  res.json({"ok": true});
});

app.get("/wake-up", (req, res) => {
  res.json({"ok": true});
});

app.post("/send-email", (req, res) => {
  sendMail.handleRequestGrades(req, res);
});

app.listen(PORT, () => 
  console.log(`Listening on: http://localhost:${PORT}`));
