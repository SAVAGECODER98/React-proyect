 // import { heroes } from './data/heroes';
 

 import  heroes, {owners} from './data/heroes';


/*  const getHeroesByid = (id) => {
     return heroes.find( ( heroes ) => {
        if (heroes === id){
            return true;
        }
     } );


 } */

 const getHeroesByid = (id) => heroes.find((heroe) => heroe.id === id);

 const getOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner );

 export{
     getHeroesByid,
     getOwner
 }

 //console.log( getOwner('DC'));






 