//devuelve una matriz de cualquier submatriz aplanamiento de matrices
//flat
const array=[1,1,2,3,4,[1,2,3,4,[1,2,3]]]
console.log(array.flat(3))

//flatmap usando una funcion
const array2=[1,2,3,4,5]
console.log(array2.flatMap(v=>[v,v*2]))