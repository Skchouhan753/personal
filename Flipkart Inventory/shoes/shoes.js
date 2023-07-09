//https://dry-island-32080.herokuapp.com/api/shoe
async function getData(){
    let res = await fetch(`https://dry-island-32080.herokuapp.com/api/shoe`);
    let data = await res.json();
    console.log(data);
    append(data)
}
getData();

let container = document.getElementById('container')

function append(data){
    // container.innerHTML = null;
    data.forEach((el)=>{
        let div = document.createElement('div')

        let image = document.createElement('img')
        image.src = el.image

        div.append(image)
        container.append(div);
    })
}