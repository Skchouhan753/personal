
async function search(){ 
    let query = document.getElementById('search').value
    let teslaApi = `https://newsapi.org/v2/everything?q=${query}&from=2022-08-12&sortBy=publishedAt&apiKey=44ba08de299b41b4806efee40a21fc80`
    
        try{
            let tes = await fetch(teslaApi)
            let tdata = await tes.json()
            let myTesla = tdata.articles
            
            // console.log(myTesla)
            append(myTesla)
        }catch(err){
    
        }
   
}
// search()


let key = "44ba08de299b41b4806efee40a21fc80"
// let url = `https://newsapi.org/v2/top-headlines/sources?category=entertainment&apiKey=44ba08de299b41b4806efee40a21fc80`
let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=44ba08de299b41b4806efee40a21fc80`
async function getData(){
    try{
        let res = await fetch(url)
        let data = await res.json()
        let mydata = data.articles
        // console.log(mydata[0].source.name)
        // console.log(mydata)
        append(mydata)
    }catch(err){

    }
}
getData()
let container = document.getElementById('container')

function append(data){
    container.innerHTML = null;

    data.forEach(function(el){
        let div = document.createElement('div')
        div.setAttribute('id','dv')
        
        let author = document.createElement('h4')
        author.innerText = "Author : "+el.author

        let content = document.createElement('h4')
        content.innerText = "Content : "+el.content

        let title = document.createElement('h4')
        title.innerText = "Title : "+el.title

        let description = document.createElement('h4')
        description.innerText = "News : "+el.description

        let image = document.createElement('img')
        image.src = el.urlToImage

        let name = document.createElement('h4')
        name.innerText = "Source : "+el.source.name
        
        div.append(image,title,name,author,content,description)
        container.append(div)
    })
}


function entertainment(){
    window.location.href="../entertainment/entertainment.html"
}
function sports(){
    window.location.href="./sports.html"
}
function technology(){
    window.location.href="../technology/technology.html"
}
