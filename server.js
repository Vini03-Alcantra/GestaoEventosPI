var app = require("express")()
var router = require("./routes/routes")
var bodyParser = require("body-parser")
const cors = require('cors')
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
//parse application/json
app.use(bodyParser.json())
app.use("/", router)

app.listen(3000, () => {
    console.log("Servidor Rodando")
})

