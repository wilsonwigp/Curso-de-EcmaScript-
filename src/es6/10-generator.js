function* iterate(array){
    for(let value of array){
        yield value
    }
}

const it = iterate(["Oscar","David","Ana","Ulises","Jenifer"])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

//Recuerda el estado 

