
// Desestructuracion
// asignacion destructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman',
    rango: 'general'
};

//const {nombre, edad, clave} = persona2;

const retornapersona = ({nombre, edad, clave}) => {
    return {
        nombreclave: clave,
        anios: edad


    }
    

};


const { nombreclave, anios } = retornapersona(persona);

console.log(nombreclave);