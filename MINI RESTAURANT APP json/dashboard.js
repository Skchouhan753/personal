

//========================================================================
let getData = async (page_number)=>{
    try{

        let res = await fetch(`http://localhost:3000/posts?_page=${page_number}&_limit=3`)

        let data = await res.json() 
                                
        console.log(data); 
        appedData(data);
       
    }
    catch(error){
     console.log(error)
    }
}



let container = document.getElementById('container');

function appedData(data){                   

    container.innerHTML=null;

    data.forEach(function(element){         
        
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src=element.image;

        let title = document.createElement('p');
        title.innerText = element.title;   
        
        let price = document.createElement('p');
        price.innerText = element.price;   
        
        let rating = document.createElement('p');
        rating.innerText = element.rating;   

        let desc = document.createElement('p');
        desc.innerText = element.desc;   
        
        div.append(title,price,rating,desc);
        container.append(div);
    })
};

let showButtons = (result,per_page)=>{
    
    let btn_container = document.getElementById('btn_container');

    let buttons = Math.ceil(result / per_page); 

    for(let i = 1; i <= buttons; i++){

        let btn = document.createElement('button');
        btn.innerText = i

        btn.onclick = function (){
           
            getData(i)
        }
        window.onload = function(){
                getData(1)
        }

        btn_container.append(btn);
    }
}
showButtons(11,3)


