


const persona = {
   nombre: 'Tony',
   apellido: 'Stark',
   edad: 55,
   direccion:{
       ciudad:'New York',
       zip: 5534553
   }


};

const persona2 = {...persona};
persona2.nombre =  'pedro';

console.log( persona );
console.log(persona2); 