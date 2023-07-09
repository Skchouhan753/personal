

//========================================================================
let getData = async (page_number)=>{
    try{

        let res = await fetch(`http://localhost:3000/posts?_page=${page_number}&_limit=3`)

        let data = await res.json() // here json is not same as JSON, json is collecting data
                                // JSON converts data to array of object
        console.log(data); 
        appedData(data);
        // showButtons(data.length,3)
    }
    catch(error){
     console.log(error)
    }
}
// getData();


let container = document.getElementById('container');

function appedData(data){                   

    container.innerHTML=null;

    data.forEach(function(element){         // data.forEach(function({title}){append your data})

        let p= document.createElement('p');
        p.innerText = element.title;        // p.innerText = title

        container.append(p);
    })
};

let showButtons = (result,per_page)=>{
    
    let btn_container = document.getElementById('btn_container');

    // let result = 60; // as we have 11 result in m database

    // let per_page = 3;

    let buttons = Math.ceil(result / per_page); // 3.66 --> 4 buttons

    for(let i = 1;i <= buttons; i++){

        let btn = document.createElement('button');
        btn.innerText = i

        btn.onclick = function (){
            // pagination(i);
            getData(i)
        }
        window.onload = function(){
            
                // pagination(i);
                getData(1)
            
        }

        btn_container.append(btn);
    }
}
showButtons(11,3)

//================= pagination ====================

// let pagination = (page_Number)=> {
//     console.log(page_Number);

    
// }

// window.onload = function(data){  
//     appedData(data)
// }