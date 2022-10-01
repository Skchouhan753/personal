let data = [];
let fecthCountries = async () => {
  // make an API
 try{
  let res = await fetch(`https://restcountries.com/v3.1/all`)
  let data = await res.json();
  data.push(data)
  renderData(data)
  //return data;
 }
 catch(err){
    
 } 
};

let countryCard = (el) => {
  let cardDiv = document.createElement("div");
 
  // create a div element for each card and append the details
  // Note : use textContent instead of inneText while appending the DOM elements
  el.forEach((e)=>{
    cardDiv.innerHTML = null;
    let flag = document.createElement('img')
    flag.src = e.flags.png

    let name = document.createElement('p')
    name.textContent = e.name.common

    let population = document.createElement('p')
    population.textContent = e.population

    let region = document.createElement('p')
    region.textContent = e.region

    let capital = document.createElement('p')
    capital.textContent = e.capital
    // console.log(e)

    cardDiv.append(flag,name,population,region,capital)
  })

   return cardDiv;
};


let renderData = (data) => {
  let container = document.getElementById("all_countries");
  container.innerHTML=null;
 let renderData = (data)=>{
  data.forEach((el)=>{
    el.forEach((elem)=>{
      cap.textContent = `Capital : ${elem.capital}`;
      let region 
    })
  })
 }
  // loop through the cards and append to main container
  return container;
};

let sortLogic = (order, data) => {
  // handle sort logic here and return sorted data
  // it expectes two arguments type of sort (asc or desc) and data
  return data;
};

let filterByRegionLogic = async (data, regionName) => {
  // handle filter logic here and return filtered data
  // it expectes two arguments data and region
region = document.getElementById('filter_region').value;
let res = await fetch(`https://restcountries.com/v3.1/all`)
let data = await res.json();
renderData(data)
  return filteredData
};

let handleSortAndFilter = () => {
// handle sortLogic and filterByLogic here 
};

window.onload = async function () {
  // onload fetch Countries from the `https://restcountries.com/v3.1/all`
  // add change event listeners to sort and filter
  fecthCountries()

};

let main = async ()=>{
  try{
    let data = await fecthCountries()
    // mydata= el
    countryCard(data)
    // console.log(data)
  }catch(err){
  }
}

// main()
// let mymain =  ()=>{
//   let data = countryCard()
 
//   // countryCard(data)
//   console.log(data)
// }
// mymain()


if (typeof exports !== "undefined") {
  module.exports = {
    renderData,
    handleSortAndFilter,
    sortLogic,
    filterByRegionLogic,
    fecthCountries,
  };
}
