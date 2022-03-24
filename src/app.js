const express = require('express');

const routes = require('./api/routes');
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/api", routes)
app.get("/", ( _, res)=>{
    res.status(200).json({message: "API funcionando"})
})
  


module.exports = app