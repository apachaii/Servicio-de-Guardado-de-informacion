'use strict'
var Usuario = require('../models/usuario.model');

function prueba(req,res)
{
    if(req.params.pregunta){
        var nombre = req.params.pregunta;
    }
    else{
        var pregunta = "sin pregunta";
    }
 res.status(200).send({
     texto:"hola mundo con nodejs y express- "+pregunta})
}

function getUsuario(req, res)
{
 var userId =  req.params.id;
 Usuario.findById(userId,(err,usuario)=>{
     if(err)
     {
        res.status(500).send({message: 'error al devolver el usuario'});   
     }
     else
     {
        if(!usuario)
            {
               res.status(404).send({message: 'No hay usuario'});
            }
            else
            {
               res.status(200).send({usuario});         
            }
     }
        
 });
  
}

function getUsuarios(req, res)
{
   
   Usuario.find({}).sort('-Pregunta').exec((err, usuarios)=>{
       if(err)
       {
        res.status(500).send({message: 'error al devolver los usuarios'})
       }
       else
       {
        if(!usuarios)
            {
                res.status(404).send({message: 'No existen usuarios'})
            }
            else
            {
                var ff = usuarios.length;
                var ap = 0;
                var prom = 0;
                // for(let i in usuarios){
                //     var arr = usuarios[i];
                //     var arr2 = arr.Intencion
                    
                //     if(arr.Intencion == 'cosa'){
                //         ff = ff+1
                //     }else
                //     {
                //         if(arr.Intencion == 'api'){
                //             ap = ap+1
                //         }
                //     }
                //     console.log(arr2,ff,ap)
                // }

                  for(let i in usuarios){
                    var arr = usuarios[i];
                    var arr2 = arr.Intencion 
                //    if(arr2 == 'asd'){
                //     ap = (ap +1 / ff * 100);
                //    }   
                //    if(arr2 == 'saludo'){
                //     prom = (prom + 1 / ff *100);
                    
                   }         
                
                //     console.log(arr2)
                // }


                 
                res.status(200).send({usuarios});
            }
       }
        
   });  
}

function saveUsuario(req, res)
{
   var usuario = new Usuario(); 
   var params = req.body; 

   usuario.Pregunta = params.pregunta;
   usuario.Respuesta = params.respuesta;
   usuario.Carrera = params.carrera;
   usuario.Seccion = params.seccion;
   usuario.Agente = params.agente;
   usuario.Intencion = params.intencion;
   usuario.Rut = params.rut;

   usuario.save((err,usuarioStored)=>
   {
       if(err)
       {
           res.status(500).send({message:'Error al guardar los datos'});
       }
       else
       {
        res.status(200).send({usuario: usuarioStored});
       }
      
   });

}  

function updateUsuario(req, res)
{
    
    var userId =  req.params.id;
    var nuevo = req.body; 

    Usuario.findByIdAndUpdate(userId,nuevo, (err,usuarioUpdated)=>{
        if(err)
            {
                res.status(500).send({message:'Error al actualizar los datos'});
            }
        else
           {
                res.status(200).send({usuario: usuarioUpdated});
           }    
            
    });

} 

function deleteUsuario(req, res)
{
    var userId =  req.params.id;
    Usuario.findById(userId,(err,usuario)=>{
        if(err)
        {
           res.status(500).send({message: 'error al devolver el usuario'});   
        }
        else
        {
            if(!usuario)
                {
                   res.status(404).send({message: 'No hay usuario'});
                }
                else
                {
                    usuario.remove(err=>{
                        if(err)
                        {
                            res.status(500).send({message: 'error al eliminar un usuario'}); 
                        }
                        else
                        {
                            res.status(200).send({message: 'el usuario se ha eliminado'});                  
                        }
                    })         
                }       
        }
    
    });
}   

module.exports = 
{
    prueba,
    getUsuario,
    getUsuarios,
    saveUsuario,
    updateUsuario,
    deleteUsuario

}