

const personajes = ['goku','vegeta','trunks'];

const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['abc' , 45];
}

const [letras , numeros] = retornaArreglo;

console.log(letras, numeros);

const retornaArreglo2 = ( valor ) => {
    return [ valor , () => console.log(valor * 2)];
}

const [valor , valormultiplicado] = retornaArreglo2(45);

console.log(valor);
valormultiplicado();
