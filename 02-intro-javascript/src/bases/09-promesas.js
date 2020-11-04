
import { getHeroesByid } from './bases/08-imp-exp' 

/* const promesa = new Promise((resolve, reject) => {
         setTimeout( () => {
            const heroe = getHeroesByid(2);
            console.log(heroe);

         }, 2000)

});


promesa.then(() => {
    console.log('then de la promesa')
}) */


const getHeroesAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroesByid(id);
            if (p1 === undefined){
             reject(p1);

            }else{
             resolve(p1);
            }

        }, 2000)

    });
}

getHeroesAsync(3)
            .then(console.log)
            .catch(console.warn);

 