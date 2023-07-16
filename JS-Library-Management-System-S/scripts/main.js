// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Books Data
let booksData = [];

async function fetchData(bookURL) {
  try {
    let res = await fetch(bookURL);
    let data = await res.json();
    // console.log(data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
}
window.addEventListener("load", function () {
  fetchData(bookURL);
});

function appendData(data) {
  mainSection.innerHTML = null;
  data.forEach((element) => {
    let card_list = document.createElement("div");

    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-id", element.id);

    let card_img = document.createElement("div");
    card_img.className = "card-img";

    let image = document.createElement("img");
    image.src = element.image;

    let card_body = document.createElement("div");
    card_body.className = "card-body";

    let title = document.createElement("h4");
    title.className = "card-title";
    title.innerText = element.title;

    let author = document.createElement("p");
    author.className = "card-author";
    author.innerText = element.author;

    let category = document.createElement("p");
    category.className = "card-category";
    category.innerText = element.category;

    let price = document.createElement("p");
    price.className = "card-price";
    price.innerText = element.price;

    let link = document.createElement("a");
    link.className = "card-link";
    link.setAttribute("data-id", element.id);
    link.href = "#";
    link.innerText = "Edit";
    link.addEventListener("click", (e) => {
      e.preventDefault();
      editBook(element);
    });

    let btn = document.createElement("button");
    btn.className = "card-button";
    btn.setAttribute("data-id", element.id);
    btn.innerText = "DELETE";
    btn.addEventListener("click", () => {
      deleteBtn(element.id);
    });
    card_img.append(image);
    card_body.append(title, author, category, price, link, btn);
    card.append(card_img, card_body);
    card_list.append(card);
    mainSection.append(card_list);
  });
}

bookCreateBtn.addEventListener("click", addBook);
async function addBook() {
  let books = {
    author: bookAuthorInput.value,
    category: bookCategoryInput.value,
    image: bookImageInput.value,
    price: bookPriceInput.value,
    title: bookTitleInput.value,
  };
  try {
    let res = await fetch(`${baseServerURL}/books`, {
      method: "POST",
      body: JSON.stringify(books),
      headers: {
        "Content-type": "application/json",
      },
    });
    let data = res.json();
    // console.log(data);
    fetchData(bookURL);
  } catch (err) {
    console.log(err);
  }
}

async function deleteBtn(id) {
  try {
    let res = await fetch(`${baseServerURL}/books/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.log(err);
  }
  fetchData(bookURL);
};

function editBook(element) {
    updateBookIdInput.value = element.id;
    updateBookTitleInput.value = element.title;
    updateBookImageInput.value = element.image;
    updateBookAuthorInput.value = element.author;
    updateBookCategoryInput.value = element.category;
    updateBookPriceInput.value = element.price;
    updatePriceBookId.value = element.id;
    updatePriceBookPrice.value = element.price;
};
updateBookBtn.addEventListener("click",updateBook);
async function updateBook(){
  let data = {
    title:updateBookTitleInput.value,
    image:updateBookImageInput.value,
    author:updateBookAuthorInput.value,
    category:updateBookCategoryInput.value,
    price:updateBookPriceInput.value
  };
  try{
    let res = await fetch(`${baseServerURL}/books/${updateBookIdInput.value}`,{
      method:"PATCH",
      body:JSON.stringify(data),
      headers:{
        "Content-type":"application/json"
      }

    })
  }catch(err){
    console.log(err);
  }
  fetchData(bookURL);
};
updatePriceBookPriceButton.addEventListener("click",updatePrice);
async function updatePrice(){
  let bookPrice = {
    price:updatePriceBookPrice.value
  };
  try{
    let res = await fetch(`${baseServerURL}/books/${updateBookIdInput.value}`,{
      method:"PATCH",
      body:JSON.stringify(bookPrice),
      headers:{
        "Content-type":"application/json"
      }
    })
  }catch(err){
    console.log(err);
  }
  fetchData(bookURL);
};
sortAtoZBtn.addEventListener("click",function(){
  fetchData(`${bookURL}?_sort=price&_order=asc`)
});
sortZtoABtn.addEventListener("click",function(){
  fetchData(`${bookURL}?_sort=price&_order=desc`)
});
filterClassic.addEventListener("click",()=>{
  fetchData(`${bookURL}?category=Classic`);
});
filterFantasy.addEventListener("click",()=>{
  fetchData(`${bookURL}?category=Fantasy`);
});
filterMystery.addEventListener("click",()=>{
  fetchData(`${bookURL}?category=Mystery`);
});
/*

*/
