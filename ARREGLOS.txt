const products = ['mesa','silla','notebook','teclado'];
console.log(products);

interface Item{
    nombre:string
}

function convertirMayuscula(descripcion:string){
    return descripcion.toUpperCase();
}
// MAP FUNCTION
products.map((item:string)=>{
    const valorConvertido = convertirMayuscula(item);
    console.log(valorConvertido);
})

// FOR IN
for (const prod of products){
    console.log(prod.toUpperCase())
}

// FOR EACH
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(element.toUpperCase());
}



//ARREGLOS Y OPERADOR SPREAD

//COPIAR POR VALOR
const fruits = ["peras","manzanas","sandias","frutillas"];
const productss = ['mesa','silla','notebook','teclado'];
productss.push('TV','OTRO')
const mercado = [...fruits,...productss];


fruits[1] = "borojo";
console.log(fruits);
console.log(mercado);

//Expandir arrays:

const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4, 5]; // [1, 2, 3, 4, 5]


//Copiar arrays:
const original = [1, 2, 3];
const copia = [...original]; // Crea una nueva copia del array

//Concatenar arrays

const array1 = [1, 2];
const array2 = [3, 4];
const combinado = [...array1, ...array2]; // [1, 2, 3, 4]

//Pasar argumentos de funciones 

const numeross = [1, 2, 3];
Math.max(...numeross); // Devuelve 3

//Expandir objetos:
const persona = { nombre: 'Juan', edad: 30 };
const nuevaPersona = { ...persona, ciudad: 'Madrid' };


