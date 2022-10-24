class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        if( target instanceof Unit ) {
            target.res -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
    showStats(){
        console.log(`\nName: ${this.name}\nCost: ${this.cost}\nPower: ${this.power}\nResilience: ${this.res}`)
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    triggerEffect(target){
        if( target instanceof Unit ) {
            if(this.stat == 'res'){
                target.res += this.magnitude;
            } else {
                target.power += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

// Turn 1
const RedBeltNinja = new Unit('Red Belt Ninja', 3, 3, 3);
const HardAlgorithm = new Effect('Hard Algorithm', 2, `increase target's resilience by 3`, 'res', 3);
HardAlgorithm.triggerEffect(RedBeltNinja);

// Turn 2
const BlackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);
const UnhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, `reduce target's resilience by 2`, 'res', -2);

// Turn 3
const PairProgramming = new Effect('Pair Programming', 3, `increase target's resilience by 2`, 'power', 2);
PairProgramming.triggerEffect(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);

// Results
RedBeltNinja.showStats();
BlackBeltNinja.showStats();
