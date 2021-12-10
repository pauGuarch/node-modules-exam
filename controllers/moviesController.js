import moviesModel from '../models/moviesModel.js';
import actorsModel from '../models/actorsModel.js';
import moviePojo from '../models/moviePojo.js';
import actorPojo from '../models/actorPojo.js';


/*
  Utilitzar throw new Error("missatge") per gestionar posibles errors o missatges

   if ()
   throw new Error('parameter id not exist');

   exemple:
    if (pelicula no existeix)
        throw new Error('¡Ups! id of movie not found');
*/

const getAllMovies = (data_movie) => {
    // ...
    const mov = moviesModel.getMovies();
    const act = actorsModel.getActors();
    
    mov.forEach(element => {
        act.forEach(element1=>{
            if (element.id==element1.id){
                element.actors=element1.actors;
            }
        });
    });
    data_movie.res=mov;
    return mov;
}

const getMovieById = (data_movie) => {
    // ...
    //const movies = getAllMovies(data_movie);
    const movie = moviesModel.getMovieById(data_movie.req.id);
    
    if (movie!=undefined){
        
        const actors = actorsModel.actors;
        actors.forEach(element => {
            if (element.id==movie.id){
                movie.actors = element.actors;
                }
            });
        data_movie.res.push(movie);
    }else{
        throw new Error ("¡Ups! id of movie not found");
    }
}

const removeMovie = (data_movie) => {
    // ...
    moviesModel.removeMovie(data_movie.req.id);
    actorsModel.removeActors(data_movie.req.id);
    const mov = moviesModel.getMovies();
    const act = actorsModel.getActors();
    
    mov.forEach(element => {
        act.forEach(element1=>{
            if (element.id==element1.id){
                element.actors=element1.actors;
            }
        });
    });
    
    data_movie.res.push(mov);
}

const createMovie = (data_movie) => {
    // Puede usar ../models/moviePojo para crear una Movies 
    // Puede usar ../models/actorPojo para crear un Actor
    // ...
    // actorsModel.createActors(actors(data_movie.req));
    moviesModel.createMovie(data_movie.req);

    const mov = moviesModel.getMovies();
    const act = actorsModel.getActors();

    mov.forEach(element => {
        act.forEach(element1=>{
            if (element.id==element1.id){
                element.actors=element1.actors;
            }
        });
    });
    
    data_movie.res.push(mov);
}

const updateMovie = (data_movie) => {
    // Puede usar ../models/moviePojo para actualizar una Movies 
    // Puede usar ../models/actorPojo para actualizar un Actor
    // ...
    moviesModel.updateMovie(data_movie.req);
    actorsModel.updateActors(data_movie.req.actors);

    const mov = moviesModel.getMovies();
    const act = actorsModel.getActors();

    mov.forEach(element => {
        act.forEach(element1=>{
            console.log(element);
            if (element.id==element1.id){
                element.actors=element1.actors;
            }
        });
        
    });
    data_movie.res.push(mov);
}

const getMovieBy = (data_movie) => {
    // ...
    let movs = moviesModel.getMovieBy(data_movie.req);
    const act = actorsModel.actors;
    movs.forEach(element => {
        act.forEach(element1=>{
            if (element.id==element1.id){
                element.actors=element1.actors;
            }
        });
        
    });
    data_movie.res.push(movs);
}

const updateActors = (data_movie) => {
    // ...
    const mov = moviesModel.getMovies();
    const act = actorsModel.getActors();

    act.forEach(element => {
        console.log(element.id);
        if (element.id==data_movie.req["id"]){
            element.actors.push(data_movie.req["value"]);
            console.log('found');
        }
    });

    mov.forEach(element => {
        act.forEach(element1=>{
            if (element.id==element1.id){
                element.actors=element1.actors;
            }
        });
    });
    data_movie.res.push(mov);
}

export default {
    getAllMovies,
    getMovieById,
    removeMovie,
    createMovie,
    updateMovie,
    getMovieBy,
    updateActors
}