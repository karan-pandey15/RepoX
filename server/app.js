const express = require("express")
const env = require("dotenv");
const app = express();
const PORT = process.env.PORT  || 5000;
app.get("/",(req,res)=>{
    res.end(`<h1>Hello From RepoX</h1>`)
})

 
app.listen(PORT,()=>{
    console.log(`listening to http://localhost:${PORT}`)                         
})