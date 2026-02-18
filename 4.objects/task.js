function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Мария", "female", 35);
let student2 = new Student("Василий", "male", 22);
let student3 = new Student("Ирина", "female", 19);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {
        console.log("Невозможно добавить оценки: студент отчислен.");
        return false;
    }
    this.marks.push(...marks);
    return true;

}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }
    const sum = this.marks.reduce((accumulator, currentMark) => accumulator + currentMark, 0);

    return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;

    this.excluded = reason;
    this.reason = reason;

    return true;
}

