//Core library code lives here

//Create an array to store the books
let myLibrary = [];

//Create a base class constructor for a book object
function Book(title, author, pages, readYet){
    this.title = title
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
    this.info = function() {
        infoString = '"' + title + '" \nby ' + author + '\n' + pages + ' pages, \n' + readYet;
        return infoString;
    }
}

//Add the book to the library
function addBookToLibrary(Book){
    myLibrary.push(Book);
}   

//Add some permanent books to your library for function testing
const timeReborn = new Book("Time Reborn", "Lee Smolin", "274", "not read yet");
addBookToLibrary(timeReborn);
const dirt = new Book("Dirt", "William Brian Logan", "201", "partially read");
addBookToLibrary(dirt);
const physicsBook = new Book("The Physics Books", "Sterling Publishing House", "506", "not read yet");
addBookToLibrary(physicsBook);
const tradHealersCentralAustralia = new Book("Traditional Healers of Central Australia", "Various Authors", "304", "partially read");
addBookToLibrary(tradHealersCentralAustralia);


//Loop through the array and display each book - format it however you think would be best 
const bookSection = document.getElementById('bookDisplay');

for(let i=0; i< myLibrary.length; i++){
    let newBookLine = document.createElement('div');
    let arrayItem = myLibrary[i];
    let thisBook = arrayItem.info();
    console.log(thisBook);
    let bookPrintInfo = document.createTextNode(thisBook);
    newBookLine.appendChild(bookPrintInfo);
    bookSection.appendChild(newBookLine);
}

//Add a button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read

//Add a button to bring up the form

//Add a button on each book’s display to remove the book from the library
////////////////  need to associate your DOM elements with the actual book objects in some way.
//////////////    One easy solution is giving them a data-attribute that corresponds to the index of the library array.


//Add a button on each book’s display to change its read statu
//////////////  To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance


