class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        if (this._state < 0) {
            this._state = 0
        }
        this._state = Math.min(this._state * 1.5, 100);

    }

    set state(state) {
        if (state >= 100) {
            this._state = 100
        } else if (state < 0) {
            this._state = 0
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }

    }

    findBookBy(type, value) {
        const book = this.books.find(book => book[type] === value);
        return book || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);

        if (bookIndex === -1) {
            return null;
        }

        return this.books.splice(bookIndex, 1)[0];
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (typeof mark !== 'number' || mark < 2 || mark > 5) {
            return false;
        }
        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
        return true;
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject] || this.marks[subject].length === 0) {
            return 0;
        }
        const sum = this.marks[subject].reduce((accumulator, currentMark) => accumulator + currentMark, 0);
        return sum / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        }
        const sumOfAverages = subjects.reduce((total, subject) => {
            const averageBySubject = this.getAverageBySubject(subject);
            return total + averageBySubject;
        }, 0);

        return sumOfAverages / subjects.length;
    }
}



