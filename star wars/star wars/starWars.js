// https://swapi.dev/api/people/?search=${query}

async function getData() {

    let query = document.getElementById('query').value

    let url = `https://swapi.dev/api/people/?search=${query}`

    let res = await fetch(url);

    let data = await res.json();

    // console.log(data.results)

    return data.results;


    // append(data.results)

}

function append(data) {
    let container = document.getElementById('results')

    let div = document.createElement('div')

    container.innerHTML = null;

    data.forEach(function (element) {

        let name = document.createElement('h4')
            name.innerText = element.name;

        let gender = document.createElement('h4')
            gender.innerText = "Gender : "+element.gender

        let height = document.createElement('h4')
            height.innerText = "Height : "+element.height
        
        let mass = document.createElement('h4')
            mass.innerText = "Mass : "+element.mass

        let birth_year = document.createElement('h4')
            birth_year.innerText = "Birth Year : "+element.birth_year

        let hair_color = document.createElement('h4')
            hair_color.innerText = "Hair Color : "+element.hair_color

        let skin_color = document.createElement('h4')
            skin_color.innerText = "Skin Color : "+element.skin_color

        let eye_color = document.createElement('h4')
            eye_color.innerText = "Eye Color : "+element.eye_color


        div.append(name,gender,height,mass,birth_year,hair_color,skin_color,eye_color)
        container.append(div)
    })
}

//=================== debounce ======================

async function main() {

    let data = await getData();
    console.log(data)
    append(data);

}

let id;

function debouncing(func, delay) {

    if (id) {
        clearTimeout()
    }

    id = setTimeout(function () {
        func();
    }, delay)
}

/*
birth_year:"19BBY"



films:(4) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
gender:"male"
hair_color:"blond"
height:"172"
homeworld:"https://swapi.dev/api/planets/1/"
mass:"77"
name:"Luke Skywalker"
skin_color:"fair"
*/

