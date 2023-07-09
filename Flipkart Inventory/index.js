//https://dry-island-32080.herokuapp.com/api/trouser
async function addProduct(){
    let category = document.getElementById('category').value;
    let image = document.getElementById('image').value; 
   
    //    console.log(category)
    let Data = {
                    category,
                    image,
                    status:true
                };
   
        let res = await fetch(`https://dry-island-32080.herokuapp.com/api/${category}`,{
            method:"POST",
            body: JSON.stringify(Data),
            headers:{
                "Content-Type": "application/json"
            }
        })
}