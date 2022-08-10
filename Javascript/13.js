const validJson = {
    a: "example",
    b: {
        c: 1,
        d: [2, 3, "4"],
    },
    e: true,
    f: null,
    fn: function test() { //JSON'da fonksiyon yoktur, göstermez.
        console.log("test");
    },
};

const str = JSON.stringify(validJson);
//Akıllı kontrakt ile çağrılan bilgiler genelde JSON'dur.
console.log(str);