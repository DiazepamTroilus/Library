"use strict";
const newBookbtn = document.querySelector(".new-book-btn");
const modal = document.getElementById("book-modal");
const closeModal = document.querySelector(".close-modal");
const radio1 = document.getElementById("rd1");
const form = document.getElementById("form-add");
const bookName = document.querySelector("book-name");
const authorName = document.querySelector("author-name");
const numberPages = document.querySelector("number-pages");
const haveRead = document.querySelector("read-status");
const cards = document.querySelector(".cards");

newBookbtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.showModal();
});

closeModal.addEventListener("click", function (e) {
  modal.close();
});
modal.addEventListener("submit", function (e) {
  e.preventDefault();
  const radioSelection = rd1.checked ? true : false;
  addBookToLibrary(
    new Book(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      radioSelection
    )
  );
  displayBooks(
    myLibrary.filter(function (el) {
      return el.title === e.target[0].value;
    })[0]
  );
  form.reset();

  console.log(myLibrary);
  modal.close();
});

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
function displayBooks(x) {
  const uniqueId = "el" + Date.now();
  cards.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id=${uniqueId}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>book</title>
      <path
        d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z"
      />
    </svg>
    <p>Name: <span class="book-name">${x.title}</span></p>
    <p>Author: <span class="author-name">${x.author}</span></p>
    <p>Number of pages: <span class="number-pages">${x.pages}</span> pages</p>
    <p>Have read?... <span class="read-status">${x.haveRead}</span></p>
    <div class="card-actions">
      <button class="trash-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>delete</title>
          <path
            d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z"
          />
        </svg>
      </button>
      <button class="toggle-btn">Toggle Read</button>
    </div>
    </div>`
  );
  document
    .querySelector(`#${uniqueId} .card-actions .trash-btn`)
    .addEventListener("click", function () {
      document.getElementById(uniqueId).remove();
    });
  document
    .querySelector(`#${uniqueId} .card-actions .toggle-btn`)
    .addEventListener("click", function () {
      document.querySelector(`#${uniqueId} p .read-status`).textContent =
        document.querySelector(`#${uniqueId} p .read-status`).textContent ===
        "true"
          ? "false"
          : "true";
    });
}
