const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const requestGrades = require("./controller/request-grades");
const sendEmail = require("./controller/send-mail")

const PORT = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: ['http://localhost:3000', 'https://portfolio.d30eostezad756.amplifyapp.com'],
}));

app.get("/", (req, res) => {
  res.json({"ok": true});
});

app.get("/wake-up", (req, res) => {
  res.json({"ok": true});
});

app.post("/request-grades", (req, res) => {
  requestGrades.handleRequestGrades(req, res);
});

app.post("/send-mail", (req, res) => {
  sendEmail.handleMessage(req, res);
});

app.listen(PORT, () => 
  console.log(`Listening on: http://localhost:${PORT}`));
