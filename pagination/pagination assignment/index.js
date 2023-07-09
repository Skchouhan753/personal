// Use the below API to fetch the comments.
// API:- https://jsonplaceholder.typicode.com/comments
// There are total 500 comments.
// One page will show 20 comments.
// Show the page number links only to 5 pages.
// Example:-
// If the user is at page 5, the page numbers shown will be :-
// page-3, page-4, page-5, page-6, page-7
//https://jsonplaceholder.typicode.com/comments
let i=1;
async function getData(i){
    let res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${i}&_limit=20`)
    let data = await res.json()
    console.log(data)
    append(data)
}
getData()
function next(){
    if(i===500){
        i=500
    }else{
        i++;
    }
    getData(i)
}
function Previous(){
    if(i===0){
        i=0
    }else{
        i--;
    }
    getData(i)
}

let container = document.getElementById('container')
function append(data){
    container.innerHTML = null;
    data.forEach((el)=>{
        let div = document.createElement('div')
        let name = document.createElement('h3')
        name.innerText = el.name
        let email = document.createElement('p')
        email.innerText = "email : "+el.email
        let body = document.createElement('p')
        body.innerText = el.body
        div.append(name,email,body)
        container.append(div)
    })
}