function rec(n) {
    console.log(n);
    if (n > 0) {
        rec (n - 1);
    }
}


const myFunction = rec;
console.log(myFunction(1), myFunction(2), myFunction(3));
