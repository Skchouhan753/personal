//https://dry-island-32080.herokuapp.com/api/employee
// sorting
// filtering
// pagination
// updating
// all using json-server

async function addEmployee(){
    let name = document.getElementById('name').value;
    let batch = document.getElementById('batch').value;
    let course = document.getElementById('course').value; 
    let age = document.getElementById('age').value;
    let mobile = document.getElementById('mobile').value;
    let score = document.getElementById('score').value;
       
    let userData = {
                        name,
                        batch,
                        course,
                        age,
                        mobile,
                        score,
                        status:true
                    };
    let res = await fetch('https://dry-island-32080.herokuapp.com/api/employee',{
        method:"POST",
        body: JSON.stringify(userData),
        headers:{
            "Content-Type": "application/json"
        }

    })
    getData()
}
//---------------my idea----------------------
let i = 1;
async function getData(i){
    let res = await fetch(`https://dry-island-32080.herokuapp.com/api/employee?_page=${i}&_limit=5`)
    //  console.log(res)
    let data = await res.json();
    //  console.log(data)
 append(data)
}
getData(i)

//------------------------------------------
let container = document.getElementById('container')
function append(data){
    container.innerHTML = null;

    data.forEach((el)=>{
        let div = document.createElement('div')
        
        let name = document.createElement('h3')
        name.innerText = "Name : "+el.name

        let batch = document.createElement('p')
        batch.innerText = "Batch : "+el.batch

        let course = document.createElement('p')
        course.innerText = "Course : "+el.course

        let age = document.createElement('p')
        age.innerText = "Age : "+el.age

        let mobile = document.createElement('p')
        mobile.innerText = "Mobile No. : "+el.mobile

        let score = document.createElement('p')
        score.innerText = "Score : "+el.score

        // let status = document.createElement('p')
        // status.innerText = el.status

        let btn1 = document.createElement('button')
        btn1.innerText = 'Update Details'
        btn1.onclick = ()=>{
            let myId = el.id;
            updateAge(myId);
        }
        let btn2 = document.createElement('button')
        btn2.innerText = 'Delete'
        btn2.onclick = ()=>{
            let myId = el.id;
            deleteEmployee(myId);
        }

        let hr = document.createElement('hr')

        div.append(name,batch,course,age,mobile,score,hr,btn1,btn2)
        container.append(div)
    });
};

//---------------Updaing the age--------------------
async function updateAge(myId){

    let age = window.prompt("Enter new age")
    let name = window.prompt("Enter new Name")
    let batch = window.prompt("Enter new Batch")
    let course = window.prompt("Enter new Course")
    let mobile = window.prompt("Enter new Mobile No.")
    let score = window.prompt("Enter new Score")

    let newAge = {
                    name: name,
                    batch: batch,
                    course: course,
                    age: age,
                    mobile: mobile,
                    score: score,
                 }
    let res = await fetch(`https://dry-island-32080.herokuapp.com/api/employee/${myId}`,{
        method: "PATCH",
        body: JSON.stringify(newAge),
        headers:{
            "Content-Type": "application/json"
        }
    });
   getData(); 
};
async function deleteEmployee(myId){
    let res = await fetch(`https://dry-island-32080.herokuapp.com/api/employee/${myId}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    });
   getData(); 
};
//---------------sorting-------------------------
//Add _sort and _order (ascending order by default)
// GET /posts?_sort=views&_order=asc
// GET /posts/1/comments?_sort=votes&_order=asc
// For multiple fields, use the following format:
// GET /posts?_sort=user,views&_order=desc,asc
async function sortLtH(){
    let res = await fetch(`https://dry-island-32080.herokuapp.com/api/employee?_sort=age&_order=asc`)
    let data = await res.json();
    console.log(data)
    append(data)
} 
async function sortHtL(){
    let res = await fetch(`https://dry-island-32080.herokuapp.com/api/employee?_sort=age&_order=desc`)
    let data = await res.json();
    console.log(data)
    append(data)
}
//----------------filter-----------------
// Add _gte or _lte for getting a range
// GET /posts?views_gte=10&views_lte=20
// Add _ne to exclude a value
// GET /posts?id_ne=1
// Add _like to filter (RegExp supported)
// GET /posts?title_like=server
async function filterData(){
    let value = window.prompt("Enter age to filter")
    let res = await fetch(`https://dry-island-32080.herokuapp.com/api/employee?course=${value}`)
    let data = await res.json();
    console.log(data)
    append(data)
}

//------------------Paginate---------------------
// Use _page and optionally _limit to paginate returned data.
// In the Link header you'll get first, prev, next and last links.
// GET /posts?_page=7
// GET /posts?_page=7&_limit=20
// async function pagination(){      //_page=1&_limit=3 --> limit is data per page
//     let res = await fetch(`https://dry-island-32080.herokuapp.com/api/employee?_page=${i}&_limit=5`)
//     let data = await res.json();
//     console.log(data)
// }
 async function next(){
//     let res = await fetch(`https://dry-island-32080.herokuapp.com/api/employee`)
//     let data = await res.json();
// console.log(data.length)
    if(i===5){
        i=5;
     alert('No more pages')   
    }else{
        i++
    }
    getData(i)
 }
function previous(){
if(i===0){
    i=0;
}
else{
    i--;
}
getData(i)
}