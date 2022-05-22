const express=require("express")
require("dotenv").config()
const path=require("path")

const app=express()

app.use(express.static("public"))
app.use(express.urlencoded())
app.use(express.json())
app.set("view engine","ejs")


app.get("/",(req,res)=>{
    res.render("index",{page:" index"})
})

app.get("/about",(req,res)=>{
    res.render("about",{page:" about"})
})

app.get("/photos",(req,res)=>{
    res.render("photo",{page:" photos"})
})

app.get("/contact",(req,res)=>{
    res.render("contact",{page:" contact"})
})

app.get("/login",(req,res)=>{
    res.render("login",{page:" login"})
})

app.get("/register",(req,res)=>{
    res.render("register",{page:" register"})
})


const PORT=process.env.PORT||3000
app.listen(3000,()=>console.log(`Server is running port on ${PORT}`))