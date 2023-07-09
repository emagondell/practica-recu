const db = require('../database/models');
const Movie = db.Movie;
const controller = {
    index: function(req, res, next) {
       Movie.findAll()
        .then(function(data){
            return res.render('index', {title:'Todas las peliculas' ,data:data})
            console.log(data);
        })
        .catch(function(err){console.log(err)}) 
    },
    // detalleMovies:function(req,res){
    //     let id = req.params.id;
    //     Movie.findOne( {where:[{id:id}]})
    //     .then(function(data){
    //         return res.send(data);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })

    // },
    detalle:(req,res)=>{
        let id = req.params.id;
        let relaciones={
          include:[
            {association:'genre'},
            {association:'actors'}
          ]};
        Movie.findByPk(id,relaciones)
        .then(function(data){
        
          return res.render("detalle",{title:"Por clave primaria",data:data});
       })
       .catch(function(err){console.log(err)})
      },
   
    new:function(req,res){
        Movie.findAll( {order:[['release_date','DESC']],limit:5})
        .then(function(data){
            return res.render('new',{title:'Peliculas Nuevas', data:data})
        })
        .catch(function(error){console.log(error);})

    },
    recommended:function(){

    },

    }
    



module.exports = controller