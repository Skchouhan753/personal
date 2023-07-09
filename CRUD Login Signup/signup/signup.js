
// let base_url = `https://masai-api-mocker.herokuapp.com`  //---> Base URL

// POST URL - /auth/register
//--------------------user registration on server-----------------------
let register = async ()=>{
    // let name = document.getElementById('name').value;
    // let email = document.getElementById('email').value;
    // let mobile = document.getElementById('mobile').value;
    // let username = document.getElementById('username').value;
    // let password = document.getElementById('password').value; //https://masai-api-mocker.herokuapp.com/auth/register
    // console.log(name,email,mobile,username,password)
    
    let form_data_to_send = {
                                name : document.getElementById('name').value,
                                email : document.getElementById('email').value,
                                
                                username : document.getElementById('username').value,
                                password : document.getElementById('password').value
                                    
                            }
    console.log(form_data_to_send)

    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
        method : "POST",
        body : JSON.stringify(form_data_to_send),
        // mode : "no-cors", //if throws error then try this
        headers : {
            "Content-Type": "application/json", 
        },
    });
    console.log(res)
    let data = await res.json();
    console.log(data);
}
//-----------------user login o server----------------------
// POST URL - /auth/login

