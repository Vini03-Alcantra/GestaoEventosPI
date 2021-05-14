var app = require("express")()
var router = require("./routes/routes")

app.use("/", router)

app.listen(3000, () => {
    console.log("Servidor Rodando")
})

