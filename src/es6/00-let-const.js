var lastName="David"
lastName="Oscar"
console.log(lastName);
//se reasigna la variable a Oscar

let fruit="Apple";
//declarar y asignar
fruit="kiwi"
console.log(fruit);
//con let tambien se puede reasignar

const animal="dog"
//declarar y asignar
animal="cat";
console.log(animal);
//No se puede reasignar con const

const fruits=()=>{
    if(true){
        var fruit1="apple" //function scope
        let fruit2="kiwi" //block scope
        const fruit3="banana" //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);

}
fruits();

