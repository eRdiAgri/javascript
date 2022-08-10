const user = {
    id: 1,
    name: "Erdi",
    email: "mail@gmail.com",
    address: "Ankara",
    createdAt: Date.now(),

};

const idName = "id";

//console.log(user.id, user.name, user.createdAt);
//console.log(user[idName], user["name"], user["createdAt"]);

user.additionalProperty = true;
user.name = "Not Erdi"; //name özelliğine müdahale.
user.check = "The result is correct."



console.log(user);

