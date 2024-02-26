try{
    hello()
}
catch(error){
    console.log(error)
}
try{
    anotherFn()
}
catch{
    console.log("Esto es un error")
}
//personalizacion del error pero es recomendable manejar el error directamente