// Q3: Library Management System (Classes + Objects)

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`Book "${this.title}" is already issued.`);
    } else {
      this.isIssued = true;
      console.log(`Book "${this.title}" has been issued successfully.`);
    }
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`Book "${this.title}" is already available in the library.`);
    } else {
      this.isIssued = false;
      console.log(`Book "${this.title}" has been returned successfully.`);
    }
  }
}

// Create an array of book objects
const books = [
  new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
  new Book("Clean Code", "Robert C. Martin", "ISBN002", true),
  new Book("JavaScript: The Good Parts", "Douglas Crockford", "ISBN003"),
  new Book("You Don't Know JS", "Kyle Simpson", "ISBN004"),
];

// Display all available books (not issued)
console.log("Available books:");
books
  .filter((book) => !book.isIssued)
  .forEach((book) => {
    console.log(
      `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`
    );
  });

// Allow a user to issue a book by searching ISBN
function issueBookByISBN(isbn) {
  const book = books.find((b) => b.isbn === isbn);
  if (!book) {
    console.log(`No book found with ISBN: ${isbn}`);
    return;
  }
  book.issueBook();
}

// Demo: try issuing a book
console.log("\nIssuing book with ISBN003:");
issueBookByISBN("ISBN003");

// To run: node Q3_library_system.js
