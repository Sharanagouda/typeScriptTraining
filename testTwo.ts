
class Counter  {
    count: number;
    
    constructor(count: number) {
        this.count = count;
    }
    
    increment() {
       return ++this.count;
       // console.log(` Count ${this.count}`);
    }
    decrement(){
       return --this.count;
        //console.log(` Count ${this.count}`);
    }
}

let countIncrement = new Counter(3);
console.log(countIncrement.increment()); 

let coundDecrement =new Counter(2);
console.log(coundDecrement.decrement());
