//arrays destructuring

let fruits=["Apple","Banana"]
let [a,b]=fruits
//con ecmascript
console.log(a,b)
//anteriormente
console.log(a,fruits[1])
//con objetos destructuring
let user={
    username:"Oscar",
    age:34
}
let {username,age}=user
console.log(username,age)
//antes
console.log(user.username,user.age)

//spread operator 

let person={name:"Oscar",age:28}
let country="MX"

let data={...person,country}
console.log(data)

let data1={id:1,...person,country}
console.log(data1)

//rest
function sum(num,...values){
    console.log(values)
    console.log(num+values[0])
    return num+values[0]
}
sum(1,1,2,3)
//con values podemos asignar varios valores en una sola entrada
