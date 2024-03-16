class Person {
    constructor(public id: number, public first_name: string, public last_name: string) { }

    get fullName() {
        return this.first_name + ' ' + this.last_name;
    }
}

class Student extends Person {
    constructor(public student_id: number, first_name: string, last_name: string) {
        super(student_id, first_name, last_name);
    }

    takeTest() {
        return("You can take a test");
    }
}

let student_1 = new Student(1,"Rezwan","Ahmed")
student_1.id = 22;

console.log(student_1.fullName)
console.log(student_1.takeTest())
console.log(student_1.id)

