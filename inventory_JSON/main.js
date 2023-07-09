// Use deployed URL.
//https://afternoon-atoll-89800.herokuapp.com/api/products

async function addProduct() {

    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;
    let delivery = document.getElementById('delivery').value;
    let image = document.getElementById('image').value;
    let data = {
                    name,
                    price,
                    description,
                    delivery,
                    image
                }
    let res = await fetch(`https://afternoon-atoll-89800.herokuapp.com/api/products`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
            document.getElementById('name').value = null;
            document.getElementById('name').value = null;
            document.getElementById('price').value = null;
            document.getElementById('description').value = null;
            document.getElementById('delivery').value = null;
            document.getElementById('image').value = null;
    getData()
}


async function getData() {
    let res = await fetch(`https://afternoon-atoll-89800.herokuapp.com/api/products`);
    let data = await res.json();
    console.log(data);

    append(data)
}
getData()

let container = document.getElementById('container')
function append(data) {
    container.innerHTML = null;
    data.forEach((el) => {
        let div = document.createElement('div')
        div.setAttribute('class', 'item')

        let name = document.createElement('h4')
        name.innerText = el.name

        let price = document.createElement('p')
        price.setAttribute('class', 'product_price')
        price.innerText = el.price

        let image = document.createElement('img')
        image.src = el.image

        let description = document.createElement('p')
        description.innerText = el.description

        let delivery = document.createElement('p')
        delivery.setAttribute('class','product_delivery')
        delivery.innerText = "Delivery By : "+el.delivery

        let removeBtn = document.createElement('button')
        removeBtn.setAttribute('class', 'remove_item')
        removeBtn.innerText = "Remove"
        removeBtn.onclick = () => {
            let id = el.id;
            removeProduct(id)
        }

        let updateBtn = document.createElement('button')
        updateBtn.setAttribute('class', 'update_price')
        updateBtn.innerText = 'Update Price'
        updateBtn.onclick = () => {
            let id = el.id;
            updateProduct(id)
        }
        

        div.append(image, name, price, delivery, description, removeBtn, updateBtn)
        container.append(div)
    })
}

async function removeProduct(id) {
    let res = await fetch(`https://afternoon-atoll-89800.herokuapp.com/api/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    getData()
}
async function updateProduct(id) {
    let new_price = prompt(`Enter new price`)
    let newPrice = {
        price: new_price
    }
    let res = await fetch(`https://afternoon-atoll-89800.herokuapp.com/api/products/${id}`, {
        method: "PATCH",
        body: JSON.stringify(newPrice),
        headers: {
            "Content-Type": "application/json"
        }
    });
    getData()
}

async function sortLtH(){
    let res =  await fetch(`https://afternoon-atoll-89800.herokuapp.com/api/products/?_sort=price&_order=asc`)
    let data = await res.json();
    append(data)
}
async function sortHtL(){
    let res =  await fetch(`https://afternoon-atoll-89800.herokuapp.com/api/products/?_sort=price&_order=desc`)
    let data = await res.json();
    append(data)
}
async function greaterThan(){
    let res =  await fetch(`https://afternoon-atoll-89800.herokuapp.com/api/products/?price_gte=4000`)
    let data = await res.json();
    append(data)
}
async function lessThan(){
    let res =  await fetch(`https://afternoon-atoll-89800.herokuapp.com/api/products/?price_lte=4000`)
    let data = await res.json();
    append(data)
}