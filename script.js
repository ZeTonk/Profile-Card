// initialize book shelf array with some books
let books=["The Great Ghatsby", "To Kill a Mockingbird", "Pride and Prejudice", "Of Mice and Men"]

// add the book to the front using unshift
function addToFront(){
let bookInput = document.getElementById('bookInput');
let newBook = bookInput.value.trim();
console.log(newBook);
if(newBook){
    books.unshift(newBook);
    bookInput.value='';
    displayBooks();
}
}

// add book to the end using push method
function addToEnd(){
    let bookInput = document.getElementById('bookInput');
    let newBook = bookInput.value.trim();
    console.log(newBook);
    if(newBook){
        books.push(newBook);
        bookInput.value='';
        displayBooks();
    }
}

// remove book from the front using shift method
function removeFromFront(){
    if(books.length > 0){
        const removedBook = books.shift();
        console.log(removedBook);
        displayBooks();
    }
}

// Remove book from the end using pop method
function removeFromEnd(){
    if(books.length > 0){
        const removedBook = books.pop();
        console.log(removedBook);
        displayBooks();
    }
}

//display current books
function displayBooks(){
    let bookList = document.getElementById('bookList');
    let html = `<strong>Front of Shelf</strong><br>`;

    // loop to display the array elements
    books.forEach((i,index)=>{
        html += `${index + 1 }. ${i}<br>`;
    })


    html += `<strong>End of Shelf</strong>`;
    bookList.innerHTML= html;
}


//call displayBooks funciton
displayBooks();
console.log(books);