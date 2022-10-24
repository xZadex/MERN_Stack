class Ninja {
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(this.name)
        console.log(this.health)
        console.log(this.speed)
        console.log(this.strength)
    }
    drinkSake(){
        if(this.health == 100){
            return console.log('Your health is already full!')
        } else {
            this.health += 10
            console.log('You drink some Sake and gain 10 Health!')
        }
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
// ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();