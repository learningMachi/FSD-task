let obj1 = {name: "person1", age: 5};
let obj2 = {age: 5, name: "person1"};
function compareJSON(obj1, obj2) {
    let sortedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    let sortedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());
    return sortedObj1 === sortedObj2;
}
console.log(compareJSON(obj1, obj2));