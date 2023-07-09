
async function addPost(){
    // accept value

    let id = document.getElementById('id').value;

    let title = document.getElementById('title').value;

    let author = document.getElementById('author').value;

// 1st method 
    // let send_this_data = {
    //     id: id,
    //     title: title,
    //     auther: author
    // }

// 2nd method (only when key and value names are same ex- here key is id & value is also id)
    let send_this_data = {
                            id,
                            title,
                            author
                         }

    // send this data to server
    // for that i need to talk to server
    // how do we talk to server?
    // make GET request using fetch
    // how many arguments that we can pas to fetch?
    // have we ever told which request to make? (GET)
    // What is the default request fetch makes? (GET)
    // if i want to make a different requests (post), should we tell fetch?
    // fetch (url, {})
    let res = await fetch(`http://localhost:3000/posts`,{
        method: "POST", // method is reserved keyword
        // body is to send data to server(body is reserved keyword)
        body : JSON.stringify(send_this_data),

        headers : {       
            'Content-Type' : 'application/json',  // we have to write in this syntax exactly same
        },
       
    })

    let data = await res.json()
    console.log(data);
}
//=======================================================================
async function deletePost(){
    
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
//====================================================================
let updatePost = async ()=>{
   
    let id = document.getElementById('update_id').value;

    let title = document.getElementById('update_title').value;

    let send_data = {
        title, 
    };

    // we want to update title of any post
    // do i want to access individual post? yes
    let res = await fetch(`http://localhost:3000/posts/${id}`,{

        method: 'PATCH',  // same like tyre puncher banana

        body: JSON.stringify(send_data),
        
        headers:{
            'Content-Type' : 'application/json',
        },
    });
    let data = await res.json();
    console.log(data);
}

//===============================================================
let replacePost = async ()=> {
    let id = document.getElementById('replace_id').value;

    let title = document.getElementById('replace_title').value;

    let send_data = {
        title, 
    };

    let res = await fetch(`http://localhost:3000/posts/${id}`,{

        method: 'PUT',  // same like tyre puncher banana

        body: JSON.stringify(send_data),
        
        headers:{
            'Content-Type' : 'application/json',
        },
    });
    let data = await res.json();
    console.log(data);
}