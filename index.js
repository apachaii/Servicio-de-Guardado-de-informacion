
'use strict'
var mongoose = require('mongoose');
var app  = require('./app');
var port = process.env.PORT || 5656;

// mongoose.connect('mongodb://dbada:THJ2yqCxyfd0pxtbqctigiFohEXoB9HHhjB7HyL2qyOu0LbBOhL01YFOX3QyId6Es3FBg5LJIE3hHWF6DFeXUA==@dbada.documents.azure.com:10255/?ssl=true',(err,res)=>{
// if(err)
// {
//  throw err;
// }else
// {    
//     console.log("conexion a mongo correcta");
//     app.listen(3678,function(){
//         console.log(`api rest del anfitrion funcionando en http://localhost:${port}`);
//     });
// }


// })

mongoose.connect('mongodb://localhost:27017/interacciones',(err,res)=>{
if(err)
{
 throw err;
}else
{    
    console.log("conexion a mongo correcta");
    app.listen(5656,function(){
        console.log(`api rest del anfitrion funcionando en http://localhost:${port}`);
    });
}


})

