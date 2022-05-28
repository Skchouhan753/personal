// ### **Products Cart Object**
// - Given an input of products in the below format (Name Quantity Price)
// - Input
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]
// - Create an object with the key `data` which is an array of objects with the format 
//   `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items 
//   (multiplying quantity of each with its price)
// - Sample output for the above case `290`

let product=["Rice", "Dal", "Salt"];
let quantity=[2, 3, 1];
let price=[60, 50, 20];
let arr=[];

for(let i=0;i<product.length;i++){
    let data={};
data["name"]=product[i];
data["quantity"]=quantity[i];
data["price"]=price[i];
//console.log(data);
arr.push(data);

};
// console.log(data);

//console.log(arr);

let total=0;
for(let i=0;i<arr.length;i++){
    total=total+arr[i]["quantity"]*arr[i]["price"];
    
}
//console.log(total);
function calculate_total(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total=total+arr[i]["quantity"]*arr[i]["price"];
        //return total;
        //console.log(total)
    };
    console.log(total);
}
//console.log(calculate_total());
calculate_total(arr);
//console.log(x);