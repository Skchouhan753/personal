
async function addItem(){

    let id = document.getElementById('item_id').value;

    let image = document.getElementById('item_image').value;

    let title = document.getElementById('item_title').value;

    let desc = document.getElementById('item_desc').value;

    let price = document.getElementById('item_price').value;

    let rating = document.getElementById('item_rating').value;


    let send_this_data = {
                            id,
                            image,
                            title,
                            desc,
                            price,
                            rating,
                         }

   
    let res = await fetch(`http://localhost:3000/posts`,{
        method: "POST", 
       
        body : JSON.stringify(send_this_data),

        headers : {       
            'Content-Type' : 'application/json', 
        },
       
    })

    let data = await res.json()
    console.log(data);
}
//=============================================================
async function deleteItem(){
    
    let id = document.getElementById('delete_id').value;

    let res = await fetch(`http://localhost:3000/posts/${id}`,{

        method: 'DELETE',

        headers: {
            'Content-Type' : 'application/json',
        },
    })

    let data = await res.json()
    console.log(data);
}
//=========================================================================
let updateItem = async ()=>{
   
    let id = document.getElementById('update_id').value;

    let image = document.getElementById('update_image').value;

    let title = document.getElementById('update_title').value;

    let desc = document.getElementById('update_desc').value;

    let price = document.getElementById('update_price').value;

    let rating = document.getElementById('update_rating').value;

    let send_data = {
        image,
        title,
        desc,
        price,
        rating, 
    };
    
    let res = await fetch(`http://localhost:3000/posts/${id}`,{

        method: 'PATCH',  

        body: JSON.stringify(send_data),
        
        headers:{
            'Content-Type' : 'application/json',
        },
    });
    let data = await res.json();
    console.log(data);
}

//==================================================================
let replaceItem = async ()=> {
    let id = document.getElementById('replace_id').value;

    let image = document.getElementById('replace_image').value;

    let title = document.getElementById('replace_title').value;

    let desc = document.getElementById('replace_desc').value;

    let price = document.getElementById('replace_price').value;

    let rating = document.getElementById('replace_rating').value;

    let send_data = {
        image,
        title,
        desc,
        price,
        rating, 
    };

    let res = await fetch(`http://localhost:3000/posts/${id}`,{

        method: 'PUT',  

        body: JSON.stringify(send_data),
        
        headers:{
            'Content-Type' : 'application/json',
        },
    });
    let data = await res.json();
    console.log(data);
}