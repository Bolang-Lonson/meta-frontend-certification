class Bird {
    useWings(){
        console.log('Flying!')
    }
}

class Eagle extends Bird {
    useWings(){
        super.useWings()
        console.log('Barely flapping!')
    }
}

class Penguin extends Bird {
    useWings(){
        console.log('Diving!')
    }
}

let baldEagle = new Eagle()
let kingPenguin = new Penguin()
baldEagle.useWings()    // 'Flying! Barely flapping!'
kingPenguin.useWings()  // 'Diving!'