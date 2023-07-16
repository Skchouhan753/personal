let search = document.getElementById("search");
// search.addEventListener("input", getDate);
//                  or
search.addEventListener("keyup", () => {

  // debouncing(getData,2000); // debouncing without clousers

  debouncingResult(); // debouncing with clousers

  // throttling(getData, 2000);  // throttling without clousers

  // throttlingResult();    // throttling with clousers
});

async function getData() {
  try {
    let res = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=721fecbb&s=${search.value}`
    );
    let data = await res.json();
    let mydata = data.Search;
    if (mydata != undefined) {
      console.log(mydata);
      appendData(mydata);
    }
  } catch (err) {
    console.log(err);
  }
};

// --------------or---------------
// let search = document.getElementById("search");
// search.addEventListener("change",main);
// function main(){
//     console.log(search.value);
// }
let container = document.getElementById("container");
function appendData(data) {
  container.innerHTML = null;
  data.forEach((element) => {
    let div = document.createElement("div");
    let poster = document.createElement("img");
    poster.src = element.Poster;
    let title = document.createElement("h3");
    title.innerText = element.Title;
    let type = document.createElement("h3");
    type.innerText = element.Type;
    let release_year = document.createElement("h3");
    release_year.innerText = `Release Year: ${element.Year}`;
    let imdb_rating = document.createElement("h3");
    imdb_rating.innerText = element.imdbID;
    div.append(poster, title, type, release_year, imdb_rating);
    container.append(div);
  });
};

//-----------------Debouncing-----------------
// let id;
// function debouncing(getData,delay) {
//     if(id){
//         clearTimeout(id)
//     }
//     id = setTimeout(function(){
//         getData()
//     },delay)
// };
//-------------------Debouncing with Clousers-----------------
function Debouncing(getData, delay) {
  let id;
  return function () {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      getData();
    }, delay);
  };
};
let debouncingResult = Debouncing(getData, 1000);
//-----------------Throttling------------------
// let flag = false;
// function throttling(getData, delay) {
//   if (flag) {
//     return;
//   }
//   getData();
//   flag = true;
//   setTimeout(function () {
//     flag = false;
//   }, delay);
// };
//--------------------Throttling with Clousers-----------------
// function Throttling(getData, delay) {
//   let flag = false;
//   return function () {
//     if (flag) {
//       return;
//     }
//     getData();
//     flag = true;
//     setTimeout(function () {
//       flag = false;
//     }, delay);
//   };
// };

// let throttlingResult = Throttling(getData, 1000);
