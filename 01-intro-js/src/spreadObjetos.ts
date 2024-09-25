console.log("spread objetos");

interface Item {
    producto:string,
    price:number,
    quantity:number
}

interface Invoice {
    id: number;
    nombre: string;
    date: Date;
    client: Client;
    total?: Function;
    gretting?:Function,
    items:Item[]
}

interface Client{
    id:number,
    nombre:string,
    lastname:string,
    age:number
}

const invoice: Invoice = {
    id: 10,
    nombre: "Compras de oficina",
    date: new Date(),
    items: [
        {
            producto:'keyboard',
            price:10,
            quantity:10
        },
        {
            producto:'mouse',
            price:200,
            quantity:1
        },
        {
            producto:'paper',
            price:2,
            quantity:10
        }
    ],
    total:function(){
        let total = 0;
        this.items.forEach(element => {
            total = total + element.price * element.quantity
        });
        return total;
    },
    client: {
        id:1,
        nombre:'Andres Riobo',
        lastname:"Lopez",
        age:27,
    },
    gretting:function(lastname:string){
        return `Hola ${this.client.nombre} ${lastname}`
    }
};


//CREANDO UNA COPIA SUPERFICIAL DEL OBJETO
//const invoice2 = {... invoice}; // 

// Creando una copia profunda
//const invoice2: Invoice = structuredClone(invoice);

//CREANDO UNA COPIA PROFUNDA DICIENDOLE QUE OMITA LA FUNCION TOTAL y GRETTING PUES LAS COPIAS PROFUNDAS NO PUEDEN TENER FUNCIONES, EN ESTE CASO SE PONEN COMO OPCIONAL ?
const invoice2: Invoice = structuredClone({ ...invoice, total: undefined,gretting : undefined });

console.log(invoice2.client.id);
console.log(invoice.client.id);
invoice2.client.id = 4;
console.log(invoice2.client.id);
console.log(invoice.client.id);