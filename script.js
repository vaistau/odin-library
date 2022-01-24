const container = document.querySelector('#container');

let myLibrary = [];

const book = {
    info: function () {
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read
    }
}

const addBookToLibrary = function (newBook) {
    myLibrary.push(newBook);
}

const newBook = Object.create(book);
newBook.title = 'The Hobbid'
newBook.author = 'Ballsack'
newBook.pages = '420'
newBook.read = 'No'
addBookToLibrary(newBook);

container.innerHTML = myLibrary[0].info;
console.log(newBook.title)