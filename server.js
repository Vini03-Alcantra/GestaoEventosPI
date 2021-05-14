var app = require("express")()
var router = require("./routes/routes")
var bodyParser = require("body-parser")

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
//parse application/json
app.use(bodyParser.json())
app.use("/", router)

app.listen(3000, () => {
    console.log("Servidor Rodando")
})

