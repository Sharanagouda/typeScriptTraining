var Person = /** @class */ (function () {
    function Person(count, name) {
        this.count = count;
        this.name = name;
    }
    Person.prototype.displayName = function () {
        console.log(this.name + " Employee Code " + this.count);
    };
    return Person;
}());
var emp = new Person(1, "sharan");
console.log(emp.displayName);
