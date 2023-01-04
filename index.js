const express = require('express');
const uuid = require('uuid')
const path  = require("path")

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'))


const comments = [
    {
        username:'adithya',
        comment:'hello there'
    },
    {
        username:'adithya',
        comment:'hello there'
    },
    {
        username:'adithya',
        comment:'hello there'
    },
    {
        username:'adithya',
        comment:'hello there'
    }
]

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/home',(req,res)=>{
    res.render('home')
})

app.get('/comments',(req,res)=>[
    res.render('comments/index',{comments})
])


app.get('/comments/new',(res,req)=>{
    req.render('./comments/new')
})

app.post('/comments',(req,res)=>{
    const {username,comment}=req.body
    comments.push({username,comment})
    res.redirect('/comments')
})

app.listen(8000,()=>{console.log("Connected")});

