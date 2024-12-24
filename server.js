const express = require('express')
const app = express()
require("dotenv").config()
const port= process.env.port || 5000

app.use(express.json())
app.use(express.urlencoded({extended:true})) // undefined

var arr=[]

// app.post('/user',(req,res)=>{
//     // res.send("post api")
//     // console.log("post");
//     // console.log(req.body);
//     arr.push(req.body)
//     // console.log(arr)
//     res.json("inserted")
// })

    app.post('/user',(req,res)=>{
        const {blog,blogDate,blogName,releaseD,img}=req.body
        const newuser={
            blog_title:blog,
            blog_date:blogDate,
            author_name:blogName,
            release_date:releaseD,
            url:img
        }
        console.log("newuser>",newuser);
        arr.push(newuser)
        console.log("arr>",arr);
        res.json({success:true})
    })

    app.delete('/user/:id',(req,res)=>{
        const {id}=req.params
        console.log("params>",req.params);
        arr.splice(id,1)
        res.json({
            message:'data deleted'
        })  
    })

    app.put('/user',(req,res)=>{
        console.log(req.query)
        const {index}=req.query
        arr.splice(index,1,req.body)  
        res.json({
            massage:"update"
        })     
    })

app.get('/user', (req, res) => res.json(arr))
app.listen(port,() => console.log(`Example app listening on port http://localhost:${port}`))