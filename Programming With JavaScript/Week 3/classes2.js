class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lighstOn = lightsOn;
    }

    toggleLights(){
        this.lighstOn = !this.lighstOn;
    }

    lightStatus(){
        console.log('Lights on?', this.lighstOn);
    }

    getSelf(){
        console.log(this);
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train{
    constructor(passengers, highSpeedOn, color, lighstOn){
        super(color, lighstOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    // adding new method
    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    // overriding toggleLights() method
    toggleLights(){
        super.toggleLights();
        super.lightStatus();
        console.log('Lights are 100% operational.');    // my custom code
    }
}
