//---------------closures-----------------
        // function greet(){
        //     let n = 'raj'

        //     return function (){

        //         return function(){

        //             console.log(n)
        //         }
        //     }
        // }
        // // greet()()()

        // let x = greet()
        // let y = x()
        // y()

// let url = `https://jsonmock.hackerrank.com/api/articles`

let fetchData = []

for(let i=0;i<6;i++){   // try using async await
    let myfetch = fetch(`https://jsonmock.hackerrank.com/api/articles?page=${i}`).then((res)=>res.json())
    fetchData.push(myfetch)
}

let all_data;

async function getData(){

    try{
        
        let data = await Promise.all(fetchData)        
            
        all_data = []

        for(let res of data){
            all_data.push(...res.data)
            // console.log(res)
        }
        // console.log(all_data)
        
        append(all_data)
        
    }
    catch(error){
        console.log(error)
    }
    // finally{
    //     console.log('hi')
    
    // } 
}   
    getData();

let container = document.getElementById('container')

function append(data){
    container.innerHTML = null;
    data.forEach((el)=>{
        let div = document.createElement('div')
        div.setAttribute('class',"magazine")
        
        let title = document.createElement('h4')
        title.innerText = el.title
        
        let author = document.createElement('h4')
        author.innerText = el.author

        let comment = document.createElement('h4')
        comment.innerText = el.num_comments

        div.append(title,author,comment)

        container.append(div)
    })
    
}

function sort_LtH(){
    
    let srt_LtH = all_data.sort(function(a,b){
        return a.num_comments - b.num_comments
    })
    // console.log(srt_LtH)
    append(srt_LtH)
}
function sort_HtL(){
    let srt_HtL = all_data.sort(function(a,b){
        return b.num_comments - a.num_comments
    })
    // console.log(srt_HtL)
    append(srt_HtL)
}