var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log('eagle1: ', eagle1)

console.log('eagle1 has wings:', eagle1.hasWings)
console.log('eagle1 can fly:', eagle1.canFly)
console.log('eagle1 has feathers:', eagle1.hasFeathers)

var penguin = Object.create(bird)
penguin.canFly = false
console.log('penguin:', penguin)
console.log('penguin has feathers:', penguin.hasFeathers)
console.log('penguin can fly:', penguin.canFly)