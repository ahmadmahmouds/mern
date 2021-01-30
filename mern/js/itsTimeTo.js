class Card {
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
        
    }
}
class Unit extends Card{
    constructor(name,cost,resilience,power){
        super(name,cost);
        this.resilience=resilience;
        this.power=power;
    }
    attack(target){
        if( target instanceof Uint){
            target.resilience-=this.power;   
        }
        else{
            throw new Error( "Target must be a unit!" );
        }
    
      

    }
}

class Effect  extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost)
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat=="resilience"){
                target.res+=this.magnitude;
                if(this.magnitude>0){
                target.text=`increase targets resilience by" ${this.magnitude}`;
                }
                else{
                    target.text=`decrease targets resilience by" ${this.magnitude}`;
                }
            }
            if(this.stat=="power"){
                target.power+=this.magnitude;
                if(this.magnitude>0){
                    target.text=`increase targets power by" ${this.magnitude}`;
                    }
                    else{
                        target.text=`decrease targets power by" ${this.magnitude}`;
                    }
            }
        } 
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
RedBeltNinja =new Unit("Red Belt Ninja", 3,3,4);
 BlackBeltNinja =new Unit("Black Belt Ninja", 4,5,4);
HardAlgorithm = new Effect("Hard Algorithm", 2 ,3,"resilience");
HardAlgorithm.play(RedBeltNinja);
console.log(RedBeltNinja.res);
BlackBeltNinja =new Unit("Black Belt Ninja", 4,5,4);
UnhandledPromiseRejection= new Effect("Unhandled Promise Rejection", 1 , -2,"resilience" );
UnhandledPromiseRejection.play(RedBeltNinja);
PairProgramming =new Effect("Pair Programming", 3 , 2, "power");
PairProgramming.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);
