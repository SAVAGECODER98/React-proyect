

console.log('hola mundo');
//variables y constantes

const nombre = 'fernando';
const apellido = 'herrera';

const NombreCompleto = `
${ nombre }
${ apellido }

`;

console.log( NombreCompleto );

function getsaludo(nombre) {

    return 'hola ' + nombre;
}

console.log(`este es un texto: ${ getsaludo(nombre)}`);