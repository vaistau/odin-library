const libraryBooks = document.getElementById('library-books');

//book constructor
const book = function(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status;
    }

//creates book using constructor, pushes it to library, and displays it
let library = [];

const addBook = function (title, author, status) {
    const newBook = new book(title, author, status);
    library.push(newBook);
    render();
}

//example books
addBook('The Hobbit', 'Your Mom', 'Read');
addBook('The Hobbid', 'Your Dad', 'Not read');

//creates DOM elements needed to display last book added to library array
function render () {
        const newBookContainer = document.createElement('div');
        newBookContainer.className = 'new-book-container';
        libraryBooks.appendChild(newBookContainer);
    
        const newBookTitle = document.createElement('div');
        newBookTitle.className = 'new-title';
        newBookTitle.textContent = library[library.length - 1].title;
        newBookContainer.appendChild(newBookTitle);
    
        const newBookAuthor = document.createElement('div');
        newBookAuthor.className = 'new-author';
        newBookAuthor.textContent = library[library.length - 1].author;
        newBookContainer.appendChild(newBookAuthor);
    
        const newBookStatus = document.createElement('button');
        newBookStatus.className = 'new-status-button';
        newBookStatus.innerHTML = library[library.length - 1].status;
        newBookContainer.appendChild(newBookStatus);
    
        const newDeleteButton = document.createElement('button');
        newDeleteButton.className = 'new-delete-button';
        newDeleteButton.innerHTML = 'Delete';
        newBookContainer.appendChild(newDeleteButton);
}