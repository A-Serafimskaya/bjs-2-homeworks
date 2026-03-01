
// task 1

function parseCount(string) {
    let number = Number.parseFloat(string);
    if (Number.isNaN(number)) {
        throw new Error("Невалидное значение");
    } else {
        return number;
    }
}

function validateCount(string) {
    try {
        let number = parseCount(string);
        return number;
    } catch (error) {
        return error;
    }
}

// task 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b <= c || b + c <= a || c + a <= b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = 0.5 * this.perimeter;
        let s = Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c)));
        ;
        return validateCount(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        let t = new Triangle(a, b, c);
        return t; 
    } catch {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}




