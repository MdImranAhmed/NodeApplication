var express=require('express');
var app=express();

app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
res.redirect('index.html')
})



app.listen(8080, ()=>{
console.log('Server listeninig at: http://localhost:8080');
})
