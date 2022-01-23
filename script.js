let myLibrary = [];

const book = {
    info: function() {
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read
    }
}

const newBook = Object.create(book);
newBook.title = 'The Hobbid'
newBook.author = 'Ballsack'
newBook.pages = '420'
newBook.read = 'No'

const container = document.querySelector('#container');
container.innerHTML = newBook.title;

const addBookToLibrary = function (newBook) {
    myLibrary.push(newBook);
}