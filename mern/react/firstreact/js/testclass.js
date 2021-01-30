// parent Vehicle class
class Ninja {
     
    constructor(name,health,speed,strength) {
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }

    
 sayName=()=> {
     console.log(`ninja name is:${this.name}`)
 }
 
  showStats=()=>{ 
      console.log(`the ninja name is ${this.name} health : ${this.health} speed : ${this.speed}`)
  }

  drinkSake=()=> {
      this.health+=10;
  }



}

ninja1 =new Ninja("ahmad",0);
ninja1.drinkSake();
console.log(ninja1.health);


