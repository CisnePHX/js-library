//Core library code here

//Create a base class constructor for a book object
function Book(title, author, pages, readYet){
    this.title = titlethis.author = author
    this.pages = pages
    this.readYet = readYet
    this.info = function() {
        console.log(title + " by " + author + ", " + pages + ", " + readYet)
    }
}