const express = require("express")


const PORT = 3000;
const app = express()

app.get("/test", (req, res) => {
    res.json({"ok": true})
})

app.listen(PORT, () => 
console.log(`Listening on: http://localhost:${PORT}`))
