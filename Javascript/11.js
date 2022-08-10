function increment(obj) {
    obj.counter += 10;
}


const myObj = {
    counter: 0,
}

console.log(myObj);
increment(myObj);
console.log(myObj);
