let getData = async ()=>{
    try{

        let res = await fetch(`http://localhost:3000/posts`)

        let data = await res.json() 
                                
        console.log(data); 
        appedData(data);
        showButtons(data.length,5)
    }
    catch(error){
     console.log(error)
    }
}
getData();


let container = document.getElementById('container');

function appedData(data){                   

    data.forEach(function(element){         

        let p= document.createElement('p');
        p.innerText = element.title;        

        container.append(p);
    })
};

let showButtons = (result,per_page)=>{
    
    let btn_container = document.getElementById('btn_container');

    // let result = 60; // as we have 11 result in m database

    // let per_page = 3;

    let buttons = Math.ceil(result / per_page); // 3.66 --> 4 buttons

    for(let i = 0; i <= buttons; i++){

        let btn = document.createElement('button');
        btn.innerText = i

        btn.onclick = function (){
            pagination(i);
        }

        btn_container.append(btn);
    }

}

//================= pagination ====================

let pagination = (page_Number)=> {
    console.log(page_Number);

    
}
