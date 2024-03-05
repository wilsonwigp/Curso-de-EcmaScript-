//encadenamiento opcional para verificar si se tiene un objeto dentro de un objeto que no se tiene certeza 
const users ={
    gndx:{
        country:"MX"
    },
    ana:{
        country:"CO"
    }
}

console.log(users.gndx);
console.log(users?.bebeloper?.country)