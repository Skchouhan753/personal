//https://github.com/masai-school/api-mocker/wiki/Authentication

// let base_url = `https://masai-api-mocker.herokuapp.com`
// POST URL - /auth/login

let login = async ()=>{
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let user_data = {
        username,
        password,
    }

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method : "POST",
            body : JSON.stringify(user_data),
            mode : "no-cors",
            headers : {
                "Content-Type" : "application/json"
            },
    })

    let data = await res.json();

    getProfile(username,data.token)
    console.log(data)
}

//--------------------Profile--------------------------------
// GET URL - /user/<username>
// Requried Headers - Authorization: Bearer <user token>

let getProfile = async (username,token)=>{
    
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
            
            headers : {
                Authorization : `Bearer ${token}`
            },
    });

    let data = await res.json();
    console.log(data)
};