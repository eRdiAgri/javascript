const functions = abi //tanımlı abi dosyasından veri çeker.
    .filter((obj) => obj.type === "function")
    .filter((obj) => obj.stateMutability === "pure")
    .map((obj) => obj.name);

console.log(functions);

