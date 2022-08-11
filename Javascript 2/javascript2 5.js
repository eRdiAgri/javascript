//map filter reduce

const arr = [ 
    {
        val: 1,
        name: "o1",
    },

    {
        val: 4,
        name: "o2",
    },

    {
        val: 5,
        name: "o3",
    },

    {
        val: 8,
        name: "o4",
    }
];

console.log(arr);

const onlyVals = arr.map((el, arr, index) => {
    return el.val;
})
.map((el) => el + 1) //.map ile değer arttırmak
.map((el) => el.toString()); //.map ile stringe çevirmek


console.log(onlyVals);
