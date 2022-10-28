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
        infoString = '   "' + title + '" \nby ' + author + '\n' + pages + ' pages, \n' + readYet;
        return infoString;
    }
}

//Add the book to the library
function addBookToLibrary(Book){
    myLibrary.push(Book);
}   

function removeBookFromLibrary(arrayNumber){
    myLibrary.splice(arrayNumber, arrayNumber);
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

//function to rotate book border colors
function randomBorderColor(){
    let value = Math.floor(Math.random() * 10); //random values 0 - 9
    let borderValues = "";

    switch(value){
        case 0:
            borderValues = "8px solid #FFFF00";
            break;
        case 1:
            borderValues = "8px solid #FFA500";
            break;
        case 2:
            borderValues = "8px solid #0000FF";
            break;
        case 3:
            borderValues = "8px solid #008000";
            break;
        case 4:
            borderValues = "8px solid #4B0082";
            break;
        case 5:
            borderValues = "8px solid #EE82EE";
            break;
        case 6:
            borderValues = "8px solid #5EDFDB";
            break;
        case 7:
            borderValues = "8px solid #CD00E1";
            break;
        case 8:
            borderValues = "8px solid #64F651";
            break;
        case 9:
            borderValues = "8px solid #D2B48C";
            break;
    }
    return borderValues;
}

//Loop through the array and display each book - format it however you think would be best 
const bookSection = document.getElementById('bookDisplay');

function buildLibrary(){
    for(let i=0; i< myLibrary.length; i++){
        let newBookLine = document.createElement('div');
        let arrayItem = myLibrary[i];
        let arrayNumber = 0;
        let thisBook = arrayItem.info();
        let bookPrintInfo = document.createTextNode(thisBook);
        newBookLine.appendChild(bookPrintInfo);
        //add border color
        let borderColor = randomBorderColor();
        newBookLine.style.border = borderColor;
        newBookLine.style.lineHeight = 2.5;
        newBookLine.style.borderRadius = "25px";
        newBookLine.style.textIndent = "40px";
        bookSection.appendChild(newBookLine);
        //Add button to be able to remove book from Libaray
        const button = document.createElement('button');
        button.innerText = 'Remove';
        button.addEventListener('click', () =>{
            alert('Book Deleted');
        })
        bookSection.appendChild(button);
        arrayNumber++;
    }
}
function deleteLibraryDisplay(){
    while (bookSection.hasChildNodes()){
        bookSection.removeChild(bookSection.firstChild);
    }
}
//Add a button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read, and a button to close the form
function openAddBook(){
    document.getElementById("bookForm").style.display = "block";
}
function closeForm(){
    document.getElementById("bookForm").style.display = "none";
}

//Add a button on each book’s display to remove the book from the library
////////////////  need to associate your DOM elements with the actual book objects in some way.
//////////////    One easy solution is giving them a data-attribute that corresponds to the index of the library array.
function addNewBook(){
    const form = document.getElementById("addForm");
    const newTitle = form.elements['title'];
    const newAuthor = form.elements['author'];
    const newPages = form.elements['pages'];
    let addTitle = newTitle.value;
    let addAuthor = String(newAuthor.value);
    let addPages = String(newPages.value);
    const newLibraryBook = new Book(newTitle, newAuthor, newPages, 'unread');
    addBookToLibrary(newLibraryBook);
    deleteLibraryDisplay();
    buildLibrary();
}
buildLibrary();

//Add a button on each book’s display to change its read status
//////////////  To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance


