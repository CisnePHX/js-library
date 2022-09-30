//Core library code here

//Create an array to store the books
let myLibrary = [];




//Create a base class constructor for a book object
function Book(title, author, pages, readYet){
    this.title = titlethis.author = author
    this.pages = pages
    this.readYet = readYet
    this.info = function() {
        infoString = title + " by " + author + ", " + pages + ", " + readYet;
        return infoString;
    }
}

//Add the book to the library
function addBookToLibrary(Book){
    myLibrary.push(Book);
}   