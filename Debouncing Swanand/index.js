
let search = document.getElementById("search");
// search.addEventListener("input", getDate);
//                  or
search.addEventListener("keyup", ()=>{
    debouncing(getData,2000)
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
      appendData(mydata)
    }
  } catch (err) {
    console.log(err);
  }
}

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
        div.append(poster,title,type,release_year,imdb_rating);
        container.append(div);
  });
}
let id;
function debouncing(getData,delay) {
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        getData()
    },delay)
}

