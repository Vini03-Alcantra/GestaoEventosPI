var app = require("express")()
var router = require("./routes/index")
var bodyParser = require("body-parser")
const cors = require('cors')

const PORT = 3009;

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
//parse application/json
app.use(bodyParser.json())
app.use("/", router)

app.listen(PORT, () => {
    console.log(`Servidor Rodando ${PORT}`)
})

