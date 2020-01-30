var Counter = /** @class */ (function () {
    function Counter(count) {
        this.count = count;
    }
    Counter.prototype.increment = function () {
        return ++this.count;
        // console.log(` Count ${this.count}`);
    };
    Counter.prototype.decrement = function () {
        return --this.count;
        //console.log(` Count ${this.count}`);
    };
    return Counter;
}());
var countIncrement = new Counter(3);
console.log(countIncrement.increment());
var coundDecrement = new Counter(2);
console.log(coundDecrement.decrement());
