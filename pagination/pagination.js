
let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-11&sortBy=publishedAt&apiKey=44ba08de299b41b4806efee40a21fc80`
let mydata;
let getData = async ()=>{
    try{
        let res = await fetch(url)
        let data = await res.json()

        mydata = data.articles
        // console.log(mydata)
        append(0)
    }catch(err){

    }
}
getData()

let container = document.getElementById('container')

function append(index){
    
    container.innerHTML = null

    let start = 10 * index
    let end = start + 10; // or start * (index+1)-1
    let per_page_data = mydata.slice(start,end);

    per_page_data.forEach(function(el){
        console.log(el)
        let div = document.createElement('div')

        let author = document.createElement('p')
        author.innerText = el.author
    
        let content = document.createElement('p')
        content.innerText = el.content

        let description = document.createElement('p')
        description.innerText = el.description

        let publishedAt = document.createElement('p')
        publishedAt.innerText = el.publishedAt

        let source = document.createElement('p')
        source.innerText = el.source

        let title = document.createElement('p')
        title.innerText = el.title

        let url = document.createElement('a')
        url.innerText = el.url

        let urlToImage = document.createElement('img')
        urlToImage.src = el.urlToImage

        div.append(urlToImage,title,author)
        container.append(div)

        buttons(index + 1);
    })
    
}

let btnContainer = document.getElementById('btnContainer')
function buttons(pageNo){
    btnContainer.innerHTML = null;

    let start = 1;

    if(pageNo > 1){
        start = pageNo-1;
    }

    for(let i = start; i < start + 9; i++){
        let btn = document.createElement('button')
        btn.innerText = i;
        
        btn.onclick = ()=>{
            append(i-1)
        }
        btnContainer.append(btn)
    }

}

// function pagination(index){

//     let start = 10 * index
//     let end = start * (index+1)-1; // or start + 10
//     let per_page_data = data.slice(start,end);
//     per_page_data.forEach(function(el){
//
//  }) 
//  }