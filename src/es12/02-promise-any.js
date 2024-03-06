const promise1=new Promise((resolve,reject)=>reject("Reject"))
const promise2=new Promise((resolve,reject)=>resolve("resolve"))
const promise3=new Promise((resolve,reject)=>resolve("resolve 2"))

//para sabver si todas las promesas se han resuelto
Promise.any([promise1,promise2,promise3])
//capta la repsuesta de la primera respuesta satisfactoria
.then(response=>console.log(response))