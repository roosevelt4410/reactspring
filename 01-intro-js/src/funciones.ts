function sayHello(lastname:string) {
    console.log(`No te voy a saludar ${lastname}`);
}
const variable  ="Roosevelt"
sayHello(variable);


function sayHello2(){
    const gretting = "Hola como estas?"
    return gretting;
}

const saludo1 = sayHello2();
console.log(saludo1);


function HolaMundoFunction(nombre:string = "Roosevelt"){
    return `Hola mundo : ${nombre}`
}

const saludo = HolaMundoFunction("Andres");

console.log(saludo); 


const Functionflecha = (nombre:string)=>`Hola mundo function ! ${nombre}`;

const result = Functionflecha("Andres");
console.log(result)
