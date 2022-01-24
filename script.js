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
    
        const newTitleContainer = document.createElement('div');
        newTitleContainer.className = 'new-title-container';
        newBookContainer.appendChild(newTitleContainer);
        const newBookTitle = document.createElement('div');
        newBookTitle.className = 'new-title';
        newBookTitle.innerHTML = library[library.length - 1].title;
        newTitleContainer.appendChild(newBookTitle);
    
        const newAuthorContainer = document.createElement('div');
        newAuthorContainer.className = 'new-author-container';
        newBookContainer.appendChild(newAuthorContainer);
        const newBookAuthor = document.createElement('div');
        newBookAuthor.className = 'new-author';
        newBookAuthor.innerHTML = library[library.length - 1].author;
        newAuthorContainer.appendChild(newBookAuthor);
    

        const newStatusContainer = document.createElement('div');
        newStatusContainer.className = 'new-status-container';
        newBookContainer.appendChild(newStatusContainer);
        const newBookStatus = document.createElement('button');
        newBookStatus.className = 'new-status-button';
        newBookStatus.innerHTML = library[library.length - 1].status;
        newStatusContainer.appendChild(newBookStatus);
    
        const newDeleteContainer = document.createElement('div');
        newDeleteContainer.className = 'new-delete-container';
        newBookContainer.appendChild(newDeleteContainer);
        const newDeleteButton = document.createElement('button');
        newDeleteButton.className = 'new-delete-button';
        newDeleteButton.textContent = 'Delete';
        newDeleteContainer.appendChild(newDeleteButton); 

        libraryBooks.appendChild(newBookContainer);
}