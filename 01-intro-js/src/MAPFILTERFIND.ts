console.log("MAP FILTER FIND")

export interface Invoice {
    id: number;
    nombre: string;
    date: Date;
}


export const invoices: Invoice[]= [
    {
        id: 11,
        nombre: "Compras de oficina",
        date: new Date(),
    },
    {
        id: 12,
        nombre: "Andres",
        date: new Date(),
    },
];




const nuevoArray = invoices.map((invoice:Invoice)=>{
    return invoice.nombre;
})

console.log(nuevoArray)


const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


//BUSCAR FACTURA POR ID o por nombre

const buscarObjeto = invoices.find(invoice => invoice.nombre =="Andres")
console.log(buscarObjeto);


const numbersssss = [1, 2, 3, 4, 5];

// Encontrar el primer número mayor que 3
const foundNumber = numbersssss.find(number => number > 3);
console.log(foundNumber); // Output: 4

// Filtrar todos los números pares
const evenNumbers = numbersssss.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]