const numberArray = [5,4,3,2,1];
const mixedArray = [
    5,
    "example",
    {
        key: "testWallet",
        value: 20,
    },
    ["nested", "array", 1],
];

console.log("Name of your wallet is:", mixedArray[2].key)
console.log("Value of your balance is:", mixedArray[2].value);


const arr = [];
console.log(arr);

arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.shift(1));
console.log(arr);
