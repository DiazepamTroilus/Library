"use strict";
console.log("hello!");
const myLibrary = [];
function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      haveRead ? "have read" : "not read yet"
    }`;
  };
}
function addBookToLibrary(obj) {
  myLibrary.push(obj);
}
const book1 = new Book("Cunt", "Slut", 420, false);
console.log(book1.info());
