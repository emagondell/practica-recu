module.exports= function(sequelize,DataTypes){
    let alias='Actor';
    let cols={
        id:{
            autoIncrement: true,
            primaryKey:true,
            type: DataTypes.INTEGER
        } ,
        created_at:{
            type:DataTypes.DATE,
            alowNull: true
        },
        updated_at:{
            type:DataTypes.DATE,
            alowNull: true
        },
        first_name:{
            type:DataTypes.STRING,
        },
        last_name:{
            type:DataTypes.STRING,
        },
        rating:{
            type:DataTypes.DECIMAL,
        },
        favorite_movie_id:{
            type:DataTypes.INTEGER
        },

    }
    let config={
        tableName:'actors',
        timeStamps:false,
        underscore: true
    }
    let Actor = sequelize.define(alias,cols,config)
    Actor.associate=  function(models){
        Actor.belongsToMany(models.Movie,{
            as: 'movies',
            through: 'actor_movies',
            foreignKey:'actor_id',
            otherKey:'movie_id',
            timestamps:false
        });
    }
    return Actor;
}