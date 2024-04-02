const Jake = {
    name: Jake,
    age: 30
}
const Imogen = {
    name: Imogen,
    age: 29
}
const Olive = {
    name: Olive,
    age: 30
}
function groupBy(arrayofobjects, propertyname){
    const x = {
        person1: arrayofobjects[0].name,
        person2: arrayofobjects[1].name,
        person3: arrayofobjects[2].name
    }
    return(x);
}

let a1 = [Jake, Imogen, Olive];
console.log(groupBy(a1, age));