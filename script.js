const libraryContainer = document.getElementById('library-container');

//book constructor
const book = function(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }

//creates book with constructor and pushes it to library
let library = [];

const addBook = function (title, author, read) {
    const newBook = new book(title, author, read);
    library.push(newBook);
}

//example books
addBook('The Hobbit', 'Your Mom', false);
console.log(library[0].title)

//add DOM elements needed to display new books
for (let i = 0; i < library.length; i++) {
    const newBookContainer = document.createElement('div');
}