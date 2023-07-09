module.exports= function(sequelize,DataTypes){
    let alias='Genre';
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
        name:{
            type:DataTypes.STRING,
        },
        ranking:{
            type:DataTypes.INTEGER,
        },
        active:{
            type:DataTypes.INTEGER
        },

    }
    let config={
        tableName:'genres',
        timeStamps:false,
        underscore: true
    }
    let Genre = sequelize.define(alias,cols,config)
    Genre.associate=  function(models){
       Genre.hasMany(models.Movie,{
            as: 'movies',
            foreignKey:'genre_id',
        });
    }
    return Genre;
}