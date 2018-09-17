'use strict'

var Satisfaccion = require('../models/satisfaccion.model');

function getSatisfaccion(req, res)
{
 var satisfaccionId =  req.params.id;
 Satisfaccion.findById(satisfaccionId,(err,satisfaccion)=>{
     if(err)
     {
        res.status(500).send({message: 'error al devolver el satisfaccion'});   
     }
     else
     {
        if(!satisfaccion)
            {
               res.status(404).send({message: 'No hay satisfaccion'});
            }
            else
            {
               res.status(200).send({satisfaccion});         
            }
     }
        
 });
  
}

function getSatisfaccions(req, res)
{
    
    Satisfaccion.find({}).sort('-Valoracion').exec((err, satisfaccions)=>{
       if(err)
       {
        res.status(500).send({message: 'error al devolver los satisfaccion'})
       }
       else
       {
        if(!satisfaccions)
            {
                res.status(404).send({message: 'No existen satisfaccion'})
            }
            else
            {
                //metodo para sacar promedio 
                var aum = 0;
                var prom = 0;
                var numero = satisfaccions.length;
                for(let i in satisfaccions){
                    var arr = satisfaccions[i];
                     var arr2 = arr.Valoracion
                     aum = aum+ arr2;
                     prom = aum / numero;
                    console.log(arr2,aum,prom)
                }
                var promedio = prom.toFixed(1)

                res.status(200).send({satisfaccions,promedio});
            }
       }
        
   });  
}

function saveSatisfaccion(req, res)
{
   var satisfaccion = new Satisfaccion(); 
   var params = req.body; 

   satisfaccion.Comentario = params.comentario;
   satisfaccion.Valoracion = params.valoracion;
   satisfaccion.Comentario_NLU = params.comentario_NLU;


   satisfaccion.save((err,satisfaccionStored)=>
   {
       if(err)
       {
           res.status(500).send({message:'Error al guardar los datos'});
       }
       else
       {
        res.status(200).send({satisfaccion: satisfaccionStored});
       }
      
   });

}  

function updateSatisfaccion(req, res)
{
    
    var satisfaccionId =  req.params.id;
    var nuevo = req.body; 

    Satisfaccion.findByIdAndUpdate(satisfaccionId,nuevo, (err,satisfaccionStored)=>{
        if(err)
            {
                res.status(500).send({message:'Error al actualizar los datos'});
            }
        else
           {
                res.status(200).send({satisfaccion: satisfaccionStored});
           }    
            
    });

} 

function deleteSatisfaccion(req, res)
{
    var satisfaccionId =  req.params.id;
    Satisfaccion.findById(satisfaccionId,(err,satisfaccion)=>{
        if(err)
        {
           res.status(500).send({message: 'error al devolver la satisfaccion'});   
        }
        else
        {
            if(!satisfaccion)
                {
                   res.status(404).send({message: 'No hay satisfaccion'});
                }
                else
                {
                    satisfaccion.remove(err=>{
                        if(err)
                        {
                            res.status(500).send({message: 'error al eliminar una satisfaccion'}); 
                        }
                        else
                        {
                            res.status(200).send({message: 'la satisfaccion se ha eliminado'});                  
                        }
                    })         
                }       
        }
    
    });
}   

module.exports = 
{
    getSatisfaccion,
    getSatisfaccions,
    saveSatisfaccion,
    updateSatisfaccion,
    deleteSatisfaccion

}