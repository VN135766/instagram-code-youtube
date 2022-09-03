const express = require('express')
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
const {MONGOURI} = require ("./keys")
require("./models/user")

app.use(express.json())

app.use(require("./routes/auth"))





//Tx8_t8-X9rH!SB.

mongoose.connect(MONGOURI)
mongoose.connection.on("connected",()=>{
  console.log("connected to mongo yes")
})

mongoose.connection.on("error",(err)=>{
  console.log("error connecting", err)
})

app.listen(PORT,()=>{
  console.log("server is running on",PORT)
})