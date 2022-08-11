const generatedIds = new Set();

function randomId() {
    let id = null;
    do {
        const r = Math.random();
        const idNum = Math.floor(r * 100000);
        id = `ID_${idNum}`;

    } while (generatedIds.has(id));
    return id;
}

console.log(randomId(), randomId(), randomId());

function makeALogger() {
    const id = randomId();
    return (obj) => {
        console.log(id, obj); //id is captured here
    };
}

const loggerA = makeALogger();
const loggerB = makeALogger();

loggerA(1);
loggerA("The first user is: Logger A");

loggerB({a: 1});
loggerB("The second user is: Logger B");