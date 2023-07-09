module.exports = function (sequelize, DataTypes) {
    let alias = 'Movie';
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },
        title:{
            type:DataTypes.STRING
        },
        rating:{
            type:DataTypes.DECIMAL
        },
        awards:{
            type:DataTypes.INTEGER
        },
        release_date:{
            type:DataTypes.DATE
        },
        length:{
            type:DataTypes.INTEGER
        },
        genre_id:{
            type:DataTypes.INTEGER
        },

    }
    let config= {
        tableName: 'movies',
        timestamps: false,
        underscore: true

    }
    const Movie= sequelize.define(alias,cols,config);
    Movie.associate=function(models){
        Movie.belongsToMany(models.Actor, {
            as:'actors',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamp:false

        });
         Movie.belongsTo(models.Genre,{
             as:'genre',
             foreignKey: 'genre_id'
         })
     }
    return Movie; 
}