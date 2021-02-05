require("./config")

const express = require("express")
const bodyParser = require("body-parser")

const routes = require("./routes")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api", routes.test)

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(error)
  }

  console.log(`Server Online -> PORT: ${process.env.PORT}`)
})
