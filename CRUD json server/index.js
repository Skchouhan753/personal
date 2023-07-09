//================= Register ========================

//https://masai-api-mocker.herokuapp.com/auth/register

//===================== User Regisration =====================
let register = async () => {
    // collect all the data
    let register_data = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        username : document.getElementById('username').value,
        mobile : document.getElementById('mobile').value,
        description : document.getElementById('description').value
    };

    // base url --> https://masai-api-mocker.herokuapp.com/
    // sub url --> auth/register

    // register api --> 
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

    // base url --> https://masai-api-mocker.herokuapp.com/
    // sub url --> auth/login
    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
        method: 'POST',

        body: JSON.stringify(login_data),

        headers:{
            'Content-Type' : 'application/json'
        }
    });

    let data = await res.json();
    console.log(data);

    // get the profile when login is successfull 
    
    // let username = login_data.username; // normal way
    let {username} = login_data;  // destructured way

    // let token = data.token; // normal way 
    let {token} = data;

    getProfile(username,token);

    // if(data.error===false){
    //     let div = document.getElementById('greetings');
    //     let h1 = document.createElement('h1');
    //     h1.innerText = 'Hi! Welcome'
    //     div.append(h1);
    // }
   
        let div = document.getElementById('greetings');
        let h1 = document.createElement('h1');
        h1.innerText = 'Login failed!'
        div.append(h1);

}

//====================== profile =======================

// get the profile when login is successfull 
let getProfile = async (username,token) => {
    // username
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        // method: '',
        
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    let data = await res.json();
    console.log(data);

}
