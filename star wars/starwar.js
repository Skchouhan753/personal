


// let url = `https://swapi.dev/api/people/?search=${}`

async function starWars(){
    
    try{
        let query = document.getElementById('query').value

        let url = `https://swapi.dev/api/people/?search=${query}`

        let res = await fetch(url);

        let data = await res.json();

        console.log(data)

    }catch(err){

    }
}
starWars()