//================= Register ========================

//https://masai-api-mocker.herokuapp.com/auth/register

//===================== User Regisration =====================
let register = async () => {
    
    let register_data = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        username : document.getElementById('username').value,
        mobile : document.getElementById('mobile').value,
        description : document.getElementById('description').value
    };


    
    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
        method:'POST',
        body: JSON.stringify(register_data),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let data = await res.json();
    console.log(data);
}


//================== Login ===================
let login = async () => {
    let login_data = {
        username : document.getElementById('login_username').value,
        password : document.getElementById('login_password').value,
    };

   
    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
        method: 'POST',

        body: JSON.stringify(login_data),

        headers:{
            'Content-Type' : 'application/json'
        }
    });

    let data = await res.json();
    console.log(data);

    
    
    
    let {username} = login_data; 

    
    let {token} = data;

    getProfile(username,token);
   
}

//====================== profile =======================


let getProfile = async (username,token) => {
   
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
      
        headers:{
            'Content-Type' : 'application/json',
            Authorization: `Bearer ${token}`
        },
    });

    let data = await res.json();
    console.log(data);

}
