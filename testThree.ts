class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    displayName():string {
        return `Name ${this.name}`;
    }
}

class Employee extends Person {
    empCode: number;
    
    constructor(empcode: number, name:string) {
        super(name);
        this.empCode = empcode;
        this.name = name;
       
    }
    
    dislayName(): string {
        console.log(this.displayName());
        return `Name: ${this.name} Employee Code: ${this.empCode}`;
    }


}

let emp = new Employee(100, "sharan");
console.log(emp.dislayName()); 