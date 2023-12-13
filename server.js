const express = require("express")


const PORT = 3000;
const app = express()

app.get("/wake-up", (req, res) => {
    res.json({"ok": true})})

app.post("/send-email", (req, res) => {
    
})

app.listen(PORT, () => 
console.log(`Listening on: http://localhost:${PORT}`))
