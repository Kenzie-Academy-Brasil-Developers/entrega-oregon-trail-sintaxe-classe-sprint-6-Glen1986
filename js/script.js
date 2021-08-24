class Traveler {
    constructor(name, food, isHealthy) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

   hunt() {

     return `agora, ${this.name} tem mais ${this.food++} comida` ;  // sitting code here
   }
   eat() {
     this.food--
     if( this.food > 0 ){
     return `agora ${this.name} tem ${this.food} `;  // ${this.isHealthy = true}fetching code here
     }else if(this.food == 0){
     return `${this.name} esta ${this.isHealthy = false}`
     }
 
  }
}

class Wagon{
    constructor(capacity, list) {
        this.capacity = capacity;
        this.list = [];
    }

     getAvailableSeatCount() {
         let total = this.capacity;
         return `lugares: ${this.capacity}`;
     }
     join(a) {
       if(this.capacity >= 1){
       this.list.push(a);
       this.capacity = this.capacity -1;
       }
       return this.capacity
   }
     shouldQuarantine(list){
       console.log(this.name)
       console.log(this.list)
       let saude = [, , this.isHealthy]
       console.log(saude)
       if(this.food === 0){
         return true;
       }
       return false;
         //retorna true si hay una persona enferma
   }
     totalFood(){
   //retorna a quantidade total de comida dos pasageiros
     }
}
// Criar uma carro que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar trs viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
//console.log(henrietta)

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // No tem espao para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora est com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
