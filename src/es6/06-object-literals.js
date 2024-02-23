//enahced object literals
function newUser(user,age,country){
    return {
       user:user,
       age:age,
       country:country 
    }
}
function newUser1(user1,age1,country1,uId){
    return{
        user1,
        age1,
        country1,
        id1:uId
    }
}
console.log(newUser1("gndx",34,"Mx",1))