const experss=require("express");
const app=experss();
const port=process.env.PORT||3000;

app.set('view engie','ejs')

app.get('/',(req,res)=>{
    res.render("home");
})

app.get('/form',(req,res)=>{
    res.render('from');
})

app.listen(port,()=>{
    console.log("server is running");
})