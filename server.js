
let express = require("express")
let app = express()
let port = process.env.PORT || 3000

app.use(express.static(`${__dirname}/dist`))

app.get("/", (req, res) => {
  res.sendFile()
})

app.listen(port, () => console.log("server has started !"))