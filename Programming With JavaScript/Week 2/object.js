function meal(animal) {
    animal.food += 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);
console.log(dog.food);