"use strict";
class Person {
    constructor(id, first_name, last_name) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
    }
    get fullName() {
        return this.first_name + ' ' + this.last_name;
    }
}
class Student extends Person {
    constructor(student_id, first_name, last_name) {
        super(student_id, first_name, last_name);
        this.student_id = student_id;
    }
    takeTest() {
        return ("You can take a test");
    }
}
let student_1 = new Student(1, "Rezwan", "Ahmed");
student_1.id = 22;
console.log(student_1.fullName);
console.log(student_1.takeTest());
console.log(student_1.id);
