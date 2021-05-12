var app = require("express")()

app.get("/", (req, res) => {
    res.send("Olá mundo")
})

app.listen(3000, () => {
    console.log("Servidor Rodando")
})

