

//Funciones en Javascript
//const saludar = function( nombre ){
//    return `hola, ${ nombre }`;
//}


const saludar2 = ( nombre ) => {
    return `hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `hola, ${ nombre }`;

const saludar4 = () => `hola mundo`;

console.log( saludar2('fernando') );

console.log( saludar4() );

const getUsuario = (nombre) => ({
     uid: '232323',
     username: nombre
});

const usuarioActivo = getUsuario('fernando');
console.log(usuarioActivo);

